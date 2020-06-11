import React from 'react';
import './Todoitem.css'

const Todoitem = (props) => {
    /*const items = props.items;
    const deleteitem = props.deleteitem; in 2th way look at  the next line */
    const {items,deleteitem} =props;
    let Length =items.length;
    const Listitems = Length ? (
        items.map(item => {
            return(
                <div key={item.id}>
               
                <span className="name">{item.name} </span>
                <span className="age">{item.age} </span>
                <span className="action icon" onClick={() => deleteitem(item.id)}>&times;</span>
               
                </div>
            )
        })
    ) : (
        <p> There is no item to show </p>
    )
    return (
        <div className="Listitems">
                <div>
                    <span className="name title">Name </span>
                    <span className="age title">Age </span>
                    <span className="action title">Action </span>
                    {Listitems}
                </div>
        </div>
    )
}
export default Todoitem