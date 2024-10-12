import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { PiechartComponent } from './pages/piechart/piechart.component';
import { LinechartComponent } from './pages/linechart/linechart.component';
import { FilesComponent } from './pages/files/files.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full" },
  {path:"home", component:HomePageComponent},
  {path:"settings", component:SettingsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"contacts", component:ContactsComponent},
  {path:"barchart", component:BarChartComponent},
  { path: "piechart", component: PiechartComponent },
  { path: "linechart", component: LinechartComponent },
  { path: "files", component: FilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
