import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../shared/logging.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  constructor(private loggingService: LoggingService) {

   }

  ngOnInit(): void {
    this.loggingService.logStatusChange("ACC120032");
  }

}
