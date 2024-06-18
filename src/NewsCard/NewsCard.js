import './NewsCard.css'
function NewsCard({ data }) {
    return (
      <div className="news-card">
        <div className='article'>
        <h4>{data.title}</h4>
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