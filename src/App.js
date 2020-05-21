import React, {Component} from 'react';
import Aux from './hoc/Aux'
import Sidebar from './components/Layout/Sidebar/Sidebar'
class App extends Component {
  render(){
    return (
      <Aux>
        <Sidebar/>     
      </Aux>
    );
  }
  
}

export default App;
