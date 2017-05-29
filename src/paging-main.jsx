import React, { PropTypes } from 'react';
import PagingNext from './paging-next';
import PagingPrevious from './paging-previous';
import PagingNumber from './paging-number';
import PagingFirst from './paging-first';
import PagingLast from './paging-last';
import PagingEllipsesLeft from './paging-ellipses-left';
import PagingEllipsesRight from './paging-ellipses-right';

export default class Paging extends React.Component {
    setPage(page, e) {
        if (page < 1 || page > this.props.numPages) {
            return;
        }
        this.props.setPage(page);
        e.preventDefault();
    }

    render() {
        let i = 1;
        let pagingNumbers = [];

        // Create individual numbers
        for (i = this.props.page - 2; i <= this.props.page + 2; i++) {
            if (i < 1 || i > this.props.numPages) {
                continue;
            }

            pagingNumbers.push(
                <PagingNumber page={this.props.page}
                  index={i}
                  numPages={this.props.numPages}
                  setPage={this.props.setPage.bind(this)}
                />
            );
        }

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="dataTables_paginate paging_simple_numbers">
                        <ul className="pagination">
                            <PagingPrevious page={this.props.page}
                              numPages={this.props.numPages}
                              setPage={this.props.setPage.bind(this)}
                            />
                            <PagingFirst page={this.props.page}
                              numPages={this.props.numPages}
                              setPage={this.props.setPage.bind(this)}
                            />
                            <PagingEllipsesLeft page={this.props.page}
                              numPages={this.props.numPages}
                            />
                            {pagingNumbers}
                            <PagingEllipsesRight page={this.props.page}
                              numPages={this.props.numPages}
                            />
                            <PagingLast page={this.props.page}
                              numPages={this.props.numPages}
                              setPage={this.props.setPage.bind(this)}
                            />
                            <PagingNext page={this.props.page}
                              numPages={this.props.numPages}
                              setPage={this.props.setPage.bind(this)}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

Paging.defaultProps = {
    page: 1,
    numPages: 1,
    setPage: { function() {} },
};
Paging.propTypes = {
    page: PropTypes.number,
    numPages: PropTypes.number,
    setPage: PropTypes.func,
};