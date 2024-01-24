import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Item } from '../interfaces/item';
import { Repo } from '../interfaces/repo';

@Injectable({ providedIn: 'root' })
export class ItemsService implements Repo<Item> {
  private apiUrl: string = 'https://bymykel.github.io/CSGO-API/api/en/all.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }
}
