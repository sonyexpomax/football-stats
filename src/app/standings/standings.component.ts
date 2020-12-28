import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandingsService } from 'src/app/services/standings/standings.service';
import {TeamInTable} from '../services/standings/types';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  teams: Array<TeamInTable>;
  displayedColumns: string[] = [
    'position',
    'name',
    'points',
    'form',
    'playedGames',
    'won',
    'draw',
    'lost',
    'goals'
  ];

  constructor(
    private standingsService: StandingsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getStandings();
  }

  getStandings(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.standingsService.getStandings(id)
      .subscribe(data => this.teams = data.standings[0].table);
  }

}

