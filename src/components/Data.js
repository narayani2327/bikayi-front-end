// import React,{useState,useEffect} from 'react';

// function Data() {
//     const [data,setData]=useState([]);
//     const getData=()=>{
//         fetch('recordData.json'
//         ,{
//             headers : { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//         })
//         .then(function(response){
//             console.log(response)
//             return response.json();
//         })
//         .then(function(myJson) {
//             console.log(myJson);
//             setData(myJson)
//         });
//     }
//     useEffect(()=>{getData()},[])
//     return (
//         <div className="Data">
//         {
//             data && data.length>0 && data.map((prizes)=><p>{prizes.year}</p>)
//         }
//         </div>
//     );
// }


import React, { Component } from 'react';
import data from './recordData.json'
class Data extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='data'>
                {data.map((item) => {
                return (
                    <div id={item.year}>
                        <h3 id={item.category}>{item.year} - {item.category} </h3>
                            <div>
                                {item.laureates?.map((sub)=>
                                    <div className='person'><h4>{sub.firstname} {sub.surname}</h4><blockquote><b>Motivation: </b>{sub.motivation}</blockquote></div>
                                )}
                            </div>
                    </div>
                );
                })}
            </div>
        );
    }
}
export default Data;