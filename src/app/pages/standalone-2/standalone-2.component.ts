import { Component } from '@angular/core'
import { StandaloneComponent } from '../standalone/standalone.component'

@Component({
    selector: 'app-standalone-2',
    standalone: true,
    imports: [StandaloneComponent],
    templateUrl: './standalone-2.component.html',
    styleUrl: './standalone-2.component.scss',
})
export class Standalone2Component {}
