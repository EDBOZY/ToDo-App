import React from "react";
import Todo from "./Todo"
const TodoList=({todos,setTodos,filteredTodos})=>{
    return(
        <div class='todo-container'>
            <ul class="todo-list">
                {filteredTodos.map((todo)=>(
                    <Todo
                      todo={todo}
                      todos={todos} 
                      setTodos={setTodos} 
                      key={todo.id} 
                      text={todo.text}

                    />

                ))}
            </ul>
            
        </div>
    )
}
export default TodoList;