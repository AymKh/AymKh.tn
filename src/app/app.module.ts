import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// MATERIAL
import {MatTabsModule} from '@angular/material/tabs';
import { HotLinksComponent } from './components/hot-links/hot-links.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MainTabsComponent } from './components/main-tabs/main-tabs.component';
import { BioComponent } from './components/main-tabs/bio/bio.component';
import { PortfolioComponent } from './components/main-tabs/portfolio/portfolio.component';
import { StackComponent } from './components/main-tabs/stack/stack.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HotLinksComponent,
    MainTabsComponent,
    BioComponent,
    PortfolioComponent,
    StackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
