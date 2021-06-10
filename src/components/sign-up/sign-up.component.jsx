import React from 'react';
import { auth, createOrFetchUserProfile } from './../../firebase/firebase.util';
import FormInput from './../form-input/form-input.component';
import ButtonCustom from './../Button/button.component';

import './sign-up.styles.scss';


class SignUp extends React.Component{
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:'',
        }
    }

    handleSubmit = async (e) => {
       e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match. Plaese try again"); return;
        }

        
        try {
            const userAuth = auth.createUserWithEmailAndPassword(email, password);
            console.log(userAuth);
            await createOrFetchUserProfile(userAuth, displayName);
            this.setState({
            displayName:'',
            email: '',
            password: '',
            confirmPassword: '',
        });
        
        }
        catch (error) {
            console.log(error.message);
        }
        

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({  [name] :value });

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (<div className='sign-up-form'>
            <h2> Don't have an Account </h2>
            <div className = 'title'> Let me quickly sign up 
            <form  onSubmit={ this.handleSubmit}>
                <FormInput name='displayName' type='Text' value={displayName} onChange={this.handleChange} label='Name' required/>
                <FormInput name='email' type='email' value={email} onChange={this.handleChange} label='Email' required />
                <FormInput name='password' type='password' value={password} onChange={ this.handleChange} label ='Password' required/>
                <FormInput name='confirmPassword' type='password' value={confirmPassword} onChange={ this.handleChange} label ='Confirm Password' required/>
                <ButtonCustom type='submit' > SIGN UP </ButtonCustom>
            </form>
            </div>
        </div>)
    }
}

export default SignUp;