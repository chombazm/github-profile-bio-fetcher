import axios from 'axios';
import React, { useState } from 'react'

function AddUserForm(props) {
    const [name, setName] = useState('');
    const handleSubmit = event => {
        event.preventDefault();

        // const resp = await axios.get(`https://api.github.com/users/${name}`);
        axios.get(`https://api.github.com/users/${name}`).then(res => {
            props.onSubmit(res.data)
        })
        
    }


    const nameControl = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                value={name}
                onChange={nameControl} 
                id="name" />

                <button>Add Name</button>
            </form>
        </div>
    )
}

export default AddUserForm
