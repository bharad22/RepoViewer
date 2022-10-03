import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitapiService {


  public_url: string = "https://api.github.com";

  constructor(private http: HttpClient) { }

  gitUserData = new BehaviorSubject<any>({});
  gitUserRepo = new BehaviorSubject<any>([]);


  gitUserDataObs = this.gitUserData.asObservable();
  gitUserRepoObs = this.gitUserRepo.asObservable();


  getUserRepo(username: any) {
    let userDataPromise = new Promise((resolve, reject) => {

      this.http.get(`${this.public_url}/users/${username}`).subscribe((userDataResponse) => {
        this.gitUserData.next(userDataResponse);
        resolve(true);
      });
    })

    let userRepoPromise = new Promise((resolve, reject) => {
      this.http.get(`${this.public_url}/users/${username}/repos`).subscribe((userRepoResponse: any) => {
        this.gitUserRepo.next(userRepoResponse);
        resolve(true)
      });
    })

    return Promise.all([userDataPromise, userRepoPromise]);
  }

}
