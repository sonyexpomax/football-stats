import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/services/scores/types';
import { ScoresService } from 'src/app/services/scores/scores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})

export class ScoresComponent implements OnInit {
  scores: Array<Score>;

  constructor(
    private scoresService: ScoresService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getScores();
  }

  getScores(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.scoresService.getScores(id)
    .subscribe(data => this.scores = data.matches);
  }

}
