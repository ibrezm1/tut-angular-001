import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Hello1Component } from './hello/hello1.component';
import { Hello2Component } from './hello/hello2.component';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    Hello1Component,
    Hello2Component,
    ServerComponent,
    ServersComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
