import React, { Component } from 'react';
import Todoitem from './components/todoitem/Todoitem';
import Additem from './components/Additem/Additem';

class App extends Component {
  state = {
    items : [
      {id : 1 ,name:'Ahmad', age:25 },
      {id : 2 ,name:'Belal' , age:22 },
      {id : 3 ,name:'Gazwan' , age:23},
      {id : 4 ,name:'Diaa', age:24}
    ]
  }
  deleteitem = (id) => {
		 console.log(id);
		 let items = this.state.items.filter(item => {
			return item.id !== id 
		 })
		 this.setState ({
			items
		 })
    
  }
  
additem = (item) => {
  item.id =Math.random();
  let items =this.state.items;
  items.push(item);
  this.setState({
    items:items
  })
  
}
  render() {
   
    return (
      <div className="App-container">
          <h1 className='textcenter'>List Member</h1>
          <Todoitem items = {this.state.items} deleteitem={this.deleteitem} />
          <Additem  additem={this.additem}/>
      </div>
      
    );
  }
}
export default App; 