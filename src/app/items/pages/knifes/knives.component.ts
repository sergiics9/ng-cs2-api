import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-knives',
  templateUrl: './knives.component.html',
  styleUrl: '../styles.scss',
})
export class KnivesPageComponent implements OnInit {
  items: Item[] = [];
  knivesOnly: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;
  filteredItems: Item[] = [];
  knivesNameOptions: string[] = [];
  rarityOptions: string[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadRifles();
  }

  loadRifles(): void {
    this.itemsService.getSkins().subscribe(
      (data) => {
        this.items = Object.values(data);

        this.knivesOnly = this.items.filter(
          (item) => item.category && item.category.name === 'Knives'
        );
        this.rarityOptions = [
          ...new Set(this.knivesOnly.map((item) => item.rarity!.name)),
        ];

        this.knivesNameOptions = [
          ...new Set(this.knivesOnly.map((item) => item.weapon!.name)),
        ];

        this.filteredItems = [...this.knivesOnly];

        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  }

  onItemsFiltered(items: Item[]): void {
    this.filteredItems = items;
  }
}
