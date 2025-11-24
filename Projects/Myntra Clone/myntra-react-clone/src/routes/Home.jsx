import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <div className="container items-container">
      <div className="row">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
