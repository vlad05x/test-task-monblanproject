import heartIcon from '../assets/Vector.svg';
import commentIcon from '../assets/Vector (1).svg';

export default function PostItem({ post, viewMode }) {
  const { image, todayStats, histStats, uploadDate } = post;

  if (viewMode === 'grid') {
    return (
      <div className="feed-item">
        <div className="post-image-wrapper">
          <img src={image} alt="Instagram post" loading="lazy" />
        </div>
        <div className="post-metadata">
          <div className="meta-row header-row">
            <span className="meta-title">Today</span>
            <span className="meta-title">{histStats.date}</span>
          </div>
          
          <div className="meta-row stats-row">
            <span className="stat-item">
              <img src={heartIcon} alt="Likes" />
              {todayStats.likes}
            </span>
            <span className="stat-item">
              <img src={heartIcon} alt="Likes" />
              {histStats.likes}
            </span>
          </div>

          <div className="meta-row stats-row">
            <span className="stat-item">
              <img src={commentIcon} alt="Comments" />
              {todayStats.comments}
            </span>
            <span className="stat-item">
              <img src={commentIcon} alt="Comments" />
              {histStats.comments}
            </span>
          </div>

          <div className="meta-row footer-row">
            <span className="meta-title">Image upload</span>
            <span className="meta-date">{uploadDate}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="feed-item">
      <div className="post-image-wrapper">
        <img src={image} alt="Instagram post" loading="lazy" />
      </div>
      
      <div className="feed-col">
        <div className="col-title">Today</div>
        <div className="col-stats">
          <span className="stat-item">
            <img src={heartIcon} alt="Likes" />
            {todayStats.likes}
          </span>
          <span className="stat-item">
            <img src={commentIcon} alt="Comments" />
            {todayStats.comments}
          </span>
        </div>
      </div>

      <div className="feed-col">
        <div className="col-title">{histStats.date}</div>
        <div className="col-stats">
          <span className="stat-item">
            <img src={heartIcon} alt="Likes" />
            {histStats.likes}
          </span>
          <span className="stat-item">
            <img src={commentIcon} alt="Comments" />
            {histStats.comments}
          </span>
        </div>
      </div>

      <div className="feed-col">
        <div className="col-title">Image upload</div>
        <div className="col-date">{uploadDate}</div>
      </div>
    </div>
  );
}
