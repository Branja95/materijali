import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { SimpleData } from "./services/simple-data.service"

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { Simple2Component } from './simple2/simple2.component';

import { NotificationService } from './services/notification.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { ServiceComponent } from './service/service.component'
import { HttpServiceService } from './services/http-services.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    Simple2Component,
    ServiceComponent,
    NotificationsComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [SimpleData, NotificationService, HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
