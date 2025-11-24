const SingleFoodItem = ({ foodItem, boughtItem, buyFoodItem }) => {
  return (
    <>
      <li
        className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between gap-2 ${
          boughtItem && "list-group-item-success"
        }`}
      >
        <span>{foodItem}</span>
        <button type="button" className="btn btn-success" onClick={buyFoodItem}>
          Buy
        </button>
      </li>
    </>
  );
};
export default SingleFoodItem;
