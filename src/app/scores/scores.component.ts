import { Component, OnInit, ViewChild} from '@angular/core';
import { Score } from 'src/app/services/scores/types';
import { ScoresService } from 'src/app/services/scores/scores.service';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})

export class ScoresComponent implements OnInit {
  displayedColumns: string[] = ['date', 'home', 'goals', 'away' ];
  dataSource = new MatTableDataSource<Score>([]);
  isLoading = false;
  title = '';

  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;

  constructor(
    private scoresService: ScoresService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getScores();
  }


  getScores(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.scoresService.getScores(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(data => {
        this.title = `${data.competition.name} (${data.competition.area.name})`;
        this.dataSource = new MatTableDataSource<Score>(data.matches);
        this.dataSource.paginator = this.paginator;
      });
  }
}
