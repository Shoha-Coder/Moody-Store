import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";
import Style from "./Cards.module.scss";

const TCards = () => {
  const Api = "https://burger-cheddler-back.shoha-coder.uz";
  const [products, setProducts] = useState([]);
  const GetApiFunc =  async () => {
    await axios.get(Api + `/products/`).then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(() => {
    GetApiFunc();
  }, []);
  return (
    <div>
      <div className={Style.Sale}>
        {products.slice(0, 1).map((product) => {
          return (
            <React.Fragment key={product.id}>
              <img
                className={Style.Sale__img}
                src={process.env.PUBLIC_URL + "/images/" + product.img}
                alt=""
              />
              <div className={Style.Sale__bottom}>
                <h3 className={Style.Sale__title}>{product.title}</h3>
                <h1 className={Style.Sale__description}>
                  {product.description}
                </h1>
                <Link to={`/single-product/${product.id}/`}>
                  <button>{product.btn}</button>
                </Link>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className={Style.Top__cards}>
        {products.slice(1, 3).map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div className={Style.Top__card}>
                <img
                  className={Style.Top__card__img}
                  src={process.env.PUBLIC_URL + "/images/" + product.img}
                  alt=""
                />
                <div className={Style.Top__card__bottom}>
                  <h3 className={Style.Top__card__title}>{product.title}</h3>
                  <Link to={`/single-product/${product.id}/`}>
                    <button>{product.btn}</button>
                  </Link>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TCards;