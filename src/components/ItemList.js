const ItemList = ({ items }) => {

    console.log(items)
    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 my-1/2 mz-auto border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                                Add +
                            </button>
                        </div>
                        {/* <img src={'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1711644550~exp=1711645150~hmac=adb2ac5aa73e8afa057ec57f0b79045a71ed487abebb66b27ab2598e40827b56'} className="w-full" /> */}
                    </div>

                </div>

            ))}

        </div>
    )
}

export default ItemList;