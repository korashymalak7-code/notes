import { CurrencyPipe } from '@angular/common';
import { Component ,input, SimpleChange,contentChild} from '@angular/core';
import { Test1 } from '../test1/test1';


@Component({
  imports: [CurrencyPipe ,Test1],
  selector: 'app-user',
  styleUrl: './user.component.scss',
  templateUrl: './user.component.html',
})
export class UserComponent {
  id=input();
  userInfo=input<any>();
  ngContent=contentChild("title");

  //******************************* component life cycle *****************************//

  // run  when the component  creat  but the template and dom  dose not ready
  constructor(){
    // this is mistake bacouse the constructor didn't wait the data resive and have a defult value
    this.id();
  }

  // this is run  when the data will send from  parent resive
  ngOnInit(){
    // this is a true and have the data send from  parent
    this.id();

    console.log(this.userInfo());
  }

  // run  when the data it coming from parent update (change the refrance of data )
  ngOnChanges(obj:SimpleChange){
    console.log(obj);
  }

  // run  when the data it coming from parent update (change the refrance of data ) or any paremeter in it change
  ngDoCheck(){
    console.log(this.userInfo());
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
    console.log(this.ngContent());
  }

  ngAfterContentCheck(){
    console.log("ngAfterContentCheck");
     console.log(this.ngContent());6
  }

  //******************************* pipe *****************************//

   
}
