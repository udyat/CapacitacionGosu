package com.co.gosu.packuno

/**
 * Created by daniel.mejia on 1/23/2018.
 */
class NulidadGosu {

  var listaVacia : List<String> = null

  function valNull(): List<String>{
    print("Metodo de validacion NULL")
    if(listaVacia?.get(0) == null) {
      print("la lista null sin excepción")
    }
 return listaVacia;

  }

  function setDef(){
    var myString = valNull() ?: "default"
    print("soy el def de null. " + myString)
  }


}