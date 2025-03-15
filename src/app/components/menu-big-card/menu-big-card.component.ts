import { Component, Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-big-card.component.html',
  styleUrl: './menu-big-card.component.css'
})
export class MenuBigCardComponent {
    @Input()
    photoCover:string = ""
    @Input()    
    cardSubTitle:string = ""
    @Input()    
    cardTitle:string = ""
    @Input()
    cardDescription:string = ""
    @Input()
    id:string="0"


    constructor(){}
    ngOnInit(): void {

    }
}
