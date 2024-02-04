import React, { useEffect, useState } from 'react';
import Style from "./Bed_Cards.module.scss";
import axios from 'axios';

const BedCards = () => {
    const Api = "https://burger-cheddler-back.shoha-coder.uz";
    const [products, setProducts] = useState([]);
    const GetApiFunc = async () => {
        await axios.get(Api + `/products/`).then((response) => {
            setProducts(response.data);
        });
    };
    useEffect(() => {
        GetApiFunc();
    }, []);
    const grey = "https://burger-cheddler-back.shoha-coder.uz"
  return (
    <div className={Style.BedCards}>
        
    </div>
  )
}

export default BedCards