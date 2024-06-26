import { Route, Routes } from 'react-router-dom';
import DetailedArticle from '../DetailedArticle/DetailedArticle.js';
import Header from '../Header/Header';
import NewsContainer from '../NewsContainer/NewsContainer';
import getArticles from '../apiCalls.js';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([])
  const [sortedArticles, setSortedArticles] = useState([]);
  const [sortOption, setSortOption] = useState("");

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
    useEffect(()=> {
      let sorted = [...articles];
      if (sortOption === "alphabetically") {
        sorted.sort((a,b) => a.title.localeCompare(b.title));
      } else if (sortOption === "source"){
        sorted.sort((a,b)=> a.source.name.localeCompare(b.source.name))
      }
      setSortedArticles(sorted)
    }, [sortOption, articles]);


    const handleOptionChange = (option) => {
      setSortOption(option);
  };

  return(
    <>
    <Header onOptionChange={handleOptionChange}/>
    <Routes>
      <Route path='/' element={<NewsContainer data={sortedArticles}/>}/>
      <Route path='/article/:title' element= {<DetailedArticle articles={sortedArticles}/>} />
    </Routes>
    </>
  )
}

export default App;
