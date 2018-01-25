package com.co.gosu.packuno

/**
 * Created by daniel.mejia on 1/23/2018.
 */
class CiclosGosu {

  var _names : List<String> // Una variable de clase privada

  // Un constructor publcio
  construct( names : List<String> ) {
    _names = names
  }

  // Una funcion publica
  function printNames( prefix : String ) {
    for( n in _names ) {
      print( prefix + n )
    }
  }

  function recListas() {

    var list = { "uno", "dos", "tres" } // Crear una java.lang.List<String>
    print("Ciclo recorrer lista: ")
    for ( num in list ) {
      print("Numero:" +  num )
    }
    print("Ciclo recorrer index: ")
    for ( num in list index index ) {
      print("Index:" + index)
    }
    print("Ciclo recorrer rango cerrado: ")
    for ( i in 0..5 ) {   // Rango desde 0 hasta 5
      print ( i ) // imprime 0-5
    }
    print("Ciclo recorrer rango inicial cerrado : ")
    // Rango desde 0 hasta antes del 5
    for ( i in 0..|5 ) {
      print ( i ) // Imprime 0-4
    }
    print("Ciclo recorrer rango abierto: ")
    // Rango despues de 0 y antes del 5
    for ( i in 0|..|5 ) {
      print ( i ) // imprime 1-4
    }
  }

  // Propiedades de getter publicos, creando 'nombres' con propiedad sololectura
  property get Names() : List<String> {
    return _names
  }


}