const FoodInput = ({ getKeyDown }) => {
  return (
    <div className="card-body">
      <input
        className="form-control"
        type="text"
        placeholder="Enter Food Item"
        aria-label="default input example"
        onKeyDown={getKeyDown}
      ></input>
    </div>
  );
};
export default FoodInput;
