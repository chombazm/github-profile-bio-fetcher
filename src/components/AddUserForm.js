import axios from 'axios';
import React, { useState } from 'react'

function AddUserForm(props) {
    const [name, setName] = useState('');
    const handleSubmit = event => {
        event.preventDefault();

        // const resp = await axios.get(`https://api.github.com/users/${name}`);
        axios.get(`https://api.github.com/users/${name}`).then(res => {
            props.onSubmit(res.data);
            setName('');
        })
        
    }


    const nameControl = (e) => {
        setName(e.target.value)
    }
    return (
        <div className="window-body">
            
            <pre>
                <a href="https://chomba.live">Chomba.live</a> Part of react road map 2021   
            </pre>
            
            <form className="field-row" onSubmit={handleSubmit}>
             <input 
                type="text" 
                value={name}
                onChange={nameControl} 
                required
                placeholder="Github username"
                id="name" />

                <button>Get Profile</button>
            </form>
        </div>
    )
}

export default AddUserForm
