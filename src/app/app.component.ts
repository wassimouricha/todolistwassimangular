import { Component } from '@angular/core';
import { Task } from './Task/task';
import { TaskService } from './Task/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Task[] = [
    {
      title: "titre",
      content: "contenu"
    }
  ];

  newTask: Task= {
    title: "",
    content: "",
  }


  constructor(private  taskService: TaskService){}

  ngOnInit() : void {
    console.log("app chargé");
    console.log(this.tasks);
    
    // this.tasks = this.taskService.getTask();
    this.taskService.getTask()
    .subscribe((todos: any[]) => {
      this.tasks = todos.map<Task>((todo: any) => {
        return {
          title: todo.title,
          done: todo.done,
        }
      })
    })
    
  }


  recupererTask()  {
    // this.tasks = this.taskService.getTask();
    console.log("page rafraichis ");
  }

  addTask(){
    this.taskService.addTask({...this.newTask});
     console.log("tache ajouté");
     this.newTask = {title:"", content:""}
   }


}
