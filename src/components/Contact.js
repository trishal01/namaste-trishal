const Contact = () => {

    return (
        <div className="text-center">
            <h1 className="font-bold p-2 m-2">Contact Us</h1>
            <h6>Welcome to contact us</h6>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button type="submit" className="bg-black text-slate-200 p-2 mx-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact