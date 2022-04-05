import React from 'react';
import './Blogs'
const testData = [
    { 'n': 1, },
    { 'n': 2, },
    { 'n': 3, },
    { 'n': 4, },
    { 'n': 5, },
    { 'n': 6, },
    { 'n': 7, },
    { 'n': 8, },
    { 'n': 9, },

];
const Blogs = () => {
    return (
        <div>
            {testData.length > 0 ? testData.slice(0, 3).map(item => <div key={item.n}>{item.n}</div>) : <></>}
        </div>
    );
};

export default Blogs;