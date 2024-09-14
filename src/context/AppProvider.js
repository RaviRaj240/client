import axios from "axios";
import { useEffect, useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    try {
      // const response = await axios.get(
      //   "https://api.escuelajs.co/api/v1/products"
      // );
      const response = await axios.get("http://localhost:8080/products");
      // console.log("Response: ", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    handleSearchFilter();
  }, [searchTerm, products]);

  const handleFilter = (category) => {
    const filters = products.filter((product) => product.category === category);
    setFilteredProducts(filters);
  };

  const handleSearchFilter = () => {
    const searchedProducts =
      products &&
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFilteredProducts(searchedProducts);
  };

  const updateCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to get the product by id
  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        filteredProducts,
        searchTerm,
        cart,
        setProducts,
        setFilteredProducts,
        setSearchTerm,
        getProducts,
        handleFilter,
        handleSearchFilter,
        updateCart,
        getProductById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
