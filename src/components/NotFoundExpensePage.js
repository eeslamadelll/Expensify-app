import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundExpensePage = () => {
    return (
        <div>
            404 Not Found Page! <Link to="/">Back Home</Link>
        </div>
    );
}

export default NotFoundExpensePage;