import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Style from "./Filter_Side.module.scss";
import Color from './Color';
// import InputColor from './InputColor';

function CardComponent() {
    const Api = "https://burger-cheddler-back.shoha-coder.uz";
    const [products, setProducts] = useState([]);
    const GetApiFunc = async () => {
        await axios.get(Api + `/bedroom-products/`).then((response) => {
            setProducts(response.data);
        });
    };

    const [selectedColors, setSelectedColors] = useState([]);

    const handleColorChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedColors((prevSelectedColors) => [...prevSelectedColors, value]);
        } else {
            setSelectedColors((prevSelectedColors) =>
                prevSelectedColors.filter((color) => color !== value)
            );
        }
    };

    const filteredProducts = selectedColors.length === 0 ? products : products.filter((product) => {
        const productColors = Object.keys(product.colors);
        return selectedColors.some((color) => productColors.includes(color));
    });

    useEffect(() => {
        GetApiFunc();
    }, []);

    return (
        <div className={Style.FilterSide}>
            <h1>Bedroom Products</h1>
            <h2>Filter by Mirror Color:</h2>

            <label>
                <input
                    type="checkbox"
                    value="white"
                    checked={selectedColors.includes("white")}
                    onChange={handleColorChange}
                    className={Style.input__default}
                    style={{ background: "white" } && { border: "2px solid rgba(170, 170, 172, 0.6)" }}
                />
                <input
                    type="checkbox"
                    value="black"
                    checked={selectedColors.includes("black")}
                    onChange={handleColorChange}
                    className={Style.input__default}
                    style={{ background: "rgba(50, 51, 52, 1)" }}
                />
                <input
                    type="checkbox"
                    value="shade-gray"
                    checked={selectedColors.includes("shade-gray")}
                    onChange={handleColorChange}
                    style={{
                        background: "rgba(196, 196, 196, 1)"
                    }}
                />
                <input
                    type="checkbox"
                    value="yellow"
                    checked={selectedColors.includes("yellow")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(242, 201, 76, 1)" }}
                />
                <input
                    type="checkbox"
                    value="orange"
                    checked={selectedColors.includes("orange")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(242, 153, 74, 1)" }}
                />
                <input
                    type="checkbox"
                    value="pink"
                    checked={selectedColors.includes("pink")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(235, 87, 87, 1)" }}
                />
                <input
                    type="checkbox"
                    value="purple"
                    checked={selectedColors.includes("purple")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(187, 107, 217, 1)" }}
                />
                <input
                    type="checkbox"
                    value="bluesky"
                    checked={selectedColors.includes("bluesky")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(86, 204, 242, 1)" }}
                />
                <input
                    type="checkbox"
                    value="green"
                    checked={selectedColors.includes("green")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(111, 207, 151, 1)" }}
                />
                <input
                    type="checkbox"
                    value="midgreen"
                    checked={selectedColors.includes("midgreen")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(33, 150, 83, 1)" }}
                />
                <input
                    type="checkbox"
                    value="midpurple"
                    checked={selectedColors.includes("midpurple")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(47, 128, 237, 1)" }}
                />
                <input
                    type="checkbox"
                    value="red"
                    checked={selectedColors.includes("dark-red")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(223, 19, 19, 1)" }}
                />
                <input
                    type="checkbox"
                    value="brown"
                    checked={selectedColors.includes("brown")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(119, 5, 5, 1)" }}
                />
                <input
                    type="checkbox"
                    value="cyan"
                    checked={selectedColors.includes("cyan")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(10, 93, 139, 1)" }}
                />
                <input
                    type="checkbox"
                    value="darkorange"
                    checked={selectedColors.includes("darkorange")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(173, 91, 18, 1)" }}
                />
                <input
                    type="checkbox"
                    value="darkpurple"
                    checked={selectedColors.includes("darkpurple")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(79, 14, 139, 1)" }}
                />
                <input
                    type="checkbox"
                    value="darkcyan"
                    checked={selectedColors.includes("darkcyan")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(10, 112, 144, 1)" }}
                />
                <input
                    type="checkbox"
                    value="darkgreen"
                    checked={selectedColors.includes("darkgreen")}
                    onChange={handleColorChange}
                    style={{ background: "rgba(21, 96, 8, 1)" }}
                />
            </label>
            <div className={Style.Cards}>
                {filteredProducts.map((product) => (
                    <div key={product.id} className={Style.Card}>
                        <img src={process.env.PUBLIC_URL + "/images/" + product.img} alt={product.title} />
                        <div className={Style.Prop}>
                            <Color array={Object.values(product.colors)} />
                            <h3>{product.title}</h3>
                            <p>Price: {product.price} $</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CardComponent;


/**
 * =
 * ==
 * ===
 * <=======================>
 */