import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { AnimalComponent } from './animals/animal/animal.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormsModule } from '@angular/forms';
import { AnimalFilterPipe } from './pipes/animal-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoryComponent,
    AnimalComponent,
    AnimalDetailComponent,
    SummaryPipe,
    AnimalFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
