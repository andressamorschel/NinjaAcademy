import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ResponseCommunity } from './communities/community.model';

@Injectable({
  providedIn: 'root'
})

export class CommunitiesService {

  // private url: string = "http://academyapi-env.us-west-2.elasticbeanstalk.com/swagger-ui.html#/community-controller/getByNameUsingGET";

  // constructor(private http: HttpClient) { }

  // getCommunities(): Observable<ResponseCommunity> { //observable é usado para chamadas assincronas
  //   return this.http.get<ResponseCommunity>(this.url);
  // }

}
