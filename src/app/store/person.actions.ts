import { Person } from './../person';
import { createAction, props } from '@ngrx/store';

// export enum PersonActionTypes {
//     PERSON_ALL = '[PERSON_ALL] Get all people',
//     PERSON_NEW = '[PERSON_NEW] Add new person',
//     PERSON_UPDATE = '[PERSON_UPDATE] Update a person',
//     PERSON_DELETE = '[PERSON_DELETE] Delete a person'
// }

export const personAll = createAction('[personAll] Get all people');
export const personNew = createAction('[personNew] Add new person', props<{ person: Person }>());
//export const personUpdate = createAction('[personUpdate] Update a person', props<{ person: Person }>());
//export const personDelete = createAction('[personDelete] Delete a person', props<{ id: String }>());
export const personDelete = createAction('[personDelete] Delete a person', props<{ id: string }>());
export const personUpdate = createAction('[personUpdate] Update a person', props<{ id: string, changes: Partial<Person> }>());
