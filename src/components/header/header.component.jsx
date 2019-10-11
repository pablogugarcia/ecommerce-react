import React from 'react';
import { Link } from 'react-router-dom'; // Router
import { auth } from '../../firebase/firebase.utils'; //firebase
import { connect } from 'react-redux'; // se importa connect que es un HOC para conectar a redux nuestro componente

import { createStructuredSelector } from 'reselect'; 

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHiddenProp } from '../../redux/cart/cart.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (

    <div className='header'>

        <Link className='logo-container' to="/">   <Logo />  </Link>

        <div className='options'>
            <Link className='option' to="/shop">TIENDA</Link>
            <Link className='option' to="/contact">CONTACTO</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> {'SALIR'} </div>
                    :
                    <Link className='option' to='/signin'> {'INGRESAR'}</Link>
            }

            <CartIcon />
        </div>

        {hidden ? null : <CartDropdown />}
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiddenProp
});

export default connect(mapStateToProps)(Header);