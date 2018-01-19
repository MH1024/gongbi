## Gongbi
MEAN stack for todo list web app.
## Developing environment
-Angular 5.0.0
-Nodejs 6.11.3
-Express 4.15.5
-MongoDB 3.6.1
## Description
use Angular Material as UI.
study from ng book 5 example https://www.ng-book.com/2/
when crate new component use: "ng generate component componentName --module=app.module"
install MongoDB in localhost and connect with Niodejs.
## App screenshot
<img width="555" alt="2018-01-18 10 16 14" src="https://user-images.githubusercontent.com/31177220/35095641-5192bcf4-fc9d-11e7-8dea-9e634ca0ed64.png">
## API Design

1. Get Tasks
    1. main page：`GET /posts`
    2. check task details：`GET /posts/:postId`
2. Create ：`POST /posts/create`
3. Edit Tasks ：`POST /posts/:postId/edit`
4. Delete Task：`DELETE /posts/:postId/remove`
