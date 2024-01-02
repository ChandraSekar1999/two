import { Component, Input , OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnChanges{
  @Input('inputBindingproperty') title1= "CSK Code";



                                      // Step-1

  // ngOnChanges(changes: SimpleChanges): void {
  
  //     console.log('ngOnchanges called',changes['title1'].currentValue);
// }


  ngOnChanges(changes: SimpleChanges): void {
        if(!changes['title1'].isFirstChange()){

      
          console.log('ngOnchanges called',changes['title1'].currentValue);
          console.log('You are the modifying the orginal value');
        }


  }
}
