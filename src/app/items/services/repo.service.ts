import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';
import { Repo } from '../interfaces/repo';

@Injectable({ providedIn: 'root' })
export class ItemsService implements Repo<Item> {
  private apiUrl: string = 'https://bymykel.github.io/CSGO-API/api/en/all.json';

  private apiSkinsUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/skins.json';

  private apiStickersUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/stickers.json';

  private apiCollectionsUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/collections.json';

  private apiCratesUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/crates.json';

  private apiKeysUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/keys.json';

  private apiCollectiblesUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/collectibles.json';

  private apiAgentsUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/agents.json';

  private apiPatchesUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/patches.json';

  private apiGraffitiUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/graffiti.json';

  private apiMusicUrl: string =
    'https://bymykel.github.io/CSGO-API/api/en/music_kits.json';

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
