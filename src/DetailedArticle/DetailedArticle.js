import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailedArticle.css';

function DetailedArticle({ articles }) {
    const { title } = useParams();
    const article = articles.find(article => article.title === title);

    if (!article) {
        return <div>Article not found</div>;
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    };

    return (
        <div className="detailed">
            <div className='article'>
                <h4>{article.title}</h4>
                <p>Date: {formatDate(article.publishedAt)}</p>
                <p>By: {article.author}</p>
                <p>{article.content}</p>
                <p>Source: {article.source.name}</p>
                <a href={article.url}>Read more</a>
            </div>
            <img src={article.urlToImage} alt={article.title} />
        </div>
    );
}

export default DetailedArticle;
