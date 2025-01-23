import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import Spinner from './Spinner';

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      if (!category.trim()) {
        setArticles([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      setArticles([]);

      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=YOUR_API_KEY`
        );

        if (response.data.articles.length === 0) {
          setError('No results found');
        } else {
          setArticles(response.data.articles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Error fetching news. Please try again later.');
      }
      setLoading(false);
    };

    fetchNews();
  }, [category]);

  return (
    <div className="news-list">
      {loading && <Spinner />}
      {!loading && error && <p className="error">{error}</p>}
      {!loading && articles.length > 0 && articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
      {!loading && !error && articles.length === 0 && <p className="no-data">No data found</p>}
    </div>
  );
};

export default NewsList;
