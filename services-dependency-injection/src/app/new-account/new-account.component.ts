import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor( private loggingService: LoggingService ) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("NEWACC343200123");
  }

}
