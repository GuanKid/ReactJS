import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert } from 'react-bootstrap';

class UserForm extends Component {

  errorUsername;
  errorPassword;
  roles = ['Read', 'Write', 'Administrator'];    

  constructor(props){
    super(props);

    this.errorUsername = '';
    this.errorPassword = '';

    this.state = {
      username: '',
      password: '',
      usernameTouched: false,
      passwordTouched: false,
      errorLogin: false // put errorlogin as state because we want form to be re-rendered.
    };  
    
    this.handleChange = this.handleChange.bind(this);  
    this.handleBlur = this.handleBlur.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);    
  } 

  getUserNameValidationState() {    
    const length = this.state.username.length;

    if(this.state.usernameTouched){
      if (length === 0){
        this.errorUsername = 'Username is required';        
        return 'error';
      } 
      else if (length < 3){
        this.errorUsername = 'Username should be minimum 3 characters';        
        return 'error';
      }  
      else if(this.state.username.indexOf(' ') >= 0){        
        this.errorUsername = 'Username cannot contain spaces';        
        return 'error';             
      }           
      else {
        this.errorUsername = '';                 
        return 'success'
      }       
    }    
  }

  getPasswordValidationState() {    
    const length = this.state.password.length;

    if(this.state.passwordTouched){
      if(length < 3) return 'error'
        else return 'success';      
    }
  }

  handleBlur(e){
    const target = e.target;    
    const name = target.name;        
    this.setState({
      [name+'Touched']: true
    });    
  }

  handleChange(e) {
    const target = e.target;   
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }  

  handleSubmit(event) { 
    this.errorLogin = false; 
    if (!this.canBeSubmitted()) {      
      event.preventDefault();
      return;
    }
    else {     
      if(!this.login(this.state.username,this.state.password)){  
        this.setState({
          errorLogin: true
        });         
        console.log("invalid login");             
        event.preventDefault();        
        return;
      }                
      // actual submit logic...    
      this.setState({
        errorLogin: false
      });       
      alert('name: ' + this.state.username + '\npassword: ' + this.state.password);      
    }          
  }  

  login(username, password){       
    if(username === "jason" && password === "123")
        return true; 
    else
        return false;
  }  
  
  canBeSubmitted() {    
    return (
      this.state.usernameTouched && this.state.passwordTouched 
        && this.errorUsername.length === 0 && this.errorPassword.length === 0      
    );
  }  

  render() {    
    const listRoles = this.roles.map((role) => 
      <option value="select">{role}</option>
    );    
    const isEnabled = this.canBeSubmitted();

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getUserNameValidationState()}
        >
          <ControlLabel>User Name</ControlLabel>
          <FormControl
            name="username"
            type="text"
            value={this.state.username}
            placeholder="Enter Username"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <FormControl.Feedback />
          { this.errorUsername.length > 0 && this.state.usernameTouched &&            
            <HelpBlock>{this.errorUsername}</HelpBlock>
          }                              
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getPasswordValidationState()}
        >
          <ControlLabel>Password</ControlLabel>
          <FormControl
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select Role</ControlLabel>
            <FormControl componentClass="select" placeholder="select" name="role">                              
              <option value="select">select</option>
              {listRoles}
              <option value="other">...</option>
            </FormControl>
        </FormGroup>            
        <Button type="submit" disabled={!isEnabled}>
          Submit
        </Button>    
        { this.state.errorLogin &&             
            <Alert bsStyle="danger">
              <strong>Error</strong>Username or password is invalid.
            </Alert>            
        }                   
      </form>
    );
  }

}

export default UserForm;
