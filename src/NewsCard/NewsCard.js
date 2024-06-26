import './NewsCard.css'
import { Link } from 'react-router-dom';
function NewsCard({ data }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };
    return (
      <div className="news-card">
        <div className="article" key={data.title}>
        <h4><Link to={`/article/${data.title}`}>{data.title}</Link></h4>
        <p>{formatDate(data.publishedAt)}</p>
        <p>{data.description}</p>
        </div>
        <img src={data.urlToImage} alt={data.title} />
      </div>
    );
  }
  
  export default NewsCard;