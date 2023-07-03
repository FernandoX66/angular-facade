import { Injectable } from '@angular/core';

import { IStorage } from '../interfaces/storage.interface';

@Injectable()
export class LocalStorageService implements IStorage {
  saveItem(key: string, object: unknown): void {
    localStorage.setItem(key, JSON.stringify(object));
  }

  getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) || '');
  }
}
