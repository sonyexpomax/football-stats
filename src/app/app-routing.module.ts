import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroesComponent } from './heroes/heroes.component';
import { TeamsComponent } from './teams/teams.component';
import { ScoresComponent } from './scores/scores.component';
import { CompetitionsComponent } from './competitions/competitions.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

// import { CenteredContentLayoutComponent } from './layout/centered-content-layout/centered-content-layout.component'

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
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent },
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
