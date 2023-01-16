import { useState } from "react";

const Form = () => {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("")
    const [id, setId] = useState("")
  


    return (
        <form className="row p-3">
            <div className="col-3">
            <input className="form-control form-control-sm" type="date" placeholder="text" aria-label=".form-control-sm example" />
            </div>
            <div className="col-3">
            <input className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example" />
            </div>
            <div className="col-3">
            <input className="form-control form-control-sm" type="text" placeholder="Category" aria-label=".form-control-sm example" />
            </div>
            <div className="col-3 ">
            <input className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example" />
            </div>
            <br></br>
            <div className="mx-auto p-3">
                <button className="btn btn-sm btn-success" type="button">Add Transaction</button>
            </div>

        </form>
    )
}
export default Form