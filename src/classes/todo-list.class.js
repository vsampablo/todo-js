import { Todo } from "./todo.class";


export class TodoList{
    constructor(){
        //this.todo = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todo.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todo = this.todo.filter(todo=>todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for(const todo of this.todo){
            console.log(id, todo.id);
            //id = id*1;
            if (todo.id == id){
                todo.completado = !todo.completado; 
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todo = this.todo.filter(todo=>!todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todo));
    }

    cargarLocalStorage(){

          /*
        if (localStorage.getItem('todo')){
            this.todo = JSON.parse( localStorage.getItem('todo'));
            console.log('cargar',this.todo);
        }else{
            this.todo = [];
        }*/

        this.todo = ( localStorage.getItem('todo')) 
            ? JSON.parse( localStorage.getItem('todo')) 
            : [];

        //this.todo = this.todo.map( obj => Todo.fromJson(obj) );
        this.todo = this.todo.map( Todo.fromJson );
    }
}