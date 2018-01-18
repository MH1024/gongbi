import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listData: Object;
  constructor(private http:Http) {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe(res => this.listData = res.json());
    
   }


  ngOnInit() {
  }

}
