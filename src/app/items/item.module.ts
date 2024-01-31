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
import { KnivesPageComponent } from './pages/knifes/knives.component';
import { MedalsPageComponent } from './pages/medals/medals.component';
import { MidTierPageComponent } from './pages/mid-tier/mid-tier.component';
import { MusicKitPageComponent } from './pages/music-kit/music-kit.component';
import { PatchesPageComponent } from './pages/patches/patches.component';
import { RiflesPageComponent } from './pages/rifles/rifles.component';
import { StickersPageComponent } from './pages/stickers/stickers.component';
import { HomePageComponent } from './pages/home/home.component';
import { ItemsRoutingModule } from './items-routing.module';
import { AllComponent } from './pages/all/all.component';

import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';

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
    KnivesPageComponent,
    MedalsPageComponent,
    MidTierPageComponent,
    MusicKitPageComponent,
    PatchesPageComponent,
    RiflesPageComponent,
    StickersPageComponent,
    HomePageComponent,
    AllComponent,
    FilterComponent,
  ],
  imports: [CommonModule, NgxPaginationModule, ItemsRoutingModule, FormsModule],
  exports: [MenuComponent],
})
export class ItemModule {}
