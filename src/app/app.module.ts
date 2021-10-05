import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTableComponent } from './components/show-table/show-table.component';
import { ConsultDataService } from './services/consult-data.service';
import { FilterDataComponent } from './components/filter-data/filter-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowTableComponent,
    FilterDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ConsultDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
