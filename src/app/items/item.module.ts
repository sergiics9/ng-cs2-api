import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuComponent } from './components/menu/menu.component';
import { PistolsPageComponent } from './pages/pistols/pistols.component';
import { AgentsPageComponent } from './pages/agents/agents.component';
import { CasesPageComponent } from './pages/cases/cases.component';
import { CollectionsPageComponent } from './pages/collections/collections.component';
import { GlovesPageComponent } from './pages/gloves/gloves.component';
import { GraffitiPageComponent } from './pages/graffiti/graffiti.component';
import { KeysPageComponent } from './pages/keys/keys.component';
import { KnifesPageComponent } from './pages/knifes/knifes.component';
import { MedalsPageComponent } from './pages/medals/medals.component';
import { MidTierPageComponent } from './pages/mid-tier/mid-tier.component';
import { MusicKitPageComponent } from './pages/music-kit/music-kit.component';
import { PatchesPageComponent } from './pages/patches/patches.component';
import { RiflesPageComponent } from './pages/rifles/rifles.component';
import { StickersPageComponent } from './pages/stickers/stickers.component';
import { HomePageComponent } from './pages/home/home.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [
    MenuComponent,
    PistolsPageComponent,
    AgentsPageComponent,
    CasesPageComponent,
    CollectionsPageComponent,
    GlovesPageComponent,
    GraffitiPageComponent,
    KeysPageComponent,
    KnifesPageComponent,
    MedalsPageComponent,
    MidTierPageComponent,
    MusicKitPageComponent,
    PatchesPageComponent,
    RiflesPageComponent,
    StickersPageComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, NgxPaginationModule, ItemsRoutingModule],
  exports: [MenuComponent],
})
export class ItemModule {}
