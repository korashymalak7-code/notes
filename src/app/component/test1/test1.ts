import { Component ,signal ,computed ,effect ,linkedSignal} from '@angular/core';

import{TestDisDirective} from '../../directive/test-dis.directive';

// creat signal
  type User={
    name:string,
    age:number
  };

@Component({
  imports: [TestDisDirective],
  selector: 'app-test1',
  styleUrl: './test1.scss',
  templateUrl: './test1.html',
  standalone:true
})
export class Test1 {
  //signal :

  // creat signal

  user=signal<User>({
    name:'name',
    age:0
  });

  //set value

  setUser(setname :string,age :number){
    this.user.set({
      name:setname,
      age:age
    });
  };

  //update value by set
  updateUserName(){
    this.user.set({
      ...this.user(),
      name:'maner'
    });
  };

  //update value diracut

  updateUserAge(){
    this.user.update((val)=>{
      console.log(val)
      val.age=20;
      return val;
    });
  };

  //computed :read only signal
 
  p=signal(100);
  q=signal(2);

  total=computed(()=>{console.log("ok");return this.p() * this.q()});

  addQ(){
    this.q.update((val)=>val+1)
  };
  addP(){
    this.p.update((val)=>val + 100)
  };

  //effect

  constructor(){
    effect(()=>{
      console.log("price :",this.p());
    });
  };

   

  



}                                   