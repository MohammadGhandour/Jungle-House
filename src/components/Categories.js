import "../styles/Categories.css"

function Categories({ categories, activeCategory, setActiveCategory }) {
    return (
        <div className="selectContainer">
            <label>Filter by categorie:</label>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >
                <option value={'Default'}>All</option>
                {categories.map((category, index) => (
                    <option key={`${index}-${category}`} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default Categories;
