import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const cartItem = useSelector((state) => state.cart);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const itemIndex = cartItem.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <div className="bag-page container">
      <div className="row">
        <div className="bag-items-container-outer border-end col-lg-8">
          {finalItems.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <div className="col-lg-4">
          <BagSummary />
        </div>
      </div>
    </div>
  );
};

export default Bag;
