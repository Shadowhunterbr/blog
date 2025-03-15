import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { MenuBigCardComponent } from "../../components/menu-big-card/menu-big-card.component";
import { MenuSmallCardComponent } from "../../components/menu-small-card/menu-small-card.component";
import { MenuBar1Component } from "../../components/menu-bar1/menu-bar1.component";
import { MenuBar2Component } from "../../components/menu-bar2/menu-bar2.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, MenuBigCardComponent, MenuSmallCardComponent, MenuBar1Component, MenuBar2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
