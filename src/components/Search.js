import React, { useEffect, useState } from "react";
import axios from "axios";

function Search() {

    return(
        <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder="Search your Recent Transactions"
        //   onChange={onChangeHandler}
        />
        <i className="circular search link icon"></i>
      </div>
    )

}
export default Search;