import React from 'react';
import './App.css';
import Body from './Body';
import Logo from './logo.png';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showBody: true
    }
  }

  
  render(){
    return (
      <div className="App">
        <div className="header"> <img className="logo" alt="logo"src={Logo} /></div>
        <div className="body"><Body/></div>
        <div className="footer">
          <h3>DEVELOPED BY</h3>
            <p> Christian Bilke • Courtland Crouchet • Megan Do • Cody Dronet • Ahmonya Edwards • Afolabi Ige • Seth Pottle • Jake Ardoin </p>
            </div>
      </div>
    );
  }
}

export default App;
