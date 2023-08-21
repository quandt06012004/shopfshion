import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(){
   
  }
  ngOnInit(): void {

    let  signUpButton= document.getElementById('signUp');
    let signInButton = document.getElementById('signIn');
    let  container = document.getElementById('container');
      signUpButton?.addEventListener('click', () => {
       container?.classList.add('right-panel-active');
   });
 
   signInButton?.addEventListener('click', () => {
       container?.classList.remove('right-panel-active');
   });
  }

}
