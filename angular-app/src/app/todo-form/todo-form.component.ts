import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
  @Input() todo: Todo;
  
  constructor(private http: HttpClient ) {
  }

  ngOnInit() {
  }
  postTask() {
    console.log(todo.titleValue);
    const req = this.http.post('/task', {
    userId : 1,
    title : this.titleValue,
    description : this.description,
    completed : this.completed,
    created_at : new Date(),
  })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    ); }

}

