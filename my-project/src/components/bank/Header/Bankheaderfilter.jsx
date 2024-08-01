const Bankheaderfilter = ({ categoryfilter }) => {

    const filtername = (event) => {
        categoryfilter(event.target.value);
    }

    return (
        <select name="Listname" id="Listname" className="cursor-pointer ml-10 w-24 h-14 p-4 rounded border-2 border-blue-400" onChange={filtername}>
            <option value="ALL">ALL</option>
            <option value="Deposit">예금</option>
            <option value="Saving">적금</option>
            <option value="Loan">대출</option>
          
        </select>
    )
}

export default Bankheaderfilter;