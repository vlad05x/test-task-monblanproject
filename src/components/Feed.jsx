import PostItem from './PostItem';

export default function Feed({ posts, viewMode, onLoadMore, hasMore }) {
  return (
    <main>
      <div className={`feed-container view-${viewMode}`}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostItem key={post.id} post={post} viewMode={viewMode} />
          ))
        ) : (
          <div className="empty-state">
            No posts found for the selected date range.
          </div>
        )}
      </div>

      {hasMore && posts.length > 0 && (
        <div className="load-more-container">
          <button 
            type="button" 
            className="btn-load-more" 
            onClick={onLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
}
