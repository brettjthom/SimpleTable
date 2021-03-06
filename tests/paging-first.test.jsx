import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import PagingFirst from '../src/paging-first';
import PagingNumber from '../src/paging-number';

test('PagingFirst through a prop to PagingNumber calls set page', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingFirst page={5} numPages={100} setPage={onClick} />
  );
  element.find(PagingNumber).find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 1);
  element.find(PagingNumber).find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 2);
});

test('PagingFirst through a prop to PagingNumber does not call set page when at first page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingFirst page={1} numPages={100} setPage={onClick} />
  );
  element.find(PagingNumber).find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 0);
});

test('PagingFirst renders a PagingNumber with the proper props', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingFirst page={5} numPages={100} setPage={onClick} />
  );
  expect(element.find(PagingNumber).props().index).to.equal(1);
  expect(element.find(PagingNumber).props().page).to.equal(5);
  expect(element.find(PagingNumber).props().numPages).to.equal(100);
  expect(element.find(PagingNumber).props().setPage).to.be.a('function');
});

test('PagingFirst renders ONE PagingNumber', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingFirst page={5} numPages={100} setPage={onClick} />
  );
  expect(element.find(PagingNumber).length === 1).to.equal(true);
});

test('PagingFirst does not render with no page', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingFirst page={0} numPages={0} setPage={onClick} />
  );
  expect(element.isEmptyRender()).to.equal(true);
  element = mount(
    <PagingFirst page={1} numPages={1} setPage={onClick} />
  );
  expect(element.isEmptyRender()).to.equal(false);
});
