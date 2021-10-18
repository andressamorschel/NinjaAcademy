import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitiesComponent } from './communities/communities.component';
import { MainComponent } from './main/main.component';
import { ResidentsComponent } from './residents/residents.component';
import { UnitsComponent } from './units/units.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'communities', component: CommunitiesComponent},
  {path: 'units', component: UnitsComponent},
  {path: 'residents', component: ResidentsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
