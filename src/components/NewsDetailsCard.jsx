import React from 'react';

const NewsDetailsCard = ({news}) => {
    console.log(news)
    return (
        <div>
            <h2 className='text-2xl'>{news.title}</h2>
        </div>
    );
};

export default NewsDetailsCard;