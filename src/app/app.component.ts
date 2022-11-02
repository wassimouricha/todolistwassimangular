import { Component } from '@angular/core';
import { Task } from './Task/task';
import { TaskService } from './Task/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';


  task: Task[] = [
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

  ngOnInit(){
    console.log("app chargé");
    this.task = this.taskService.getTask();
    
  }


  recupererTask()  {
    this.task = this.taskService.getTask();
    console.log("page rafraichis ");
    


  }

  addTask(){
    this.taskService.addTask({...this.newTask});
     
   }

  changerValeur(){
    this.newTask.title = "";
    this.newTask.content= "";
  }

}
