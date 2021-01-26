import { Person } from './person';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people$: Observable<Person[]>;

  addNew() {

  }

  update(p: Person) {

  }

  delete(p: Person) {

  }
}
