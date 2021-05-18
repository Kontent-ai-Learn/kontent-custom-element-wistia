import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppFlexModule } from './flex';
import { LineClampDirective } from './core/line-clamp.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
    declarations: [AppComponent, LineClampDirective],
    imports: [BrowserModule, HttpClientModule, AppFlexModule, FormsModule, ReactiveFormsModule, AvatarModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
