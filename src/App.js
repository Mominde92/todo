import logo from './logo.svg';
import './App.css';
import {React , Component} from "react";
import Todoitems from './components/Todoitems/Todoitems'
import Additem from './components/Additem/Additem'

class App extends Component
{
    state = {
        items:[
            {id:1,name:"Hamza",age:22},
            {id:2,name:"Mohamed",age:23},
            {id:3,name:"Abdo",age:24},
            {id:4,name:"Hamza",age:22},
        ]
    }

    deleteitem = (id) => {
        let items = this.state.items
        let i = items.findIndex(item => item.id === id)
        items.splice(i,1)
        this.setState({items})
    }

    additem = (item) => {
        item.id = Math.random();
        let items = this.state.items;
        items.push(item);
        this.setState({items:items})
    }

    render() {
        return (
            <div>
                Todolist
                <Todoitems items={this.state.items} deleteitem={this.deleteitem}/>
                <Additem additem={this.additem}/>
            </div>
            )
    }
}

export default App;
