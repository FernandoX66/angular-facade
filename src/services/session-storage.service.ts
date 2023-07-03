import { Injectable } from '@angular/core';

import { IStorage } from '../interfaces/storage.interface';

@Injectable()
export class SessionStorageService implements IStorage {
  saveItem(key: string, object: unknown): void {
    sessionStorage.setItem(key, JSON.stringify(object));
  }

  getItem<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key) || '');
  }
}
