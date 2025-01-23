import React from 'react';
import defaultImage from '../assets/news.jpg';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.urlToImage || defaultImage} alt="news" className="news-image" />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
    </div>
  );
};

export default NewsCard;
