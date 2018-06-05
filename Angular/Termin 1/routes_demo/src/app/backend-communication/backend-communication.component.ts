import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-backend-communication',
  templateUrl: './backend-communication.component.html',
  providers: [DemoService],
  styleUrls: ['./backend-communication.component.css']
})
export class BackendCommunicationComponent implements OnInit {

  constructor(private demoService: DemoService) { }

  ngOnInit() {
  }

  callGet(){
    this.demoService.getMethodDemo()
      .subscribe(
        data => {
          console.log(data);
        }
    )

  }

  callPost(){
    this.demoService.postMethodDemo()
    .subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
