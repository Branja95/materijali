import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpServiceService } from '../services/http-services.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  services : Object [];

  constructor(private httpServiceService: HttpServiceService) { }

  ngOnInit() {
    this.httpServiceService.getServices().subscribe(
      (serv: any) => {this.services = serv; console.log(this.services)},
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
  }

  addService() : void{
    this.httpServiceService.postService().subscribe(this.onPost)
  }

  onPost(res : any) : void{
    alert("Post!");
    console.log(res.json());
  }

}
