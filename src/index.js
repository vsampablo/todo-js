
//import { Todo } from './classes/todo.class.js'
//import { TodoList } from './classes/todo-list.class.js';
import './styles.css';
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";


export const todolist = new TodoList();

//todolist.todo.forEach(todo => crearTodoHtml(todo));
todolist.todo.forEach(crearTodoHtml);

todolist.todo[0].imprimirclase();

const tarea = new Todo('Apender JS');
//tarea.imprimirclase();

//todolist.nuevoTodo(tarea);
// crearTodoHtml(tarea);


console.log({todolist});

//localStorage.setItem('mi-key','');
//sessionStorage.setItem('mi-key','');
/*
setTimeout(()=>{
    localStorage.removeItem('mi-key');
},1500); */