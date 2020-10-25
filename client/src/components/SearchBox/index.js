import React from "react";
import "./style.css";

const SearchBox = props =>{
    return(
        <form>
            <div className="form-group">
                <label
                    className="SearchLabel"><h3>Search Your Book</h3>
                </label>
                <br></br>
                <input className="col-12 form-control" type="text" value={props.search}name="searchBook"
                placeholder="Enter Book's Title" onChange={props.handleInputChange}></input>
            </div>
            <button type="submit" className="searchBtn btn btn-primary" onClick={props.handleFormSubmit}>Search</button>
        </form>
    )
}

export default SearchBox;