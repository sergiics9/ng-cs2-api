import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item?: Item;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    console.log(this.item);
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.itemsService.getSkins().subscribe((items) => {
        this.item = items.find((item) => item.id === id);
      });
    }
  }
}
