import React, { useState } from 'react'
import styled from 'styled-components';

const Form = () => {
    const [userData, setUserData] = useState({
        name:'',
        email:''
    });
    const handleInputChange = (e) =>{
        const {name, value} = e.target
        console.log(name, value);
        setUserData({
            ...userData,
            [name]:value
        })
    }
    return (
        <form>
            <Input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="Ingrese un nombre"
            />
            <Input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="Ingrese un correo electronico"
            />
            <Boton
                type="submit"
            >Agregar</Boton>
        </form>

    )
}

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border: 2px solid #3D76E9;
    }
`;
 
const Boton = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;

export default Form
