import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers', 
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template:`
  // <app-server></app-server>
  // <p>This is from template multiline</p>
  // `, 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server created";
  serverName = "";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "A new server created with name: " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName)
  }
}
