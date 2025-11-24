const WelcomeMessage = ({ fetchAllPosts }) => {
  return (
    <div className="p-5 text-center bg-body-tertiary rounded-3 d-flex flex-column align-items-center justify-content-center h-100">
      <h1 className="text-body-emphasis">No Posts Available</h1>
      <p className="col-lg-8 mx-auto fs-5 text-muted">
        There are currently no posts to display. Once new posts are added,
        <br />
        they will appear here automatically. Stay tuned for upcoming updates and
        exciting content.
      </p>

      <div className="d-inline-flex gap-2">
        <button
          className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
          type="button"
        >
          Create New Post
        </button>
        <button
          className="btn btn-success btn-lg px-4 rounded-pill"
          type="button"
          onClick={fetchAllPosts}
        >
          View All Posts
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
