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
    return useContext(TodoContext)// let the component grab the data
};

// export const TodoProvider = ({ children }) => {
//     const [todos, setTodos] = useState([]);
//     return ( // // provider fill the box with value ie data
//         <TodoContext.Provider value={{ todos, setTodos }}>  
//             {children}
//         </TodoContext.Provider>
//     )
// }
export const TodoProvider = TodoContext.Provider;