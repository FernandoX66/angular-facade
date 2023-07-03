import { ApplicationConfig } from '@angular/core';
import { storageProvider } from './facades/storage.facade';

export const appConfig: ApplicationConfig = {
  providers: [storageProvider],
};
