// import { initialState } from './person.reducer';
import { Person } from './../person';
import { createReducer, on } from '@ngrx/store';
import { personAll, personNew, personUpdate, personDelete } from './person.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface PeopleState extends EntityState<Person> {

}

export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
    selectId: (p: Person) => p._id
});

export const initialState: PeopleState = peopleAdapter.getInitialState({});

//export const initialState: Person[] = [];

// const _counterReducer = createReducer(
//     initialState,
//     on(personAll, (state) => { return state }),
//     on(personNew, (state, action) => { return state.concat(action.person) }),
//     on(personUpdate, (state, action) => {
//         let people = state.slice();
//         let i = people.findIndex(p => p._id == action.person._id);
//         if (i >= 0) {
//             people[i] = action.person;
//         }
//         return people;
//     }),
//     on(personDelete, (state, action) => { return state.filter(p => p._id != action.id) })
// )

const _counterReducer = createReducer(
    initialState,
    on(personNew, (state, action) => { return peopleAdapter.addOne(action.person, state) }),
    on(personUpdate, (state, action) => { return peopleAdapter.updateOne({ id: action.id, changes: action.changes }, state) }),
    on(personDelete, (state, action) => { return peopleAdapter.removeOne(action.id, state) })
)

export function counterReducer(state, action) {
    return _counterReducer(state, action)
}