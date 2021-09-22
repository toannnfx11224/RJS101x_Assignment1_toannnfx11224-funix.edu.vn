import { Component } from 'react';
import {    Navbar } from 'reactstrap';

import Header from './Components/Headercomponents';
import Staffname from './Components/Staffname';
import { STAFFS } from './shared/staffs';

import Footer from './Components/footercomponents';


class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        staffs: STAFFS
      };
    }
    
   
    render(){
  return (
    
    <div>
       <Header/>
      <Navbar  color="primary">
        <h2  style={{textAlign:"center"}}>APP QUẢN LÝ NHÂN SỰ 1.0</h2>
        <p>asm1 update</p>
      </Navbar>
        <Staffname  staffs ={this.state.staffs}/>
      
       <Footer/>
    </div>
  )
  };
  componentWillUnmount(){
    return true;
  }
}

export default App;
