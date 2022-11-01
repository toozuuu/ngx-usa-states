import {IRegion} from "./IRegion";

export interface IUSStateService {
    getStates(): IRegion[];
    getTerritories(): IRegion[];
    getAll(): IRegion[];
}
