import { useContext,createContext } from "react";
export const TodoContext = createContext({
    todos:[
        {id:1,
            todo : "Todo Message",
            completed : false,

        }
    ],
    addTodo: (todo) =>{},
    deleteTodo: (id) =>{},
    updateTodo : (id,todo) =>{},
    toggleComplete:(id)=>{}
}); // creates storage box
export const useTodo = () => {
    return useContext(TodoContext)// a custom hook let the component grab the data
};

export const TodoProvider = TodoContext.Provider; // TodoProvider