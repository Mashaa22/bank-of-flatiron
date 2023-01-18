import { useState } from "react";

const Form = () => {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("")
    const [id, setId] = useState("")
  
    function handleTransact(){
        const transaction = {id,date, description, category, amount};
    
        fetch ("http://localhost:8001/transactions",{
              method:'POST',
              headers: {
                'Content-Type':'application/json'
              },
              body: JSON.stringify(transaction) 
            } ).then((data) => {
                console.log(data)
              })
    }
    
   const onSubmit = function handleSubmit(e) {
        e.preventDefault()
        console.log("")
    }
    

    return (
        <form className="row p-3" {...onSubmit}>
            <div className="col-3" key={setId}>
                <input name="date" onChange={(event) => { setDate(event.target.value) }} value={date} className="form-control form-control-sm" type="date" placeholder="text" aria-label=".form-control-sm example" />
            </div>
            <div className="col-3">
                <input name="description" onChange={(event) => { setDescription(event.target.value) }} value={description} className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example" />
            </div>
            <div className="col-3">
                <input name="category" onChange={(event) => { setCategory(event.target.value) }} value={category} className="form-control form-control-sm" type="text" placeholder="Category" aria-label=".form-control-sm example" />
            </div>
            <div className="col-3 ">
            <input name="amount" onChange={(event) => { setAmount(event.target.value) }} value={amount} className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example" />
            </div>
            <br></br>
            <div className="mx-auto p-3">
                <button className="btn btn-sm btn-success" type="submit" onClick={handleTransact}>Add Transaction</button>
            </div>

        </form>
    )
}
export default Form