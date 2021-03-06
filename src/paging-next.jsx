import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PagingNext extends React.Component {
    nextPage(e) {
        if (this.props.page < this.props.numPages) {
            this.props.setPage(this.props.page + 1);
        }
        e.preventDefault();
    }

    render() {
        const nextClass = classNames('paginate_button', 'next',
            { disabled: this.props.page === this.props.numPages || this.props.numPages === 0 });

        return (
            <li key="paging-next" className={nextClass}>
                <a href="#" onClick={this.nextPage.bind(this)}>Next</a>
            </li>
        );
    }
}

PagingNext.defaultProps = {
    page: 1,
    numPages: 1,
    setPage: { function() {} },
};
PagingNext.propTypes = {
    page: PropTypes.number,
    numPages: PropTypes.number,
    setPage: PropTypes.func,
};