import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-gloves',
  templateUrl: './gloves.component.html',
  styleUrl: '../styles.scss',
})
export class GlovesPageComponent implements OnInit {
  items: Item[] = [];
  glovesOnly: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;
  filteredItems: Item[] = [];
  glovesNameOptions: string[] = [];
  rarityOptions: string[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadRifles();
  }

  loadRifles(): void {
    this.itemsService.getSkins().subscribe(
      (data) => {
        this.items = Object.values(data);

        this.glovesOnly = this.items.filter(
          (item) => item.category && item.category.name === 'Gloves'
        );
        this.rarityOptions = [
          ...new Set(this.glovesOnly.map((item) => item.rarity!.name)),
        ];

        this.glovesNameOptions = [
          ...new Set(this.glovesOnly.map((item) => item.weapon!.name)),
        ];

        this.filteredItems = [...this.glovesOnly];

        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  }

  onItemsFiltered(items: Item[]): void {
    this.filteredItems = items;
  }
}
