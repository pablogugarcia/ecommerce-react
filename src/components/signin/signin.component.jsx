import React from 'react';
import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Ya tengo una cuenta</h2>
                <span>Ingrese con su email y contraseña</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        onChange={this.handleChange}
                        required
                        label='Email'
                        value={this.state.email} />
                    <FormInput
                        name='password'
                        type='password'
                        onChange={this.handleChange}
                        required
                        label='Contraseña'
                        value={this.state.password} />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Ingresar
                    </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            Ingresar con Google
                    </CustomButton>

                    </div>


                </form>


            </div>
        )
    }
}

export default SignIn;