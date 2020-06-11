import React,{Component} from 'react';
import './Additem.css'

class Additem extends Component {
    state ={
        name :'',
        age :''
    }
    change =(e) =>{
      /* console.log(e.target.value)*/
      this.setState({
          [e.target.id] : e.target.value
      })
    }
    hsubmit =(e) =>{
        e.preventDefault();
        console.log(this.state);
        console.log(e.target.name.value);
        if(e.target.name.value === ""){
            return false;
        }else{
            this.props.additem(this.state);
            this.setState({
                name:'',
                age:''
            })
        }
    
    }
    render () {
        return (
            <div>
                <form onSubmit={this.hsubmit}>
                    <input type="text" placeholder=" Enter Your Name...." id="name" onChange={this.change} value={this.state.name} />
                    <input type="number" placeholder=" Enter Your Age...." id="age" onChange={this.change} value={this.state.age}/>
                    <input type="submit" value="ADD"/>
                </form>
            </div>
        )
    }

}
export default Additem;