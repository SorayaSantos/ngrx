import { ActionReducerMap, createReducer, createSelector } from '@ngrx/store';
import { Person } from './../person';
import * as fromPersonReducer from './person.reducer';

// export interface AppState {
//     people: Person[]
// }

export interface AppState {
    people: fromPersonReducer.PeopleState
}

export const appReducers: ActionReducerMap<AppState> = {
    people: fromPersonReducer.counterReducer
}

//export const selectPeople = (state: AppState) => state.people;

// export const selectPeopleCount = createSelector(
//     selectPeople,
//     (people) => people.length
// )

// export const selectPeopleCount2 = createSelector(
//     selectPeopleCount,
//     selectPeople,
//     (n, people) => n + 1
// )