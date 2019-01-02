import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <p>Description : { description }</p>
            </Link>
            <span>Created At : { moment(createdAt).format('MMMM Do, YYYY') }</span>
            <p>Amount : { numeral(amount / 100).format('$0,0.00') }</p>
        </div>
    )
};

export default ExpenseListItem;