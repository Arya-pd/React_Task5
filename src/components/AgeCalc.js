import React, { useState } from 'react';
import './style.css'

function AgeCalc() {
    const [age, setAge] = useState("0 year");
    let dt = new Date();

    const cont_age =(ag)=>{
        if (ag>1) {
            return ag+" years"
        }
        else{
            return ag+" year"
        }
    }

    const check_age = ()=> {
        let new_age = dt.getFullYear() - parseInt(document.getElementById("b_date").value.slice(0,4))
        if (parseInt(document.getElementById("b_date").value.slice(5,7)) > (dt.getMonth()+1) ) {
            new_age = (new_age - 1);
        }
        else if (parseInt(document.getElementById("b_date").value.slice(5,7)) === (dt.getMonth()+1) ) {
            if (parseInt(document.getElementById("b_date").value.slice(8,10)) > (dt.getDate())) {
                new_age = (new_age - 1);
            }
        }
        let my_age = cont_age(new_age);
        setAge(my_age)
    }
    return (
        <div>
            <h2>Enter your date of birth </h2>
            <input type="date" name="" id="b_date" />
            <br/>
            <input type="button" value="Calculate Age" className='btn ' onClick={check_age}/>
            <h2>You are {age} old</h2>
        </div>
    )
}

export default AgeCalc
