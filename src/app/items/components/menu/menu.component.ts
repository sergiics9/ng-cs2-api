import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from '../../interfaces/menu.option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  options: MenuOption[] = [
    { label: 'Pistols', path: '/items/pistols' },
    { label: 'Mid-Tier', path: '/items/mid-tier' },
    { label: 'Rifles', path: '/items/rifles' },
    { label: 'Knives', path: '/items/knives' },
    { label: 'Gloves', path: '/items/gloves' },
    { label: 'Agents', path: '/items/agents' },
    { label: 'Stickers', path: '/items/stickers' },
    { label: 'Cases', path: '/items/cases' },
    { label: 'Collections', path: '/items/collections' },
    { label: 'Patches', path: '/items/patches' },
    { label: 'Music Kits', path: '/items/music-kit' },
    { label: 'Medals', path: '/items/medals' },
    { label: 'Keys', path: '/items/keys' },
    { label: 'Graffitis', path: '/items/graffiti' },
  ];
}
