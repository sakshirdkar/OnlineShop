import React from 'react';
import './sign-in.style.scss'
import FormInput from './../form-input/form-input.component';
import ButtonCustom from './../Button/button.component';

import {auth,signInWithGoogle} from './../../firebase/firebase.util.js'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state ={
            email: '',
            password:'',
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    
    }
    handleSubmit = async (event) => {
        
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (error) {
            console.log(error.message);
        }

    }
    
    render() {
        return <div className='sign-in'>
            <h2> Already have an account </h2>
            <div className ='title'> I will sign in </div>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' value={this.state.email} onChange={ this.handleChange}  label='Email' ></FormInput>
                <FormInput name='password' type='password' value={this.state.password} onChange={ this.handleChange} required label ='Password' />
                <div className = 'button-group'>
                  <ButtonCustom type='submit' >SIGN IN</ButtonCustom>
                  <ButtonCustom onClick={signInWithGoogle} isGoogleSignIn >{' '}SIGN IN with google{' '}</ButtonCustom>
                </div>
  
            </form>
        
        </div>
    }
}

export default SignIn;