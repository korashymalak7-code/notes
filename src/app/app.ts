import { Component, signal} from '@angular/core';
import{Test1} from './component/test1/test1';
import{UserComponent} from './component/user/user.component';
import{FormsModule} from '@angular/Forms';

@Component({
  imports: [Test1 ,UserComponent ,FormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl:'./app.html',
})
export class App {

  id=signal(1);
  change(){
    this.id.update((val)=>val+1)
  }

  data={id:1,name:'malak'};

  isValid=false;

  ngContent(){
    this.isValid=!this.isValid;
  }

  changeName(){
    console.log("ok");
    console.log(this.data.name);
    this.data.name='manar';
  }

}
