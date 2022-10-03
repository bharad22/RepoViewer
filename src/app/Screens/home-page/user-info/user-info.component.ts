import { Component, OnInit } from '@angular/core';
import { GitapiService } from 'src/services/gitapi.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private gitapi: GitapiService) { }

  userInfo: any = {};

  ngOnInit(): void {
    this.gitapi.gitUserDataObs.subscribe(data => {
      this.userInfo = data;
      console.log(this.userInfo)

    });
  }

}
