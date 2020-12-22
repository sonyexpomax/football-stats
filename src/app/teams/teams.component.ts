import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/services/teams/types';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Array<Team>;

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    console.log(this.route);
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamsService.getTeams(id).subscribe(data => this.teams = data.teams);
  }

}
