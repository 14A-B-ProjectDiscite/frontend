import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AdminConfigurationComponent,
  EnemyStatsComponent,
  HomeComponent,
  ListsComponent,
  NewsComponent,
  ProfileEditComponent,
  UserListComponent,
  WeaponStatsComponent
} from './Components';
import { ClassesComponent } from './Components/classes/classes.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'',
    runGuardsAndResolvers: 'always',
    children:[
      {path: 'enemy', component: EnemyStatsComponent, },
      {path: 'weapon', component: WeaponStatsComponent, },
      {path: 'class', component: ClassesComponent, },
      {path: 'config', component: AdminConfigurationComponent, },
      {path: 'edit', component: ProfileEditComponent, },
      {path: 'users', component: UserListComponent, },
      {path: 'lists', component: ListsComponent},
      {path: 'news', component: NewsComponent},
      {path: '**', component: HomeComponent, pathMatch: "full"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
