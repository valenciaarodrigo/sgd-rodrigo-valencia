import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/bean/movies';
import { ConsultDataService } from 'src/app/services/consult-data.service';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  // Lista de datos obtenidos en el servicio (almacenamiento en memoria de toda la lista)
  public dataListAll: Movies[] = [];

  // Lista de datos con posibilidad de filtrados por el usuario
  public dataListFilter: Movies[] = [];

  // Lista de datos que se mostraran en la tabla
  public dataListShow: Movies[] = [];

  // Controlador de ultimo elemento mostrado para paginacion
  public controlLastPagination: number = 10;

  // Controlador del primer elemento mostrado para paginacion
  public controlFirtsPagination: number = 1;

  // Controlador de paginacion si se ha llegado a la ultima pagina disponible para mostrar
  public isLastPageShow: boolean = false;

  // Controlador de paginador, con el elemento final al no llegar a 10
  public lastPaginationNumber: number = 0;

  // Lista de literales en configuración
  public literals: any;

  public static PREVIOUS: String = "previous"

  public static NEXT: String = "next"

  constructor(
    private consultDataService : ConsultDataService
  ) { }

  ngOnInit(): void {
    // Utilizamos el servicio para traernos la informacion del json, donde contendra todas las peliculas
    this.consultDataService.getJSON().subscribe(data => {
      // Obtenemos todos los datos y los almacenamos en memoria
      this.dataListAll = data;
      // Obtenemos los datos a mostrar
      this.dataListFilter = data;
      // Obtenemos los primeros datos a mostrar
      this.dataListShow = this.dataListAll.slice(0, this.controlLastPagination);
    });

    // Utilizamos el servicio que nos devuelve los literales
    this.consultDataService.getLiteral().subscribe(data => {
      this.literals = data;
    });
  }

  /**
   * Controlador del paginador para mostrar mas o menos resultados
   * @param $event
   */
  showPage($event: string) {
    if ($event === ShowTableComponent.PREVIOUS) {
      // Si venimos de una paginación que era la ultima
      if (this.isLastPageShow) {
        this.controlFirtsPagination = this.controlFirtsPagination - 10;
        this.dataListShow = this.dataListFilter.slice(this.controlLastPagination - (10 + this.lastPaginationNumber), this.controlLastPagination - (this.lastPaginationNumber));
        this.controlLastPagination = this.controlLastPagination - this.lastPaginationNumber;
        this.isLastPageShow = false;
      } else {
        // Paginación normal hacia detras
        this.controlFirtsPagination = this.controlFirtsPagination - 10;
        this.dataListShow = this.dataListFilter.slice(this.controlLastPagination - 20, this.controlLastPagination - 10);
        this.controlLastPagination = this.controlLastPagination - 10;
      }
    } else {
      this.controlFirtsPagination = this.controlLastPagination + 1;
      // Controlamos el fin del paginado
      if ((this.controlLastPagination + 10) > this.dataListFilter.length) {
        this.lastPaginationNumber = this.dataListFilter.length - this.controlLastPagination;
        this.dataListShow = this.dataListFilter.slice(this.controlLastPagination, this.controlLastPagination + this.lastPaginationNumber);
        this.controlLastPagination = this.controlLastPagination + this.lastPaginationNumber;
        this.isLastPageShow = true;
      } else {
        this.dataListShow = this.dataListFilter.slice(this.controlLastPagination, this.controlLastPagination + 10);
        this.controlLastPagination = this.controlLastPagination + 10;
        this.isLastPageShow = false;
      }

    }
  }

  /**
   * Deshabilita o no los botones del paginador
   * @param $event
   * @returns
   */
  disabledPaginator($event: string): boolean {
    let result = true
    if ($event === ShowTableComponent.PREVIOUS) {
     if (this.controlLastPagination > 10) {
       result = false;
     }
    } else {
      if (!this.isLastPageShow) {
        result = false;
      }
    }
    return result;
  }

  /**
   * Aplica el filtro obtenido del componente filter-data a la tabla
   * @param $event
   */
  propagationFilter($event: any) {
    // Obtenemos la lista filtrada que nos ha enviado el componente filter-data
    this.dataListFilter = $event;
    // Comprobamos si obtiene resultados
    if (this.dataListFilter.length > 0) {
      if (this.dataListFilter.length < 10) {
        this.controlFirtsPagination = 1;
        this.controlLastPagination = this.dataListFilter.length;
        // Obtenemos los primeros datos a mostrar
        this.dataListShow = this.dataListFilter.slice(0, this.dataListFilter.length);
        this.isLastPageShow = true;
      } else {
        this.controlFirtsPagination = 1;
        this.controlLastPagination = 10;
        // Obtenemos los primeros datos a mostrar
        this.dataListShow = this.dataListFilter.slice(0, this.controlLastPagination);
        this.isLastPageShow = false;
      }
    } else {
      this.isLastPageShow = false;
      this.controlFirtsPagination = 0;
      this.controlLastPagination = 0;
      this.dataListShow = this.dataListFilter;
    }
  }

}

