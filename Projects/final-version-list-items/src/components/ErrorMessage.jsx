const ErrorMessage = ({ items }) => {
  return (
    <>
      {items.length === 0 && (
        <div className="card-body border-top">
          <h5 className="card-title">No food items available right now.</h5>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
