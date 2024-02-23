import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveModule } from './reactive/reactive.module';
import { SharedModule } from './shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ReactiveModule,
    SharedModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
