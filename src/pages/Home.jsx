import { useContext } from "react";
import Product from "../component/Product";
import { AppContext } from "../context/AppProvider";

const Home = () => {
  const { filteredProducts } = useContext(AppContext);

  return (
    <div className="">
      <div className="flex gap-5 flex-row flex-wrap justify-center w-full">
        {filteredProducts &&
          filteredProducts.map((product, key) => {
            return <Product product={product} key={key} />;
          })}
      </div>
    </div>
  );
};

export default Home;
