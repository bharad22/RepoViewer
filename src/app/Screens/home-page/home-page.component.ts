import { Component, OnInit } from '@angular/core';
import { GitapiService } from 'src/services/gitapi.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private gitapi: GitapiService) { }

  username: any = '';
  loading: boolean = false;
  dataAvailable: boolean = false;

  ngOnInit(): void {
  }

  getUsername(event: any) {
    this.username = event.target.value;
    console.log(event.target.value)
  }

  async getUserRepository() {
    this.loading = true;
    await this.gitapi.getUserRepo(this.username).then((response) => {
      if (response.every(val => val == true)) {
        this.loading = false;
        this.dataAvailable = true;
      }
    });
  }
}
