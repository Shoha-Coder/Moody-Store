import React, { useEffect, useState } from "react";
import Style from "./Bed_Sets.module.scss";
import axios from "axios";

const BedSets = () => {
  const Api = "https://burger-cheddler-back.shoha-coder.uz";
  const [products, setProducts] = useState([]);
  const GetApiFunc = () => {
    axios.get(Api + `/products/`).then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(() => {
    GetApiFunc();
  }, []);
  return (
    <div>
      <div className={Style.Bed__sets}>
        <div className={Style.Bed__sets_}>
          {products.slice(11, 12).map((product) => {
            return (
              <React.Fragment key={product.id}>
                <h1 className={Style.title}>{product.title}</h1>
                <h1 className={Style.price}>
                  ${product.price.price} <span>${product.price.old}</span>
                </h1>
                <p className={Style.description}>{product.description}</p>
                <button className={Style.btn}>{product.btn}</button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BedSets