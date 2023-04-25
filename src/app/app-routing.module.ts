import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AdminConfigurationComponent,
  EnemyStatsComponent,
  HomeComponent,
  ListsComponent,
  ProfileEditComponent,
  UserListComponent,
  WeaponStatsComponent
} from './Components';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'',
    runGuardsAndResolvers: 'always',
    children:[
      {path: 'enemy', component: EnemyStatsComponent, },
      {path: 'weapon', component: WeaponStatsComponent, },
      {path: 'config', component: AdminConfigurationComponent, },
      {path: 'edit', component: ProfileEditComponent, },
      {path: 'users', component: UserListComponent, },
      {path: 'lists', component: ListsComponent},
      {path: '**', component: HomeComponent, pathMatch: "full"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
