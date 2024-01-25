import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from '../../interfaces/menu.option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() options: MenuOption[] = [];
}
