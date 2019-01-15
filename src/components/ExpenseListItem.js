import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt}) => {
    return (
            <Link className="list-items" to={`/edit/${id}`}>
                <div className="item">
                    <p className="description">{ description }</p>
                    <span className="date">{ moment(createdAt).format('MMMM Do, YYYY') }</span>
                </div>
                <div className="item">
                    <p className="amount">{ numeral(amount / 100).format('$0,0.00') }</p>
                </div>
            </Link>
    )
};

export default ExpenseListItem;