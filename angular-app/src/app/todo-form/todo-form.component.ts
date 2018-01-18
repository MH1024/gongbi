import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
  titleValue: string;
  constructor(private http:Http ) { 
  }

  ngOnInit() {
  }
  postTask(titleValue){
    console.log(this.titleValue);
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
     
      
    title : titleValue,          
    body: 'bar',
    userId: 1
  })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    ); }

}

