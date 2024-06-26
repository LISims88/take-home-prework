import './NewsCard.css'
function NewsCard({ data }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };
    return (
      <div className="news-card">
        <div className='article'>
        <h4>{data.title}</h4>
        <p>{formatDate(data.publishedAt)}</p>
        </div>
        <img src={data.urlToImage} alt={data.title} />
      </div>
    );
  }
  
  export default NewsCard;