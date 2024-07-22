const SelectTag = () => {
    return (
        <form className="max-w-sm mx-auto">
            <select id="countries" className="bg-gray-50 text-gray-900 text-sm block w-[50px] cursor-pointer">
                <option selected>h1</option>
                <option value="US">h2</option>
                <option value="CA">h3</option>
                <option value="FR">h4</option>
                <option value="DE">h5</option>
                <option value="DE">h6</option>
            </select>
        </form>
    )
}

export default SelectTag;