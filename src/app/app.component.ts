import {Component, OnInit} from '@angular/core';
import {STATES} from "./services/mock_states";
import {IRegion} from "./utilities/IRegion";
import {TERRITORIES} from "./services/mock-territories";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ngx-usa-states';

    myControl = new FormControl('');
    options: IRegion[] = [];
    statesList: Observable<IRegion[]> | undefined;

    statesAbbreviation: any;

    constructor() {
        this.options = this.getAll();
    }

    getStatesAbbreviation(name: string): any {
        return STATES.filter(option => option.name.includes(name))[0]['abbreviation'];
    }

    getTerritories(): IRegion[] {
        return TERRITORIES;
    }

    getAll(): IRegion[] {
        return STATES.concat(TERRITORIES);
    }

    ngOnInit(): void {
        this.statesList = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
        );
    }

    private _filter(value: string): IRegion[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }

    selectState(value: any) {
        // TODO: use this method to get an abbreviation code - this.getStatesAbbreviation(value);
        console.log(this.getStatesAbbreviation(value));
        this.statesAbbreviation = this.getStatesAbbreviation(value);
    }
}
