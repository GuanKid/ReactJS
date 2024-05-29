import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import * as firebase from 'firebase';

class UserForm extends Component {

  errorUsername;
  errorEmail;   
  title;
  id;

  constructor(props){
    super(props); 

    this.errorUsername = '';
    this.errorEmail = '';   
    this.id = this.props.match.params.id
    this.title = 'New User';    

    this.state = {
        username: '',
        email: '',
        usernameTouched: false,
        emailTouched: false,      
    };         
      
    this.handleChange = this.handleChange.bind(this);  
    this.handleBlur = this.handleBlur.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);      
  } 

  componentDidMount(){
    if(this.id){        
        this.title = 'Edit User';
        firebase.database().ref('/' + this.id)
        .on('value',snapshot => {            
            this.setState({
                username: snapshot.val().username,
                email: snapshot.val().email,
            });              
          });        
    }
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

  getEmailValidationState() {    
    const length = this.state.email.length;

    if(this.state.emailTouched){
        if (length === 0){
          this.errorEmail = 'Email is required';        
          return 'error';
        } 
        else if (length < 3){
          this.errorEmail = 'Email should be minimum 3 characters';        
          return 'error';
        }  
        else if(this.state.email.indexOf('@') === -1){        
          this.errorEmail = 'Email should contain @';        
          return 'error';             
        }           
        else {
          this.errorEmail = '';                 
          return 'success'
        }       
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
    event.preventDefault(); 
    if (!this.canBeSubmitted()) {            
      return;
    }
    else {                
      // actual submit logic...         
      if(this.id){
        firebase.database().ref('/'+this.id).update({
            username: this.state.username,	
            email: this.state.email  
          }).then(() => this.props.history.push("/"));                                                          
      }
      else{
        firebase.database().ref('/').push({
            username: this.state.username,	
            email: this.state.email  
          }).then(() => this.props.history.push("/"));                                
      }       
    }          
  }  
  
  canBeSubmitted() {    
    return (
      this.state.usernameTouched && this.state.emailTouched 
        && this.errorUsername.length === 0 && this.errorEmail.length === 0      
    );
  }  

  render() {    
    const isEnabled = this.canBeSubmitted();

    return (
      <div>
        <h1>{this.title}</h1>
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
            validationState={this.getEmailValidationState()}
            >
            <ControlLabel>Email</ControlLabel>
            <FormControl
                name="email"
                type="text"
                value={this.state.email}
                placeholder="Enter email"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
            <FormControl.Feedback />
            { this.errorEmail.length > 0 && this.state.emailTouched &&            
                <HelpBlock>{this.errorEmail}</HelpBlock>
            }
            </FormGroup>           
            <Button type="submit" disabled={!isEnabled}>
            Submit
            </Button>                    
        </form>
      </div>
    );
  }
}

export default UserForm;

/**
 
 * 

 * 
   
 */
