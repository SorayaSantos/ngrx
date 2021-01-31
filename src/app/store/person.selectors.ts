import { createFeatureSelector } from '@ngrx/store';
import * as fromPeopleReducer from './person.reducer';

export const peopleState = createFeatureSelector<fromPeopleReducer.PeopleState>('people');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} =
    fromPeopleReducer.peopleAdapter.getSelectors(peopleState);
