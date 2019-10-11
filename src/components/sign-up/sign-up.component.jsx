import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {

        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("La contraseña no coincide");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            // limpia los campos del formulario 
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);
        }

    }

    render() {
        const {
            displayName,
            email,
            password,
            confirmPassword } = this.state;
        return (
            <div className='sign-up'>

                <h2 className='title'> Todavia no tienes una cuenta </h2>
                <span> Registrate con tu email y un password </span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput
                        type='title'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Ingresar Nombre'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Ingresar Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Ingresar Contraseña'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirmar Contraseña'
                        required
                    />
                    <CustomButton type='submit'> Registrarse </CustomButton>

                </form>
            </div>
        )
    }

}

export default SignUp;