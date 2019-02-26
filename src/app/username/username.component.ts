import {Component} from "@angular/core";

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  userName = '';
  disabled = true;

  onUpdateUsername(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName == '') {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  resetUsername() {
    this.userName = "";
    this.disabled = true;
  }
}
