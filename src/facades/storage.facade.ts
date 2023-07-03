import { inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { SessionStorageService } from '../services/session-storage.service';
import { IStorage } from '../interfaces/storage.interface';

export const STORAGE = new InjectionToken<IStorage>('Storage');

export const storageProvider: Provider = {
  provide: STORAGE,
  useClass: LocalStorageService,
};

@Injectable({ providedIn: 'root' })
export class StorageFacade {
  readonly #storage = inject(STORAGE);

  public saveItem(key: string, value: unknown): void {
    this.#storage.saveItem(key, value);
  }

  public getItem<T>(key: string): T {
    return this.#storage.getItem<T>(key);
  }
}
