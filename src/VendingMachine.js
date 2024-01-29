import React from "react";
import { Link } from "react-router-dom"; 

const VendingMachine = () => {
    return (
        <div
      className="VendingMachine">
      
        <h1>hello i am a vending machine. what would you like to eat?</h1>

        <h1><Link to="/soda">Soda</Link></h1>
        <h1><Link to="/chips">Chips</Link></h1>
        <h1><Link to="/candybars">Candy Bars</Link></h1>
   
    </div>
    );
}

export default VendingMachine;
