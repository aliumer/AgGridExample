import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AgGridModule } from 'ag-grid-angular';
import { CellStyleComponent } from './cell-style/cell-style.component';
import { AboutComponent } from './about/about.component';
// import 'ag-grid-enterprise';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'cellstyles', component: CellStyleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CellStyleComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
