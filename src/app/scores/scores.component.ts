import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DateRange, Score, ScoreData, ScoresResponse} from 'src/app/services/scores/types';
import { ScoresService } from 'src/app/services/scores/scores.service';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {finalize} from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';
import {DateNextPipe} from '../common/pipes/date-next.pipe';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
  providers: [ DateNextPipe ]
})

export class ScoresComponent implements AfterViewInit {
  scores: Array<Score> = [];
  displayedColumns: string[] = ['utcDate', 'home', 'goals', 'away', 'details' ];
  dataSource = new MatTableDataSource<ScoreData>([]);
  isLoading = false;
  title = '';
  disabledBtns: {[key in 1 | 7 | 30]: boolean} = {
    1: false,
    7: false,
    30: false
 };
  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private scoresService: ScoresService,
    private route: ActivatedRoute,
    private nextDate: DateNextPipe,
  ) { }

  ngAfterViewInit(): void {
    this.getScores();
  }


  getScores(date?: DateRange): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.scoresService.getScores(id, date)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((data: ScoresResponse) => {
        this.title = `${data.competition.name} (${data.competition.area.name})`;
        this.scores = data.matches;
        const newData = data.matches.map(item => ({...item, homeTeam: item.homeTeam.name, awayTeam: item.awayTeam.name }));
        this.dataSource = new MatTableDataSource<ScoreData>(newData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getDate(value?: 1 | 7 | 30) {
    const container = Object.keys(this.disabledBtns).reduce( (acc, item) => {
      acc[item] = value === +item;
      return acc;
    }, {});
    this.disabledBtns = container as {[key in 1 | 7 | 30]: boolean};

    const date = {
      dateFrom: this.nextDate.transform(),
      dateTo: value > 1 ? this.nextDate.transform(value) : this.nextDate.transform(),
    };
    console.log(this.disabledBtns);
    value ? this.getScores(date) : this.getScores();
  }
}
