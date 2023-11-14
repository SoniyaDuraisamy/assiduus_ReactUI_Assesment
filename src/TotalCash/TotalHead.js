import React from "react";
import './TotalHead.css'

const TotalCashHeader = () => {
    return (
        <>
            <div className="row cash-layout">
                <div className="col heading-cash">
                    <p>Total Cash flow</p>
                </div>
                <div className="col button-layout">
                       <div className="in-layout"> <span></span>
                        <p> In</p></div> 
                        
                       <div className="out-layout">
                       <span ></span>
                        <p> Out</p></div>      
                </div>
                <hr/>
            </div>
           
        </>
    )
}
export default TotalCashHeader;
