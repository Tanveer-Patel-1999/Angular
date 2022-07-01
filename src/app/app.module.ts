import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { MypipePipe } from './mypipe.pipe';
import { Mypipe2Pipe } from './mypipe2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UsersComponent,
    MypipePipe,
    Mypipe2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //add profilemodule
    ProfileModule,
    //adding formmodule for ngmodule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
