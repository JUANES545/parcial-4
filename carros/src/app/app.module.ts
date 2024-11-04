import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaCarrosModule } from './lista-carros/lista-carros.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ListaCarrosModule
    ],
    imports: [
        BrowserModule,
        HttpClient
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }