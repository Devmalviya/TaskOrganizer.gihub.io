import React from 'react'
import './Addtodo.css';

export default function Footer() {
    let footerStyle ={
        position:"relative",
        width:"100%"
    }
    return (
    <footer className=' text-light py-3' style={footerStyle}>
    <p className='text-center'> Copyright &copy; DM Creations All rightreserved MyTaskList.com</p>
    </footer>
    )
}
