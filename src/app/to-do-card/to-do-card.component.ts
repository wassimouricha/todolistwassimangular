import { Component, OnInit, Input } from '@angular/core';
import  {Task } from '../Task/task';
import { TaskService } from '../Task/task.service';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.scss']
})
export class ToDoCardComponent implements OnInit {
  desactive = false;
  @Input() task!: Task;

  constructor(private taskService: TaskService) { 

    console.log("constructeur");
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("destruction !");
    
  }

  doneButton(){
    this.desactive = !this.desactive;
    console.log("tache validée");
    
  }


  deleteTask(task:Task): void {

    this.taskService.deleteTask(task);
    
  }



}
