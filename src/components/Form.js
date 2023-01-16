const Form = () => {
    return (
        <form className="row p-3">
            <div className="col-3">
            <input class="form-control form-control-sm" type="date" placeholder="Date" aria-label=".form-control-sm example" />
            </div>
            <div className="col-3">
            <input class="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example" />
            </div>
            <div className="col-3">
            <input class="form-control form-control-sm" type="text" placeholder="Category" aria-label=".form-control-sm example" />
            </div>
            <div className="col-3">
            <input class="form-control form-control-sm" type="text" placeholder="Amount" aria-label=".form-control-sm example" />
            </div>

        </form>
    )
}
export default Form