import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const HomeItem = ({ item }) => {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(item.id));
  };

  const handleRemoveCart = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };

  const itemElemFound = cartItems.indexOf(item.id) >= 0;

  return (
    <div className="col-lg-3">
      <div className="item-container py-3">
        <img className="item-image mb-2" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {itemElemFound ? (
          <button
            type="button"
            className="btn btn-add-bag d-inline-flex align-items-center justify-content-center gap-2 btn-danger fw-medium py-2"
            onClick={handleRemoveCart}
          >
            <MdDeleteOutline fontSize={"20px"} />
            <span>Remove</span>
          </button>
        ) : (
          <button
            className="btn btn-add-bag d-inline-flex align-items-center justify-content-center gap-2 btn-success fw-medium py-2"
            onClick={handleAddToCart}
          >
            <MdOutlineAddShoppingCart fontSize={"20px"} />
            <span>Add to Bag</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeItem;
