import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {

  heroes$!: Observable<any>;
  bandos$!: Promise<any>;

  DELAY = 3;
  pendingPromise = true;

  URL: string = "https://akabab.github.io/superhero-api/api/all.json";

  constructor(private http: HttpClient) { }
  
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(genero?: string) {
    console.log('REQUEST >> ');
    this.bandos$ = new Promise(() => {});
    this.heroes$ = this.http.get<any>(this.URL)
      .pipe(
        map(x => 
            x.filter((a: Heroe) => !genero || a.appearance.gender == genero)),
        tap(_ => console.log('<< RESPONSE')),
        tap( heroes => this.promiseBandos(heroes))
      );
  }

  promiseBandos(heroes: Heroe[]) {
    this.pendingPromise = true;
    setTimeout( () => {
    this.bandos$ = new Promise<Bando[]>((res, _) => {
      var bandosList : Bando[] = [];
      var bandos = new Set(heroes.map(h => h.biography.alignment));
      bandos.forEach(bando => {
        bandosList.push({
          nombre: bando,
          cantidad: heroes.filter(h => h.biography.alignment == bando).length
        });
      });
      res(bandosList);
      this.pendingPromise = false;
    });
  }, this.DELAY * 1000);
  }
}



/* *********************************************************************************************** */
/* *********************************************************************************************** */
/* *********************************************************************************************** */

export class Bando {
  nombre!: string;
  cantidad!: number;
}

export class Heroe {
  appearance!: {
    gender: string;
  };
  work!: {
    occupation: string;
  };
  biography!: {
    alignment: string
  };
  images!: {
    xs: string
  }
}
