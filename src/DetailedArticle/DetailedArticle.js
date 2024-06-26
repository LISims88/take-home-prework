import './DetailedArticle.css'

function DetailedArticle({data}){
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
      };
    return (
        <div className="detailed">
          <div className='article'>
          <h4>{data[0].title}</h4>
          <p>Date: {formatDate(data[0].publishedAt)}</p>
          <p>By: {data[0].author}</p>
          <p>{data[0].content}</p>
          <p>Source: {data[0].source.name}</p>
          <a href={data[0].url}>Read more</a>
          </div>
          <img src={data[0].urlToImage} alt={data[0].title} />
        </div>
      );
}
export default DetailedArticle