import {React , Component} from "react";
import './Todoitems.css'

const Todoitems = (props) => {
    const {items,deleteitem} = props ;
    let length = items.length;
    const ListItems = length ? items.map(item => {
        return (
            <div className="App Container" key={item.id}>
                <h1 className="text-center">ToDo List</h1>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={() => deleteitem(item.id)}>&times;</span>
            </div>
        )
    }):(
        <p>There is no item to show</p>
    )
    return (
        <div>
            <div className="ListItems">
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default Todoitems