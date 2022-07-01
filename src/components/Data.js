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
        // return (<div >
        //     <ul>
        //         {data.map((record, i) => 
        //             <li key={i}>
        //                 {record.year} - {record.category}
        //                 {/* <ol>
        //                     {record.laureates.map((laureates,j)=>
        //                         <li key={j}>{laureates.firstname}</li>    
        //                     )}
        //                 </ol> */}
        //             </li>
        //         )}
        //     </ul>
        // </div>
        // );
        return (
            <div>
                {data.map((item) => {
                return (
                    <>
                        <ul>
                            <li>
                                {item.year} - {item.category} 
                                <ul>
                                    {item.laureates?.map((sub)=>
                                        <li>{sub.firstname} - {sub.surname} - {sub.motivation}</li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </>
                );
                })}
            </div>
        );
    }
}
export default Data;