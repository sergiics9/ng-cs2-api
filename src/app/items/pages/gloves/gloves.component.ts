import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-gloves',
  templateUrl: './gloves.component.html',
  styles: `.loader{
    display: flex;
    justify-content: center;
    padding-top: 5rem
  }`,
})
export class GlovesPageComponent implements OnInit {
  items: Item[] = [];
  glovesOnly: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadGloves();
  }

  loadGloves(): void {
    this.itemsService.getSkins().subscribe(
      (data) => {
        this.items = Object.values(data);

        this.glovesOnly = this.items.filter(
          (item) => item.category && item.category.name === 'Gloves'
        );

        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  }
}
