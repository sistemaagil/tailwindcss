import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { NewContactComponent } from './Falcon/dashboard/CRM/new-contact/new-contact.component';
import { FalconManagementOrdersComponent } from './falcon-management-orders/falcon-management-orders.component';
import{ FullCalendarModule } from 'primeng/fullcalendar';




@NgModule({
  declarations: [
    AppComponent,
    NewContactComponent,
    FalconManagementOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
