
import React, { useContext, useState } from 'react'
import '../../assets/form.css'
import ResultContext from '../../context/ResultContext';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const { selectedShowDetail } = useContext(ResultContext)
    const [details, setState ] = useState({
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        date:'',
    });
    const navigate = useNavigate();
    const cancelHandler = () =>{
        navigate('/detail')
    }

    const changeHandler = (e) =>{
        const choice = e.target.name;
        switch(choice){
            case 'firstName':
                setState(prev => {
                    return {...prev, firstName:e.target.value}
                })
                break;
            case 'lastName':
                setState(prev => {
                    return {...prev, lastName:e.target.value}
                })
                break;
            case 'phone':
                setState(prev => {
                    return {...prev, phone:e.target.value}
                })
                break;
            case 'email':
                setState(prev => {
                    return {...prev, email:e.target.value}
                })
                 break;
            case 'date':
                setState(prev => {
                    return {...prev, date:e.target.value}
                })
                break;    
        }
    }
    
    const bookHandler = ()=>{
        localStorage.setItem(selectedShowDetail.name+'booking', JSON.stringify(details))
        navigate('/detail');
    }

  return (
        <div className="form">
            <div className="header">
                <h1>Book Tickets for {selectedShowDetail.name}</h1>
                <p>Please provide your information below.</p>
            </div>
            <div className="inputcontainer">
                <input  onChange={changeHandler} name="firstName" placeholder="First Name" />
                <input  onChange={changeHandler} name="lastName" placeholder="Last Name"  />
                <input  onChange={changeHandler} maxLength="10" name="phone" placeholder="Phone Number"  />
                <input  onChange={changeHandler} placeholder="Email Address" name='email' />
                <input  onChange={changeHandler} name = 'date' placeholder = 'date' type='date'/>
                
                <button className='book' onClick={bookHandler}>Book Now</button>
                <button className="cancel" onClick={cancelHandler}>Cancel</button>
            </div>
        </div>
    );
}

export default Form