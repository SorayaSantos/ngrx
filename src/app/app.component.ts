import { Person } from './person';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as faker from 'faker';
import { AppState } from './store';
import { select, Store } from '@ngrx/store';
import { personNew } from './store/person.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.people$ = this.store.pipe(select('people'));
    console.log(this.people$)
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
    }

    this.store.dispatch(personNew({ person }));
  }

  update(p: Person) {

  }

  delete(p: Person) {

  }
}
