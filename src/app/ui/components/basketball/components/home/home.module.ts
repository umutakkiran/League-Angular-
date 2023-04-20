import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MatchSliderComponent } from './components/match-slider/match-slider.component';
import { NewsComponent } from './components/news/news.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { TeamsInLeagueComponent } from './components/teams-in-league/teams-in-league.component';



@NgModule({
  declarations: [
    HomeComponent,
    MatchSliderComponent,
    NewsComponent,
    LeagueTableComponent,
    TeamsInLeagueComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: HomeComponent }
    ])
  ],
  exports: [
    HomeComponent,
    MatchSliderComponent,
    NewsComponent,
    LeagueTableComponent,
  ]
})
export class HomeModule { }
