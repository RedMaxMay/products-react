import Product from "../Product";
import { useState, useEffect } from "react";
import s from "./style.module.css";
import Total from "../Total";
import Modal from "../Modal";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [productInModal, setProductInModal] = useState({});

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  if (modal) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "18px";
  } else {
    document.body.style.overflow = "visible";
    document.body.style.paddingRight = "";
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const modalToggle = (id) => {
    setModal((prev) => !prev);
    setProductInModal(products.find((product) => product.id === id));
  };

  return (
    <>
      <a
        target="_blank"
        className={s.gh}
        href="https://redmaxmay.github.io/products-react/" rel="noreferrer"
      >
        Link to GitHub
      </a>

      <div className={s.wrap}>
        <h1>Products:</h1>
        {loading && <p className={s.loading}>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading &&
          products.map((prod) => (
            <Product
              product={prod}
              key={prod.id}
              deleteProduct={deleteProduct}
              modalToggle={modalToggle}
            />
          ))}
        {!loading && <Total products={products} />}
        {modal && <Modal modalToggle={modalToggle} product={productInModal} />}
      </div>
    </>
  );
}

export default App;
