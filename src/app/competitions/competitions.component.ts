import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/services/competitions/types';
import { CompetitionsService } from 'src/app/services/competitions/competitions.service';

const availableCompetitions = [
  2001,
  2016,
  2017,
  2019,
  2014,
  2021,
  2018,
  2003,
  2002,
  2015,
];

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})

export class CompetitionsComponent implements OnInit {
  competitions: Array<Competition>;

  constructor(private teamsService: CompetitionsService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamsService.getCompetitions()
    .subscribe(data => this.competitions = data.competitions.filter(i => !!i.area.ensignUrl && availableCompetitions.includes(i.id)));
  }

}
