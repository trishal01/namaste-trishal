import ItemList from "./ItemList";

const RestroCategory = ({ category, showItems, setShowIndex }) => {

    console.log('category data ', category)

    // Its basically called setShowIndex again and setShowIndex is different setShowIndex everytime
    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            {/* Header */}
            <div className="w-1/2 mx-auto shadow p-2 m-2 bg-gray-100 hover:bg-gray-200">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-medium">{category.title} ({category.itemCards.length})</span>
                    <span className="pointer">🔽</span>
                </div>
            </div>

            {showItems && <ItemList items={category.itemCards} />}

            {/* Accordion */}
            <div>

            </div>



        </div>
    )
}

export default RestroCategory;