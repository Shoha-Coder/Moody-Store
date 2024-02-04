import React, { useEffect, useState } from "react";
import Style from "./S-Products.module.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import HeaderBottomBrand from "../../components/Header_Bottom/Header_Bottom_Brand";
import { MdLocationPin } from "react-icons/md";
import { useCart } from "react-use-cart"
import Dropdown from "../../components/Dropdown/Dropdown";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SProduct = () => {
  const Api = "https://burger-cheddler-back.shoha-coder.uz";

  const { addItem } = useCart()
  const params = useParams();
  const [ProductData, setProductData] = useState({});

  useEffect(() => {
    axios.get(`${Api}/products/${params.productId}`).then(response => {
      const data = response.data
      setProductData(data)
    })
  }, [params.productId])

  if (params.productId) {
    return (
      <div className="div">
        <React.Fragment>
          <Header />
          <HeaderBottomBrand />
          <div className={Style.SProduct} key={ProductData.id}>
            <div className={Style.Product_Images}>
              <img src={process.env.PUBLIC_URL + "/images/" + ProductData.img} alt="" />
              <img src={process.env.PUBLIC_URL + "/images/" + ProductData.img} alt="" />
            </div>
            <div className={Style.Properties}>
              <h1 className={Style.title}>{ProductData.title}</h1>
              <h2 className={Style.price}>{ProductData.price}$</h2>
              <h3>Light khaki green/white checks</h3>
              <img src={process.env.PUBLIC_URL + "/images/" + ProductData.img} alt="" />
              <p><MdLocationPin fill="rgba(0, 0, 0, 0.5)" size={31} />Not available in stores</p>
              <br />
              <br />
              <Dropdown />
              <br />
              <br />
              <Link to={"/shop-bag/"}>
                <button onClick={() => addItem(ProductData)} className={Style.Add}>Add to shopping bag</button>
              </Link>
            </div>
          </div>
        </React.Fragment>
        <Footer />
      </div>
    )
  }
};

export default SProduct;
