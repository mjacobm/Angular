import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private router:Router,
  private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onReload() {
  this.router.navigate(['/server'], {relativeTo:this.route});
  }

}
