import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-small-card.component.html',
  styleUrl: './menu-small-card.component.css'
})
export class MenuSmallCardComponent {
  @Input()
  photoCover:string = "" 
  @Input()
  cardSubTitle:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  id:string = "0"

  constructor(){}
  ngOnInit(): void {

  }

}
