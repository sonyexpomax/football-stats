import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MatchResponse} from '../services/match/types';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { MatchService } from '../services/match/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  match$: Observable<MatchResponse>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MatchService
  ) { }

  ngOnInit(): void {
    this.match$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMatch(params.get('id')))
    );
  }

}
