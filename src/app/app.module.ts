import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';  // تأكد من استيراد NgChartsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HeadComponent } from './head/head.component';
import { HeadHomeComponent } from './home/head-home/head-home.component';
import { BodyHomeComponent } from './home/body-home/body-home.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { PiechartComponent } from './pages/piechart/piechart.component';
import { LinechartComponent } from './pages/linechart/linechart.component';
import { FilesComponent } from './pages/files/files.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    HeadComponent,
    HeadHomeComponent,
    BodyHomeComponent,
    HomePageComponent,
    SettingsComponent,
    ProfileComponent,
    ContactsComponent,
    BarChartComponent,
    PiechartComponent,
    LinechartComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
