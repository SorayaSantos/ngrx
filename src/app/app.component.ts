//import { selectPeople, selectPeopleCount } from './store/index';
import { Person } from './person';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as faker from 'faker';
import { AppState } from './store';
import { select, Store } from '@ngrx/store';
import { personNew, personAll, personUpdate, personDelete } from './store/person.actions';
import * as fromPeopleSelectors from './store/person.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    //this.people$ = this.store.pipe(select('people'));
    this.store.dispatch(personAll());
    this.people$ = this.store.select(fromPeopleSelectors.selectAll);
    //this.store.select(selectPeopleCount).subscribe(n => console.log(n));
  }

  people$: Observable<Person[]>;

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString()
      //id: new Date().getMilliseconds().toString()
    }

    this.store.dispatch(personNew({ person }));
  }

  update(p: Person) {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      //_id: p._id
    }
    console.log(person)

    this.store.dispatch(personUpdate({ id: p._id, changes: person }));
  }

  delete(p: Person) {
    this.store.dispatch(personDelete({ id: p._id }));
  }
}
