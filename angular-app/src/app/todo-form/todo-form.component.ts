import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
  titleValue: string;
  description: string;
  completed: boolean;
  constructor(private http: HttpClient ) {
  }

  ngOnInit() {
  }
  postTask() {
    console.log(this.titleValue);
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

