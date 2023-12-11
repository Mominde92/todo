import {React , Component} from "react";
import './Additem.css'

class Additem extends Component {
    state = {
        name:'',
        age:''
    }
    handelChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.additem(this.state)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Name" id="name" onChange={this.handelChange} value={this.state.name}/>
                    <input type="number" placeholder="Enter Age" id="age" onChange={this.handelChange} value={this.state.age}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default Additem