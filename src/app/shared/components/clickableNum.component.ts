import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'clickable-num',
  templateUrl: './clickableNum.component.html'
})
export class ClickableNumComponent {
  constructor (    
  ) {}

  @Input() quantity: number;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  
   increment()
    {
        this.quantity++;
        this.change.emit(this.quantity);
    }  

    decrement(){
        this.quantity--;
        this.change.emit(this.quantity);
    } 
}
