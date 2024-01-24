import { Observable } from 'rxjs';

export interface Repo<T extends { id: string }> {
  getAll(): Observable<T[]>;
}
