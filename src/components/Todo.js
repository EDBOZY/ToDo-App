import React from "react";
const Todo=({text,todos,setTodos,todo})=>{
    const deleteHandler=()=>{
        setTodos(todos.filter(el=> el.id !== todo.id) );

    };
    const completeHandler=()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item,completed: !item.completed,
                };
            }
            return item;
        }))

    }
    return(
        <div className="todo">
            <l1 className={`todo-item ${todo.completed? "completed":""}`}>{text}</l1>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>

        </div>

    );
};
export default Todo;