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
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './header.styles';

const Header = ({ currentUser, hidden }) => (

    <HeaderContainer>

        <LogoContainer to="/">   <Logo />  </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">TIENDA</OptionLink>
            <OptionLink to="/contact">CONTACTO</OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}> {'SALIR'} </OptionDiv>
                    :
                    <OptionLink to='/signin'> {'INGRESAR'}</OptionLink>
            }

            <CartIcon />
        </OptionsContainer>

        {hidden ? null : <CartDropdown />}

    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiddenProp
});

export default connect(mapStateToProps)(Header);