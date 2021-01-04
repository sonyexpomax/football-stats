import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Score, ScoreData} from 'src/app/services/scores/types';
import { ScoresService } from 'src/app/services/scores/scores.service';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {finalize} from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})

export class ScoresComponent implements AfterViewInit {
  scores: Array<Score> = [];
  displayedColumns: string[] = ['date', 'home', 'goals', 'away' ];
  dataSource = new MatTableDataSource<Score>([]);
  isLoading = false;
  title = '';

  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private scoresService: ScoresService,
    private route: ActivatedRoute,
  ) { }

  ngAfterViewInit(): void {
    this.getScores();
  }


  getScores(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.scoresService.getScores(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(data => {
        this.title = `${data.competition.name} (${data.competition.area.name})`;
        this.scores = data.matches;
        const newData = data.matches.map(item => ({...item, homeTeam: item.homeTeam.name, awayTeam: item.awayTeam.name}));
        this.dataSource = new MatTableDataSource<ScoreData>(newData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue, this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
