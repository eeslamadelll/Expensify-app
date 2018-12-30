import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseListItem = ({id, description, amount, createdAt}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <p>Description : { description }</p>
            </Link>
            <span>Created At : { createdAt }</span>
            <p>Amount : { amount }</p>
        </div>
    )
};

export default ExpenseListItem;