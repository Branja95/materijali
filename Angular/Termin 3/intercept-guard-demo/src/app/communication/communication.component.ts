import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
   providers: [DemoService]
})
export class CommunicationComponent implements OnInit {

  constructor(private demoService: DemoService) { }

  ngOnInit() {
  }


  callTokens(){

    this.demoService.getTheToken();
  }

}
