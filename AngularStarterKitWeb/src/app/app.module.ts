import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService} from './_services/authentication.service';
import { UserService } from './_services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ExportComponent } from './export/export.component';
import { ExportdashboardviewerComponent } from './export/exportdashboardviewer/exportdashboardviewer.component';
import { ExportreportviewerComponent } from './export/exportreportviewer/exportreportviewer.component';
import { EqualValidatorDirective } from './_directives/equal-validator.directive';
import {
  DashboardComponent,
  DashboardDesignerComponent,
  IzendaHomeComponent,
  IzendaSettingComponent,
  ReportCustomFilterComponent,
  ReportDesignerComponent,
  ReportListComponent,
  ReportPartComponent,
  AdvancedReportPartComponent,
  ReportViewerComponent,
  DashboardViewerComponent
} from './izendacomponents/index';
import { IzendaIntegrate } from './_helpers/izendaintegrate';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    ExportComponent,
    ExportdashboardviewerComponent,
    EqualValidatorDirective,
    ExportreportviewerComponent,
    DashboardComponent,
    DashboardDesignerComponent,
    IzendaHomeComponent,
    IzendaSettingComponent,
    ReportCustomFilterComponent,
    ReportDesignerComponent,
    ReportListComponent,
    ReportPartComponent,
    AdvancedReportPartComponent,
    ReportViewerComponent,
    DashboardViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
    AuthenticationService,
    UserService,
    IzendaIntegrate, ],
  bootstrap: [AppComponent]
})
export class AppModule { }