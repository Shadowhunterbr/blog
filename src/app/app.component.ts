import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar1Component } from './components/menu-bar1/menu-bar1.component';
import { MenuBar2Component } from './components/menu-bar2/menu-bar2.component';
import { MenuBigCardComponent } from './components/menu-big-card/menu-big-card.component';
import { MenuSmallCardComponent } from './components/menu-small-card/menu-small-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBar1Component, MenuBar2Component, MenuBigCardComponent, MenuSmallCardComponent, MenuTitleComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
