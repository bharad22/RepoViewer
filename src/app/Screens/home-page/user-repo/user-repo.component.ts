import { Component, OnInit } from '@angular/core';
import { GitapiService } from 'src/services/gitapi.service';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css'],
})
export class UserRepoComponent implements OnInit {
  constructor(private gitapi: GitapiService) {}
  userRepo: any = [];

  currentPage: number = 1;
  count: number = 10;

  ngOnInit(): void {
    this.gitapi.gitUserRepoObs.subscribe((data) => {
      this.userRepo = data;
      console.log(this.userRepo);
    });
  }
}
