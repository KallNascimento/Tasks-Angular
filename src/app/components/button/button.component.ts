import { Component, OnInit, Input } from '@angular/core';
import {faPlusCircle, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text?:string;
  @Input() color?: string;
  faPlusCircle = faPlusCircle;
  
  constructor() { }

  ngOnInit(): void {
  }

}
