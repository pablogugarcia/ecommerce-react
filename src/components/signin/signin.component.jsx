import React from 'react';
import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
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

                    <CustomButton type='submit'>
                        Ingresar
                    </CustomButton>

                </form>


            </div>
        )
    }
}

export default SignIn;