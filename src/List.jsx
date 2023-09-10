import Listitem from "./Listitem";

const List = ({ data ,deleteTodo,editTodo}) => {
  return (
    <ol>
     {
        data.map((item)=>(
            <Listitem key={item.id} item={item} deleteTodo={deleteTodo} editTodo={editTodo}/>
        ))
     }
    </ol>
  );
};
export default List;
