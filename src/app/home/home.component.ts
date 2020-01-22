import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
DataserviceService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
    this.calling();
  }
  calling() {
    this.dataservice.currentmessage.subscribe(data => {
      console.log("Received Data....", data);
    })
  }

}
