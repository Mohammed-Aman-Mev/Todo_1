const Listitem=({item,deleteTodo,editTodo})=>{
    return(
        <li>{item.expance}::::{item.amount}
        <button onClick={()=>editTodo(item)}>EDIT</button>
        <button onClick={()=>deleteTodo(item)}>DELETE</button>
        </li>
    )
}

export default Listitem;