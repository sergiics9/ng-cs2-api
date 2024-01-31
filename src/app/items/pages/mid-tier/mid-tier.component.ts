import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-mid-tier',
  templateUrl: './mid-tier.component.html',
  styleUrl: '../styles.scss',
})
export class MidTierPageComponent implements OnInit {
  items: Item[] = [];
  midTierOnly: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;
  filteredItems: Item[] = [];
  midTierNameOptions: string[] = [];
  rarityOptions: string[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadMidTier();
  }

  loadMidTier(): void {
    this.itemsService.getSkins().subscribe(
      (data) => {
        this.items = Object.values(data);

        this.midTierOnly = this.items.filter(
          (item) => item.category && item.category.name === 'SMGs'
        );

        this.rarityOptions = [
          ...new Set(this.midTierOnly.map((item) => item.rarity!.name)),
        ];

        this.midTierNameOptions = [
          ...new Set(this.midTierOnly.map((item) => item.weapon!.name)),
        ];

        this.filteredItems = [...this.midTierOnly];
        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  }

  onItemsFiltered(items: Item[]): void {
    this.filteredItems = items;
  }
}
