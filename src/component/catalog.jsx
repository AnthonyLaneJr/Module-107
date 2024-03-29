import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import { useState, useEffect } from "react";

const Catalog = () => {
  let [products, setProducts] = useState([]);

  const loadCatalog = async () => {
    let service = new DataService(); //instance
    let data = await service.getCatalog();
    setProducts(data);
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
      <h2>This is the Catalog Component.</h2>
      <h3>We have {products.length} products.</h3>
      <div className="catalog_product">
        {products.map((prod) => (
        <Product key={prod._id} data={prod}></Product>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
