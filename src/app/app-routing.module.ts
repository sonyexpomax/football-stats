import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { ScoresComponent } from './scores/scores.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { StandingsComponent } from './standings/standings.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'competitions',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: 'competitions', component: CompetitionsComponent }],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: 'standings/:id', component: StandingsComponent }],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: 'scores/:id', component: ScoresComponent }],
  },
  { path: 'teams/:id', component: TeamsComponent },
  {
    path: 'competitions',
    loadChildren: () =>
      import('./competitions/competitions.module').then((m) => m.CompetitionsModule),
  },
  {
    path: 'standings/:id',
    loadChildren: () =>
      import('./standings/standings.module').then((m) => m.StandingsModule),
  },
  {
    path: 'scores/:id',
    loadChildren: () =>
      import('./scores/scores.module').then((m) => m.ScoresModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
