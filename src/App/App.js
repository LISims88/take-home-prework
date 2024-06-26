import DetailedArticle from '../DetailedArticle/DetailedArticle.js';
import Header from '../Header/Header';
import NewsContainer from '../NewsContainer/NewsContainer';
import getArticles from '../apiCalls.js';
import mockData from '../mockData.js';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching Articles:', error);
      }
    };

    fetchArticles();
  }, []);  
  return(
    <>
    <Header data={mockData}/>
    {/* <NewsContainer data={mockData}/> */}
    <DetailedArticle data={mockData}/>
    </>
  )
}

export default App;
