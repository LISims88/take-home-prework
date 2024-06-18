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
        <p>By {data.author}</p>
        <p>Source: {data.source.name}</p>
        <p>{data.description}</p>
        <a href={data.url}>Read more</a>
        </div>
        <img src={data.urlToImage} alt={data.title} />
      </div>
    );
  }
  
  export default NewsCard;