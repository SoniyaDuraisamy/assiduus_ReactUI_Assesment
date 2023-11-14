import React from "react";
import Image from './Assiduus_TM_Logo--1-.png';
import './Header.css'
import Search from "./Search";

let Header = () => {
    return (
        <div className="Header-layout">
            <div>
                <img className="Logo-img" src={Image} />
            </div>
            <div className="">
                <Search />
            </div>
        </div>
    )
}
export default Header;