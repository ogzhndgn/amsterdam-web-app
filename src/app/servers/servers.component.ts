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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "A new server created";
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName)
  }
}
