function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-droplet"></i>;
    function alertCareScale() {
        const quantityLabel = {
            1: 'little',
            2: 'moderate',
            3: 'large'
        }
        alert(`This plant requires ${quantityLabel[scaleValue]} amount of ${careType}`)
    }

    return (
        <div onClick={() => alertCareScale()}>
            {range.map((rangeElem) => (
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            ))}
        </div>
    )
}

export default CareScale;
