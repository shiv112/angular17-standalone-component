// import { Component, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { Standalone2Component } from './pages/standalone-2/standalone-2.component'

@Component({
    selector: 'app-component',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        RouterOutlet,
        HttpClientModule,
        Standalone2Component,
    ],
})
export class AppComponent {}
