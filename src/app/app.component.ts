import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {
  title = 'app !';
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

 // login() {
 //   this.af.auth.login({
 //     email: 'frankanthonygavin@gmail.com',
 //     password: 'passwerd',
 //   });
 // }
 //
 // logout() {
 //    this.af.auth.logout();
 //
 // }
}
