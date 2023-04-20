import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';
import { BasketballComponent } from './ui/components/basketball/basketball.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:"admin", component: AdminLayoutComponent, children:[
    {path:"", component: AdminHomeComponent },
    {path:"team", loadChildren: () => import("./admin/components/team/team.module").then(module => module.TeamModule)},
    {path:"player", loadChildren: () => import("./admin/components/player/player.module").then(module => module.PlayerModule)},
    {path:"games", loadChildren: () => import("./admin/components/games/games.module").then(module => module.GamesModule)},



  ]},
  {path:"", component:LayoutComponent, children:[
    {path:"", component: HomeComponent},
    {path:"basketball", loadChildren: () => import("./ui/components/basketball/basketball.module").then(module => module.BasketballModule)},
    {path:"volleyball", loadChildren: () => import("./ui/components/voleyball/voleyball.module").then(module => module.VoleyballModule)},
  ]},
  {path:"basketball", component:BasketballComponent, children:[
    {path:"home", loadChildren: () => import("./ui/components/basketball/components/home/home.module").then(module => module.HomeModule)},
    {path:"fixture", loadChildren: () => import("./ui/components/basketball/components/fixture/fixture.module").then(module => module.FixtureModule)},
    {path:"team/:id", loadChildren: () => import("./ui/components/basketball/components/team/team.module").then(module => module.TeamModule)},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
