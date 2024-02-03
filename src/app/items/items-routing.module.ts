import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PistolsPageComponent } from './pages/pistols/pistols.component';
import { MidTierPageComponent } from './pages/mid-tier/mid-tier.component';
import { RiflesPageComponent } from './pages/rifles/rifles.component';
import { KnivesPageComponent } from './pages/knifes/knives.component';
import { HomePageComponent } from './pages/home/home.component';
import { GlovesPageComponent } from './pages/gloves/gloves.component';
import { AgentsPageComponent } from './pages/agents/agents.component';
import { StickersPageComponent } from './pages/stickers/stickers.component';
import { CasesPageComponent } from './pages/cases/cases.component';
import { CollectionsPageComponent } from './pages/collections/collections.component';
import { PatchesPageComponent } from './pages/patches/patches.component';
import { MusicKitPageComponent } from './pages/music-kit/music-kit.component';
import { MedalsPageComponent } from './pages/medals/medals.component';
import { KeysPageComponent } from './pages/keys/keys.component';
import { GraffitiPageComponent } from './pages/graffiti/graffiti.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'pistols',
    component: PistolsPageComponent,
  },
  {
    path: 'mid-tier',
    component: MidTierPageComponent,
  },
  {
    path: 'rifles',
    component: RiflesPageComponent,
  },
  {
    path: 'knives',
    component: KnivesPageComponent,
  },
  {
    path: 'gloves',
    component: GlovesPageComponent,
  },
  {
    path: 'agents',
    component: AgentsPageComponent,
  },
  {
    path: 'stickers',
    component: StickersPageComponent,
  },
  {
    path: 'cases',
    component: CasesPageComponent,
  },
  {
    path: 'collections',
    component: CollectionsPageComponent,
  },
  {
    path: 'patches',
    component: PatchesPageComponent,
  },
  {
    path: 'music-kit',
    component: MusicKitPageComponent,
  },
  {
    path: 'medals',
    component: MedalsPageComponent,
  },
  {
    path: 'keys',
    component: KeysPageComponent,
  },
  {
    path: 'graffiti',
    component: GraffitiPageComponent,
  },
  {
    path: ':cateogry/details/:id',
    component: DetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
