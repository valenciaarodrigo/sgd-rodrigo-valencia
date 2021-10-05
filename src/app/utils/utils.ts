import { Movies } from "../bean/movies";
import { ConstantsType } from "../constants/constants";

export class Utils {


  /**
   * Metodo para la evaluacion de que se quiere ordenar
   * @param list
   * @param asc
   * @param type
   * @returns
   */
   public static orderColum(list: Movies[], asc: boolean, type: string): Movies[] {
    if (type === ConstantsType.TYPE_TITLE) {
      if (this.checkDataInColumn(list, type)) {
        return this.orderColumByTitle(list, asc);
      } else {
        return list;
      }
    } else if (type === ConstantsType.TYPE_YEAR) {
      if (this.checkDataInColumn(list, type)) {
        return this.orderColumByYear(list, asc);
      } else {
        return list;
      }
    } else if (type === ConstantsType.TYPE_DIRECTOR) {
      if (this.checkDataInColumn(list, type)) {
        return this.orderColumByDirector(list, asc);
      } else {
        return list;
      }
    } else if (type === ConstantsType.TYPE_CAST) {
      if (this.checkDataInColumn(list, type)) {
        return this.orderColumByCast(list, asc);
      } else {
        return list;
      }
    } else if (type === ConstantsType.TYPE_GENRE) {
      if (this.checkDataInColumn(list, type)) {
        return this.orderColumByGenre(list, asc);
      } else {
        return list;
      }
    } else {
      if (this.checkDataInColumn(list, type)) {
        return this.orderColumByNotes(list, asc);
      } else {
        return list;
      }
    }
  }

  /**
   * Metodo para ordenar por titulo
   * @param list
   * @param asc
   * @returns
   */
  public static orderColumByTitle( list: Movies[], asc: boolean): Movies[] {
    // Ordenar ascendente
    if (!asc) {
      list.sort(function (a, b) {
        if (a.title < b.title)
            return -1;
        else if (a.title > b.title)
            return 1;
        else
            return 0;
      });
    } else {
      // Ordenar descendente
      list.sort(function (a, b) {
        if (a.title > b.title)
            return -1;
        else if (a.title < b.title)
            return 1;
        else
            return 0;
      });
    }

    return list;
  }

  /**
   * Metodo para ordenar por año
   * @param list
   * @param asc
   * @returns
   */
   public static orderColumByYear( list: Movies[], asc: boolean): Movies[] {
    // Ordenar ascendente
    if (!asc) {
      list.sort(function (a, b) {
        if (a.year < b.year)
            return -1;
        else if (a.year > b.year)
            return 1;
        else
            return 0;
      });
    } else {
      // Ordenar descendente
      list.sort(function (a, b) {
        if (a.year > b.year)
            return -1;
        else if (a.year < b.year)
            return 1;
        else
            return 0;
      });
    }

    return list;
  }

  /**
   * Metodo para ordenar por titulo
   * @param list
   * @param asc
   * @returns
   */
   public static orderColumByDirector( list: Movies[], asc: boolean): Movies[] {
    // Ordenar ascendente
    if (!asc) {
      list.sort(function (a, b) {
        if (a.director < b.director)
            return -1;
        else if (a.director > b.director)
            return 1;
        else if (a.director == null || a.director == null) {
            return -1 ;
        }
        else
            return 0;
      });
    } else {
      // Ordenar descendente
      list.sort(function (a, b) {
        if (a.director > b.director)
            return -1;
        else if (a.director < b.director)
            return 1;
        else if (a.director == null || a.director == null) {
            return -1 ;
        }
        else
            return 0;
      });
    }

    return list;
  }

  /**
   * Metodo para ordenar por reparto
   * @param list
   * @param asc
   * @returns
   */
   public static orderColumByCast( list: Movies[], asc: boolean): Movies[] {
    // Ordenar ascendente
    if (!asc) {
      list.sort(function (a, b) {
        if (a.cast < b.cast)
            return -1;
        else if (a.cast > b.cast)
            return 1;
        else if (a.cast == null || a.cast == null) {
            return -1 ;
        }
        else
            return 0;
      });
    } else {
      // Ordenar descendente
      list.sort(function (a, b) {
        if (a.cast > b.cast)
            return -1;
        else if (a.cast < b.cast)
            return 1;
        else if (a.cast == null || a.cast == null) {
            return -1 ;
        }
        else
            return 0;
      });
    }

    return list;
  }

  /**
   * Metodo para ordenar por genero
   * @param list
   * @param asc
   * @returns
   */
   public static orderColumByGenre( list: Movies[], asc: boolean): Movies[] {
    // Ordenar ascendente
    if (!asc) {
      list.sort(function (a, b) {
        if (a.genre < b.genre)
            return -1;
        else if (a.genre > b.genre)
            return 1;
        else if (a.genre == null || a.genre == null) {
          return -1 ;
        }
        else
            return 0;
      });
    } else {
      // Ordenar descendente
      list.sort(function (a, b) {
        if (a.genre > b.genre)
            return -1;
        else if (a.genre < b.genre)
            return 1;
        else if (a.genre == null || a.genre == null) {
            return -1 ;
        }
        else
            return 0;
      });
    }

    return list;
  }

  /**
   * Metodo para ordenar por notas
   * @param list
   * @param asc
   * @returns
   */
   public static orderColumByNotes( list: Movies[], asc: boolean): Movies[] {
    // Ordenar ascendente
    if (!asc) {
      list.sort(function (a, b) {
        if (a.notes < b.notes)
            return -1;
        else if (a.notes > b.notes)
            return 1;
        else if (a.notes == null || a.notes == null) {
            return -1 ;
        }
        else
            return 0;
      });
    } else {
      // Ordenar descendente
      list.sort(function (a, b) {
        if (a.notes > b.notes)
            return -1;
        else if (a.notes < b.notes)
            return 1;
        else if (a.notes == null || a.notes == null) {
            return -1 ;
        }
        else
            return 0;
      });
    }

    return list;
  }

  /**
   * Chequea si existen campos para ejecutar la ordenación
   * @param list
   * @param type
   * @returns
   */
  public static checkDataInColumn(list: Movies[], type: string): boolean {
    let result: boolean = false;
    if (type === ConstantsType.TYPE_TITLE) {
      list.forEach(data => {
        if (data.title != null) {
          result = true;
        }
      });
    } else if (type === ConstantsType.TYPE_YEAR) {
      list.forEach(data => {
        if (data.year != null) {
          result = true;
        }
      });
    } else if (type === ConstantsType.TYPE_DIRECTOR) {
      list.forEach(data => {
        if (data.director != null) {
          result = true;
        }
      });
    } else if (type === ConstantsType.TYPE_CAST) {
      list.forEach(data => {
        if (data.cast != null) {
          result = true;
        }
      });
    } else if (type === ConstantsType.TYPE_GENRE) {
      list.forEach(data => {
        if (data.genre != null) {
          result = true;
        }
      });
    } else {
      list.forEach(data => {
        if (data.notes != null) {
          result = true;
        }
      });
    }
    return result;
  }

}
