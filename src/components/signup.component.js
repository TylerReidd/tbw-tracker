import React, {Component, useSate} from "react";
import axios from "axios";

export default class SignUp extends Component { 
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      isLoggedIn: false,
      name: "",
      email: "",
      password: ""
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePass(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);

    axios
      .post("http://localhost:5000/signup", user)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Signup</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Nomo do Aluno: </label>
            <input 
              type="text"
              required
              className='form-control'
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input 
              type="text"
              required
              className='form-control' 
              value={this.state.email}
              onChange={this.onChangeEmail}
              
              />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input 
              type="password"
              required
              className='form-control'
              value={this.state.password}
              onChange={this.onChangePass}
              />
          </div>
          <div className='form-group'>
            <input 
              type="submit"
              required 
              value='Signup'
              className='btn btn-primary' 
              onSubmit={this.onSubmit}
              />
          </div>
          
        </form>
      </div>
    )
  }
}



// const LoginForm = () => {
//   const [name, setName] = useSate('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const onEmailChange = (event) =>{
//     preventDefualt()
//     setEmail(event.target.value)
//   }

//   const onPasswordChange = (event) => {
//     setPassword(event.target.value)
//   }

//   const onSubmit = () => {
//     const body = {
//       email: email,
//       password: password,
//     }
//     setTimeout(() => {
//       setEmail('')
//       setPassword('')
//     }, 800)
//   }
//   return (
//     <>
//     <h1>Log-in</h1>
//     <input type="email" name="email" value={email} label='Email Address' autoComplete='false' placeholder='Enter Email' onChange={onEmailChange}
//      />
//      <input type="password" name="password" value={password} label='password' placeholder='Enter Password' onChange={onPasswordChange} />
//      <hr />
//      <button onClick={onSubmit} variant='contained' ></button>
//     </>
//   )
// }

// export default LoginForm