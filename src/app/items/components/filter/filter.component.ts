import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() items: Item[] = [];
  @Input() rarityOptions: string[] = [];
  @Input() teamOptions: string[] = [];
  @Input() pistolOptions: string[] = [];
  @Output() itemsFiltered = new EventEmitter<Item[]>();
  selectedRarity: string = '';
  selectedTeam: string = '';
  selectedPistol: string = '';
  noContent: boolean = false;

  filterItems(): void {
    const filteredItems = this.items.filter(
      (item) =>
        (this.selectedRarity
          ? item.rarity && item.rarity.name === this.selectedRarity
          : true) &&
        (this.selectedTeam
          ? item.team && item.team.name === this.selectedTeam
          : true) &&
        (this.selectedPistol
          ? item.weapon && item.weapon.name === this.selectedPistol
          : true)
    );

    this.noContent = filteredItems.length === 0;
    this.itemsFiltered.emit(filteredItems);
  }
}
