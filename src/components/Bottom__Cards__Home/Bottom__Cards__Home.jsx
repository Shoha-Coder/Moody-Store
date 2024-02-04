import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Style from "./Bottom__Cards__Home.module.scss"
import Stars from '../stars';
import { Link } from 'react-router-dom';

const BCards = () => {
  const Api = "https://burger-cheddler-back.shoha-coder.uz";
  const [products, setProducts] = useState([]);
  const [Hidden, setHidden] = useState(true)
  const GetApiFunc = async () => {
    await axios.get(Api + `/products/`).then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(() => {
    GetApiFunc();
  }, []);
  return (
    <div className={Style.Container_BCards}>
      <h1>TOP RATING</h1>
      <div className={Style.Bottom__Cards__Home} >
        {
          products.slice(12, 22).map((product) => {
            return (
              <div className={Style.Bottom__Card__Home} key={product.id}>
                <Link to={`/single-product/${product.id}/`}>
                  <img src={process.env.PUBLIC_URL + "/images/" + product.img} alt="" />
                </Link>
                <div className={Style.Right}>
                  <h2 className={Style.title}> {product.title} </h2>
                  <div className={Style.Stars}>
                    <Stars stars={product.stars}/>
                  </div>
                  <h1 className={Style.Price}> {product.price} $</h1>
                </div>
              </div>
            )
          })
        }
      {
        products.slice(12, 22).map((product) => {
          return (
            <div className={Style.Bottom__Card__Home} key={product.id} hidden={Hidden}>
              <Link to={`/single-product/${product.id}/`}>
                <img src={process.env.PUBLIC_URL + "/images/" + product.img} alt="" />
              </Link>
              <div className={Style.Right}>
                <h2 className={Style.title}> {product.title} </h2>
                <div className={Style.Stars}>
                  <Stars stars={product.stars} />
                </div>
                <h1 className={Style.Price}> {product.price} $</h1>
              </div>
            </div>
          )
        })
      }
      </div>
      <button className={Style.Load} onClick={() => setHidden(Hidden => !Hidden)}>LOAD MORE PRODUCTS</button>
    </div>
  )
}

export default BCards