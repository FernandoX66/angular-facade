export interface IStorage {
  saveItem: (key: string, object: unknown) => void;
  getItem: <T>(key: string) => T;
}
