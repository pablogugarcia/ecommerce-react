import React from 'react';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">TIENDA</Link>
            <Link className='option' to="/contact">CONTACTO</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> {'SALIR'} </div>
                    :
                    <Link className='option' to='/signin'> {'INGRESAR'}</Link>
            }
        </div>
    </div>
)

export default Header;