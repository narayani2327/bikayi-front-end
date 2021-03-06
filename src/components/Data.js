import React, { Component } from 'react';
import data from './recordData.json'
class Data extends Component {
    render() {
        window.addEventListener('scroll',()=>{
            var reveals=document.querySelectorAll(".reveal")
            for(var i=0;i<reveals.length;i++){
                var windowheight=window.innerHeight
                var revealtop=reveals[i].getBoundingClientRect().top
                var revealpoint=150
                if(revealtop<windowheight-revealpoint){
                    reveals[i].classList.add('active')
                }
                else{
                    reveals[i].classList.remove('active')
                }
            }
        })
        return (
            <div className='data'>
                {data.map((item) => {
                return (
                    <div id={item.year} className="reveal">
                        <h3 id={item.category}>{item.year} {item.category} </h3>
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