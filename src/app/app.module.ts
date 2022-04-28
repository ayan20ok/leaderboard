import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PlayerComponent } from './player.component';
import { ScoreComponent } from './score.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayerComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
