import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
{    title: "Faire une To Do list",
    content: "Réaliser une to do list en Angular",
    done: true,},
{    title: "Pomme",
    content: "Manger des pommes",
    done: false,},
{    title: "Sport",
    content: "Faire sa séance de sport quotidienne",
    done: false,},
{    title: "Pneus",
    content: "Changer les pneus arrière du véhicule",
    done: false,},
  ];

  constructor() { }

  getTask(): Task[]{
    return this.tasks
  }

  addTask(task: Task): void{
    this.tasks.push(task);
  }

  deleteTask(task:Task) :void {
    this.tasks =  this.tasks.filter(
     (tsk:Task) => {
       return  JSON.stringify(task) !== JSON.stringify(tsk);
     })
   }
 


}