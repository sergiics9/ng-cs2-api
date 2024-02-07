import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';
import { Repo } from '../interfaces/repo';

@Injectable({ providedIn: 'root' })
export class ItemsService implements Repo<Item> {
  private baseUrl: string = 'https://bymykel.github.io/CSGO-API/api/en/';

  private apiUrl: string = this.baseUrl + 'all.json';
  private apiSkinsUrl: string = this.baseUrl + 'skins.json';
  private apiStickersUrl: string = this.baseUrl + 'stickers.json';
  private apiCollectionsUrl: string = this.baseUrl + 'collections.json';
  private apiCratesUrl: string = this.baseUrl + 'crates.json';
  private apiKeysUrl: string = this.baseUrl + 'keys.json';
  private apiCollectiblesUrl: string = this.baseUrl + 'collectibles.json';
  private apiAgentsUrl: string = this.baseUrl + 'agents.json';
  private apiPatchesUrl: string = this.baseUrl + 'patches.json';
  private apiGraffitiUrl: string = this.baseUrl + 'graffiti.json';
  private apiMusicUrl: string = this.baseUrl + 'music_kits.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  getSkins(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiSkinsUrl);
  }

  getStickers(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiStickersUrl);
  }

  getCollections(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiCollectionsUrl);
  }

  getCrates(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiCratesUrl);
  }

  getKeys(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiKeysUrl);
  }

  getCollectibles(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiCollectiblesUrl);
  }

  getAgents(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiAgentsUrl);
  }

  getPatches(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiPatchesUrl);
  }

  getGraffiti(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiGraffitiUrl);
  }

  getMusic(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiMusicUrl);
  }
}
