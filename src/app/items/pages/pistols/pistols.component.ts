import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-pistols',
  templateUrl: './pistols.component.html',
  styleUrl: '../styles.scss',
})
export class PistolsPageComponent implements OnInit {
  items: Item[] = [];
  pistolsOnly: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;
  imagesLoaded: number = 0;
  filteredItems: Item[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadPistols();
  }

  loadPistols(): void {
    this.itemsService.getSkins().subscribe(
      (data) => {
        this.items = Object.values(data);

        this.pistolsOnly = this.items.filter(
          (item) => item.category && item.category.name === 'Pistols'
        );

        this.filteredItems = [...this.pistolsOnly];

        this.imagesLoaded = 0;

        this.pistolsOnly.forEach((item) => {
          if (item.image) {
            const image = new Image();
            image.src = item.image;
            image.onload = () => {
              this.imagesLoaded++;
              if (this.imagesLoaded === this.pistolsOnly.length) {
                this.isLoading = false;
              }
            };
          }
        });
      },
      (error) => console.error(error)
    );
  }

  onItemsFiltered(items: Item[]): void {
    this.filteredItems = items;
  }
}
