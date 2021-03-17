

export class Todo{

    static fromJson({id, tarea, competado, creado}){
        const temTodo = new Todo( tarea );
        temTodo.id = id;
        temTodo.competado = competado;
        temTodo.creado = creado;

        return temTodo;
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id    = new Date().getTime();
        this.competado = false;
        this.creado = new Date();

    }

    imprimirclase(){
        console.log(`${this.tarea}-${this.id}`);
    }
}