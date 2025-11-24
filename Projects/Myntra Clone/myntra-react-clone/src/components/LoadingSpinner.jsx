const LoadingSpinner = () => {
  return (
    <div className="text-center d-flex flex-column align-items-center justify-content-center h-100">
      <div
        className="spinner-border text-warning"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
