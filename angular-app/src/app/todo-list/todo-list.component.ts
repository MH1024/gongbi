import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listData: any;
  constructor(private http: HttpClient ) {
    // json data is from test api.
  }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe(data => {this.listData = data; });
  }

}
