import React, { Component } from 'react'
export default class Navbar extends Component {
    searchOption=()=>{
        // year=document.querySelector(".year").value
        // category=document.querySelector(".category").value
        document.getElementById('document.querySelector(".year").value document.querySelector(".category").value').scrollIntoView({
            behavior: 'smooth'
        });
    };
    render() {
        window.onload =()=>{
            var ddlYears = document.getElementById("year");
            for (var i = 1900; i <= 2018; i++) {
                var option = document.createElement("OPTION");
                option.innerHTML = i;
                option.value = i;
                ddlYears.appendChild(option);
            }
        };
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Nobel Prize Winners
                </a>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <div className="d-flex">
                        <select 
                            className="form-control me-2"
                            id="year"
                            placeholder="Year"
                            >
                            <option>Year</option>
                        </select>
                        <select 
                            className="form-control me-2"
                            id="category"
                            placeholder="Category"
                            >
                            <option disabled>Category</option>
                            <option>Chemistry</option>
                            <option>Medicine</option>
                            <option>Economics</option>
                            <option>Peace</option>
                            <option>Physics</option>
                        </select>
                        <button className="btn btn-outline-success" onClick={this.searchOption}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        )
    }
}
