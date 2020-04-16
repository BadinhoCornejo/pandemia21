import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchbarContextService {
  private searchValueSource: any = new BehaviorSubject("");
  currentSearchValue = this.searchValueSource.asObservable();

  constructor() {}

  setSearchValue(searchValue: any) {
    this.searchValueSource.next(searchValue);
  }
}
