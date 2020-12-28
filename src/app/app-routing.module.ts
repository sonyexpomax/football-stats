import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { ScoresComponent } from './scores/scores.component';
import { CompetitionsComponent } from './competitions/competitions.component';
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
  { path: 'scores/:id', component: ScoresComponent },
  { path: 'teams/:id', component: TeamsComponent },
  {
    path: 'competitions',
    loadChildren: () =>
      import('./competitions/competitions.module').then((m) => m.CompetitionsModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
