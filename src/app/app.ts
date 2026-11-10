import { Component, signal} from '@angular/core';
import{Test1} from './component/test1/test1';
import{UserComponent} from './component/user/user.component';
import{FormsModule} from '@angular/Forms';

type test={
  id:number,
  name:string,
  age:number
};
@Component({
  imports: [Test1 ,UserComponent ,FormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl:'./app.html',
})
export class App {
  protected readonly title = signal('project');


  Userss=signal<test[]>([
    {id:1 ,name:'malak' ,age:19},
    {id:2 ,name:'manar' ,age:25},
    {id:3 ,name:'nada' ,age:27}
  ]);
}