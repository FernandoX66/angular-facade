import { Component, inject } from '@angular/core';
import { StorageFacade } from '../facades/storage.facade';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
    <button 
      type="button" 
      style="font-family: inherit"
      (click)="saveUser()"
    >
      Save user
    </button>

    <button 
      type="button" 
      style="font-family: inherit; margin-left: 10px"
      (click)="saveAnimal()"
    >
      Save animal
    </button>
  `,
})
export class UserComponent {
  readonly #storageFacade = inject(StorageFacade);
  user = {
    name: 'Fernando',
    age: 23,
  };
  animal = {
    name: 'Spider',
  };

  public saveUser(): void {
    this.#storageFacade.saveItem('user', this.user);
  }

  public saveAnimal(): void {
    this.#storageFacade.saveItem('animal', this.user);
  }
}
