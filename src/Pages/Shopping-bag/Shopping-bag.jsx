import React from "react";
import { useCart } from "react-use-cart";
import HeaderBottomBrand from "../../components/Header_Bottom/Header_Bottom_Brand";
import Style from "./Shoppping-bag.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import Header from "../../components/Header/Header";
import QuantityDropdown from "../../components/Quantity__Dropdown/Quantity_Dropdown";
import Footer from "../../components/Footer/Footer";

function App() {
  const { items, isEmpty, removeItem, cartTotal } = useCart()

  if (isEmpty) {
    return (
      <React.Fragment>
        <Header />
        <HeaderBottomBrand />
        <h1 className={Style.Empty}>Your Cart Is Empty</h1>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Header />
      <HeaderBottomBrand />
      <h1 className={Style.Heading}>Shopping bag</h1>
      <div className={Style.Shopping__Bag}>
        <div className={Style.Shop__Bag}>
          {
            items.map(item => {
              return (
                <div className={Style.Item} key={item.id}>
                  <img src={process.env.PUBLIC_URL + "/images/" + item.img} alt="error" />
                  <div className={Style.Prop}>
                    <h1 className={Style.title}>{item.title}<GrFormClose onClick={() => removeItem(item.id)} /></h1>
                    <h2>{item.price}$</h2>
                    <div className={Style.Static}>
                      <p>Art.No.: <span>54637253</span><span>Size:</span> <span>21*45</span></p>
                      <p>Color: <span>Mint</span><span>Total:</span> <span>{item.price * item.quantity}$</span></p>
                    </div>
                    <div className={Style.Bottom}>
                      <button><AiOutlineHeart /></button>
                      <QuantityDropdown id={item.id} value={item.quantity} />
                    </div>
                  </div>
                </div>
              )
            })
          }
          <p className={Style.Total}>Total:</p>
          <p className={Style.cartTotal}>{cartTotal}  $</p>
        </div>
        <div className={Style.Checkout}>
          <h1>Add A DISCOUNT CODE</h1>
          <label htmlFor="input" className={Style.label}>
            <input type="text" />
            <button>ADD</button>
          </label>
          <label htmlFor="input">
            <h1 className={Style.H1}>Log in to use your member offers.</h1>
            <button className={Style.Login__Btn}>LOG IN</button>
          </label>
          <p className={Style.Order1}>Order: <span> {cartTotal} $</span></p>
          <p className={Style.Shipping}>Shipping: <span>0.0 $</span></p>
          <p className={Style.Cart__Total}>Total: <span>{cartTotal} $</span></p>
          <button className={Style.Countine}>
            Continue to checkout
          </button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;