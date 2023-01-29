import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Favelinha Doida",
      "Humilde mas da hora",
      "https://imagens.brasil.elpais.com/resizer/aHNMwo6qZ3IWdci83ZIy5kVxR2E=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IQECV2K6IGKSCJOIZ6WVB45G3E.jpg",
      9.9
    ),
    new Place(
      "p2",
      "Pico dos Boy",
      "Para os ricos",
      "https://uploads.metropoles.com/wp-content/uploads/2022/03/10113427/1-Casa-mais-cara-do-mundo_1.jpg",
      899.9
    ),
    new Place(
      "p3",
      "Pindão Doidão",
      "Só pra quem pode",
      "https://marianaviaja.com/wp-content/uploads/2021/12/o-que-fazer-em-pindamonhangaba-sp.jpeg",
      1899.9
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: any) {
    return { ...this._places.find((p) => p.id === id) };
  }
}
