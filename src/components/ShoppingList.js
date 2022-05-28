import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';
import { useState } from "react";
import Categories from "./Categories";

function ShoppingList({ cart, updateCart, setIsOpen }) {
    const [activeCategory, setActiveCategory] = useState('Default');

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, price, cover) {
        const plantAlreadyAdded = cart.find((plant) => plant.name === name);
        if (plantAlreadyAdded) {
            const cartWithoutCurrentPlant = cart.filter((plant) => plant.name !== name);
            updateCart([
                ...cartWithoutCurrentPlant,
                { name, price, amount: plantAlreadyAdded.amount + 1, cover }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1, cover }])
        }
        setIsOpen(true);
        document.querySelector('.cart').classList.add('active');
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="wrapper">
            <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <ul className="plants">
                {plantList.map(({ id, name, cover, water, light, isBestSale, price, category }) => (
                    activeCategory === 'Default' || activeCategory === category ? (
                        <div key={id} className="plantItem">
                            <PlantItem
                                id={id}
                                name={name}
                                cover={cover}
                                water={water}
                                light={light}
                                isBestSale={isBestSale}
                                price={price}
                            />
                            <button className="addToCartBtn" onClick={() => addToCart(name, price, cover)}>Add to cart</button>
                        </div>
                    ) : null
                ))}
            </ul>
        </div >
    )
}

export default ShoppingList