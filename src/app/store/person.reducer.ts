import { Person } from './../person';
import { createReducer, on } from '@ngrx/store';
import { personAll, personNew, personUpdate, personDelete } from './person.actions';

export const initialState: Person[] = [];

const _counterReducer = createReducer(
    initialState,
    on(personAll, (state) => { return state }),
    on(personNew, (state, action) => { return state.concat(action.person) }),
    on(personUpdate, (state, action) => {
        let people = state.slice();
        let i = people.findIndex(p => p._id == action.person._id);
        if (i >= 0) {
            people[i] = action.person;
        }
        return people;
    }),
    on(personDelete, (state, action) => { return state.filter(p => p._id != action.id) })
)

export function counterReducer(state, action) {
    return _counterReducer(state, action)
}