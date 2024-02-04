import React, { useEffect, useState } from "react";
import Style from "./Cards.module.scss";
import axios from "axios";
import { PiShoppingCartSimple } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Stars from "../stars";
const MCards = () => {
  const Api = "https://burger-cheddler-back.shoha-coder.uz";
  const [products, setProducts] = useState([]);
  const GetApiFunc = async () => {
    await axios.get(Api + `/products/`).then((response) => {
      setProducts(response.data)
    })
  };
  useEffect(() => {
    GetApiFunc();
  }, []);
  return (
    <React.Fragment>
      <div className={Style.Mid__cards}>
        <div className={Style.Mid}>
          {products.slice(3, 4).map((product) => {
            return (
              <React.Fragment key={product.id}>
                <div className={Style.Mid__card_other}>
                  <img
                    className={Style.Hover__card__img}
                    src={process.env.PUBLIC_URL + "/images/" + product.img}
                    alt=""
                  />
                  <div className={Style.Hover__card__bottom}>
                    <h3 className={Style.Hover__card__title}>
                      {product.title}
                    </h3>
                    <h1 className={Style.Hover__card__description}>
                      {product.description}
                    </h1>
                    <Link to={`/single-product/${product.id}/`}>
                      <button className={Style.Hover__card__btn}>
                        {product.btn}
                      </button>
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          {products.slice(4, 10).map((product) => {
            return (
              <div className={Style.Mid_cards} key={product.id}>

                <Link to={`/single-product/${product.id}/`}>
                  <img
                    className={Style.Mid__card__img}
                    src={process.env.PUBLIC_URL + "/images/" + product.img}
                    alt=""
                  />
                </Link>
                <div className={Style.Mid__card__bottom}>
                  <h3 className={Style.Mid__card__title}>{product.title}</h3>
                  <div>
                    <Stars stars={product.stars} key={product.id} />
                  </div>
                  <p className={Style.Mid__card__price}>{product.price} $</p>
                </div>
                <div className={Style.Mid__card__hover}>
                  <div className="">
                    <Link to={`/single-product/${product.id}/`}>
                      <PiShoppingCartSimple
                        className={Style.Mid__card__cart}
                        size={30}
                        fill="#000"
                      />
                    </Link>
                    <span></span>
                    <Link to={"*"}>
                      <AiOutlineHeart
                        className={Style.Mid__card__heart}
                        size={30}
                        fill="#000"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={Style.Hover__card2}>
            {products.slice(10).map((product) => {
              return (
                <React.Fragment key={product.id}>
                  <img
                    className={Style.Hover__card__img}
                    src={process.env.PUBLIC_URL + "/images/" + product.img}
                    alt=""
                  />  
                  <div className={Style.Hover__card__bottom}>
                    <h3 className={Style.Hover__card__title}>
                      {product.title}
                    </h3>
                    <h1 className={Style.Hover__card__description}>
                      {product.description}
                    </h1>
                    <Link to={`/single-product/${product.id}/`}>
                    <button className={Style.Hover__card__btn}>
                      {product.btn}
                    </button>
                    </Link>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MCards;