import { Component ,input} from '@angular/core';

type test={
  id:number | undefined,
  name:string | undefined,
  age:number | undefined
};

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.scss',
  templateUrl: './user.component.html',
})
export class UserComponent {
  userInfo=input<test>();
}
