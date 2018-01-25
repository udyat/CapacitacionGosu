package com.ceiba.gosu.packcontroller

uses com.co.gosu.packuno.CiclosGosu
uses com.co.gosu.packuno.InstanciasGosu
uses com.co.gosu.packuno.OperadoresGosu
uses com.co.gosu.packuno.PropiedadesGosu
uses com.co.gosu.packuno.NulidadGosu
uses com.co.gosu.packuno.BloquesGosu
uses com.co.gosu.packuno.StringsGosu
uses com.co.gosu.packuno.CollectionsGosu

/**
 * Created by daniel.mejia on 1/22/2018.
 */
class ExampleController {

  static function main (args : String[]) {

    var instanciasGosu = new InstanciasGosu();
    var operadoresGosu = new OperadoresGosu();
    var ciclosGosu = new CiclosGosu({"joe", "john", "jack"});
    var propiedadesGosu = new PropiedadesGosu()
    var nulidadGosu = new NulidadGosu()
    var bloquesGosu = new BloquesGosu()
    var stringsGosu = new StringsGosu()
    var collectionsGosu = new CollectionsGosu()

    instanciasGosu.instanciasVariables();
    print("---------------------------------------")
    var suma = operadoresGosu.suma(3,2)
    print("suma: " + suma)
    var resta = operadoresGosu.resta(3, 2)
    print("resta: " + resta)
    print("---------------------------------------")
    ciclosGosu.printNames("Hola: ")
    ciclosGosu.recListas()
    print("FINAL: " + ciclosGosu.Names)
    print("---------------------------------------")
    print("getPropiedad: " + propiedadesGosu.Bar)

    propiedadesGosu.Bar = "WAFFLES"

    print("SetPropiedad: " + propiedadesGosu.Bar)

    //propiedadesGosu.Bar2 = "WAFFLES"  ERROR

    print("getPropiedad solo escritura: " + propiedadesGosu.Bar2)

    print("---------------------------------------")

    nulidadGosu.valNull()
    nulidadGosu.setDef()

    print("---------------------------------------")
    bloquesGosu.bloqueInicial()
    bloquesGosu.bloqueMayus()
    bloquesGosu.bloqueMayus1()
    bloquesGosu.bloqueMayus2()
    bloquesGosu.bloqueMayus3()


    print("---------------------------------------")
    "I'm not sure I can go back to Java".printWarning()

    print("---------------------------------------")

    stringsGosu.workString()

    print("---------------------------------------")
    collectionsGosu.coleccion()
  }

}