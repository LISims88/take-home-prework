import NewsCard from '../NewsCard/NewsCard';
import './NewsContainer.css'

function NewsContainer({data}) {
    return (
      <div className="news-container">
        {data.map((data, index) => (
          <NewsCard key={index} data={data} />
        ))}
      </div>
    );
  }
export default NewsContainer