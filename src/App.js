import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const initialState = {

  input: '',
  //imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};


class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }})
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if(route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  };

  render() {
    const { isSignedIn, route} = this.state;
    console.log("TEEEEEEEEEST");
    return (
        <div className="App">

            <Particles className='particles'
                       params={particleOptions}
            />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>

          { route === 'home'
              ? <div>
                <h1>WELCOME USER!</h1>
              </div>
              //< SignIn onRouteChange={this.onRouteChange}/>
              : (
                  route === 'signin'
                      ? < SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                      : < Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
          }
        </div>
    );
  }
}

export default App;
