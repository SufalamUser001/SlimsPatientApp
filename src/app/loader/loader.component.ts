import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    standalone: true
})

export class LoaderComponent implements OnChanges {

    @Input() public isVisible = false;

    public ngOnChanges(changes: any): void {
    }
}
