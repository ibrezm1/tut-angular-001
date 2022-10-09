import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created';
  newServerName:string ='';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    console.log('Create Server Clicked');
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: Event) {
    //Type casting required 
    this.newServerName = (<HTMLInputElement> event.target).value
    console.log(this.newServerName);
  }

  ngOnInit() {}
}
