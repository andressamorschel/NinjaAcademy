import { Component, Inject, OnInit } from '@angular/core';
import { ResponseCommunity } from './community.model';
import { CommunitiesService } from '../communities.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  public responseCommunity: ResponseCommunity;

  constructor(private communitiesService: CommunitiesService) { }

  ngOnInit(): void { //método executado toda vez que o comp é inicializado
    // this.communitiesService.getCommunities()
    //   .subscribe(res => this.responseCommunity = res);
  }

}

