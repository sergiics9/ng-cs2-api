import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() items: Item[] = [];
  @Output() itemsFiltered = new EventEmitter<Item[]>();
  selectedRarity: string = '';
  selectedPistol: string = '';

  filterItems(): void {
    const filteredItems = this.items.filter(
      (item) =>
        (this.selectedRarity
          ? item.rarity && item.rarity.name === this.selectedRarity
          : true) &&
        (this.selectedPistol
          ? item.weapon && item.weapon.name === this.selectedPistol
          : true)
    );
    this.itemsFiltered.emit(filteredItems);
  }
}
