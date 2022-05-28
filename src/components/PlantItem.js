import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, name, cover, water, light, isBestSale, price }) {
    function handleClick(plantName) {
        alert(`You want to buy 1 ${plantName}? Great choice 🌱✨`)
    }

    return (
        <li key={id}>
            <img src={cover} alt={`${name} cover`} onClick={() => handleClick(name)} />
            {name}
            <div className='price'>{price} $</div>
            {isBestSale ? '👌' : null}
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </li>
    )
}

export default PlantItem;
