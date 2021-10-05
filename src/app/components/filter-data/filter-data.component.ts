import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/bean/movies';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {

  // Literales obtenidos del componente show-table
  @Input() literals: any;

  // Lista de todas las peliculas obtenidoas del componente show-table
  @Input() dataListAll: Movies[] = [];

  // Evento que dvolvera al componente padre la lista de peliculas fitlrada o reseteada
  @Output() propagationFilter = new EventEmitter<Movies[]>();

  // Texto a filtar del input introducido por el usuario
  textFilter: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Resetea los posibles filtros aplicados
   */
  resetFilter() {
    // Resetea el texto del filtro que puede introducir el usuario, y envia toda la lista sin filtro aplicado
    this.textFilter = "";
    this.propagationFilter.emit(this.dataListAll);
  }

  /**
   * Aplica el filtro deseado por el usuario
   */
  applyFilter() {
    // Aplica el filtrado del texto introducido por el usuario y envia el filtrado al componente tabla
    const filtered: Movies[] = this.dataListAll.filter(movie => movie.title.includes(this.textFilter));

    this.propagationFilter.emit(filtered);
  }
}
