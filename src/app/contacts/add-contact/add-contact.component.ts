import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnDestroy(): void {
    
  }
  ngAfterViewInit(): void {
    
  }

}
