import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-mid-tier',
  templateUrl: './mid-tier.component.html',
  styles: ``,
})
export class MidTierPageComponent implements OnInit {
  items: Item[] = [];
  midTierOnly: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;

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

        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  }
}
