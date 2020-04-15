import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.sass"]
})
export class SearchbarComponent implements OnInit, AfterViewInit {
  @ViewChild("searchBar", { static: false }) searchBarField: ElementRef;

  @Output("triggerSearchBar")
  triggerSearchBar: EventEmitter<any> = new EventEmitter();

  @Input() isMobile: Boolean;
  @Input() showSearchBar: Boolean;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.isMobile) {
      this.searchBarField.nativeElement.focus();
    }
  }

  hideSearchBar(): void {
    if (this.isMobile) {
      console.log("Trigger searchBar");
      
      this.triggerSearchBar.emit();
    }
  }
}
