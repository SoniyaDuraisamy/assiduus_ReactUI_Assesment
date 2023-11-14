import React, { useState } from 'react';

import Invoice from "../Invoice/InvoiceChart";
import TotalCash from "../TotalCash/TotalCash";
import Account from "../Account/Account";
import './Report.css'
import LineChart from "../Chart/Chart";
import Header from '../Header/Header';
import NavBar from '../NavBar/Nav';

let Report = () => {
const [indexCount , setIndexCount] = useState(0)
const ChildDataHandler=(indexValue)=>{
    setIndexCount(indexValue);
}
    return (
        <div className='row'>
            <NavBar />
            <div className="Report-layout row col-lg-10">
                <div className="col col-lg-6">
                    {/* <Checking /> */}
                    <LineChart callBack={ChildDataHandler}   />
                </div>
                <div className="col col-lg-6">
                    <Invoice count={indexCount}/>
                </div>
                <div className="col col-lg-6">
                <TotalCash  />
                </div>
                <div className="col col-lg-6">
                    <Account />
                </div>           
            </div>
        </div>
    )
}
export default Report;