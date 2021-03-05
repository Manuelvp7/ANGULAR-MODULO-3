import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string = '';
  constructor(
      private _heroesService:HeroesService,
      private _activatedRoute:ActivatedRoute,
      private router:Router
    ) {

      this._activatedRoute.params.subscribe( params=>{
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes(params['termino']);

        this.heroes.forEach(function(value){
          console.log(value);
        });



        console.log(this.heroes);
      })

   }

  ngOnInit(): void {

  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
