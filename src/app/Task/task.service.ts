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
{    title: "Faire un composant",
    content: "Réaliser un composant",
    done: false,},
{    title: "Afficher un composant",
    content: "Afficher le composant crée",
    done: false,},
{    title: "Ajouter une tache",
    content: "Pouvoir ajouter une tache",
    done: false,},
{    title: "Supprimer une tache",
    content: "Pouvoir supprimer une tache",
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
