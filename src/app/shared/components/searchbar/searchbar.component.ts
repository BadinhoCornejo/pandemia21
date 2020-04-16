import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
} from "@angular/core";

import { SearchbarContextService } from "../../services/searchbar-context.service";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.sass"],
})
export class SearchbarComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild("searchBar", { static: false }) searchBarField: ElementRef;

  @Output("triggerSearchBar")
  triggerSearchBar: EventEmitter<any> = new EventEmitter();

  @Input() isMobile: Boolean;
  @Input() showSearchBar: Boolean;

  searchValue: string;

  constructor(private searchBarContex: SearchbarContextService) {}

  ngOnInit() {}

  ngDoCheck() {
    this.searchBarContex.setSearchValue(this.searchValue);
  }

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
