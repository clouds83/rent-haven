import { Component, OnInit } from "@angular/core";
import { PlacesService } from "../places.service";
import { Place } from "../place.model";
import { SegmentChangeEventDetail } from "@ionic/core";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onFilterUpdate(event: Event) {
    const customEvent = event as CustomEvent<SegmentChangeEventDetail>;
    console.log(customEvent.detail);
  }
}
