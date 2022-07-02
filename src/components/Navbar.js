import React, { Component } from 'react'
export default class Navbar extends Component {
    // searchOption=()=>{
    //     // year=document.querySelector(".year").value
    //     // category=document.querySelector(".category").value
    //     document.getElementById('document.querySelector(".year").value document.querySelector(".category").value').scrollIntoView({
    //         behavior: 'smooth'
    //     });
    // };
    search=()=> {
        var name = document.getElementById("year").value
        console.log(name)
        var pattern = name.toLowerCase()
        var targetId = ""
        var target = ""
        var divs = document.getElementsByClassName("reveal")
        for (var i = 0; i < divs.length; i++) {
            var w
            var para = divs[i].getElementsByTagName("h3")
            var index = para[0].innerText.toLowerCase().indexOf(pattern)
            console.log(index,para)
            if (index != -1) {
                target = divs[i].id
                targetId = divs[i].firstChild.id
                console.log(targetId,target)
                w=document.getElementById(target)
                document.getElementById(targetId).scrollIntoView()
                console.log(document.getElementById(target))
                break
            }
        }  
        // return window.scrollBy(0, -50)
    }
    render() {
        window.onload =()=>{
            var ddlYears = document.getElementById("year");
            var types=[" CHEMISTRY"," MEDICINE"," ECONOMICS"," PEACE"," PHYSICS"]
            for (var i = 2021; i >= 1900; i--) {
                for (var j = 0; j <types.length; j++) {
                    var option = document.createElement("OPTION");
                    option.innerHTML = i+types[j];
                    option.value = i+types[j];
                    ddlYears.appendChild(option);
                }
            }
        };
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
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
                            <option>Year Category</option>
                        </select>
                        <button className="btn btn-outline-success" onClick={this.search}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        )
    }
}
