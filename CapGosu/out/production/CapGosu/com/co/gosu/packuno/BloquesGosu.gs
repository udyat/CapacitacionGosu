package com.co.gosu.packuno

/**
 * Created by daniel.mejia on 1/24/2018.
 */
class BloquesGosu {

  function bloqueInicial(){

    var lstOfStrings = {"This", "is", "a", "list"}
    var longStrings = lstOfStrings.where( \ s -> s.length > 2 );
    print(longStrings.join(","))  // prints "This, list"

  }

  function bloqueMayus(){
    var lstOfStrings = {"This", "is", "a", "list"}
    var longStrings = lstOfStrings.where( \ s -> s.length > 2 ).map(\s -> s.toUpperCase()).orderBy(\s -> s)  // String a mayúscula                                       .orderBy( \ s -> s )            // Método de ordenamiento
    print("where: " + longStrings.join(",") ) // prints "LIST, THIS"
  }

  function bloqueMayus1(){
    var lstOfStrings = {"This", "is", "a", "list"}
    var longStrings = lstOfStrings.firstWhere(\s -> s.length > 2 ).toUpperCase()  // String a mayúscula                                       .orderBy( \ s -> s )            // Método de ordenamiento
    print("firstWhere: " + longStrings ) // prints "LIST"
  }

  function bloqueMayus2(){
    var lstOfStrings = {"This", "is", "a", "list"}
    var longStrings = lstOfStrings.where(\s -> s.length > 2).map(\s -> s.toUpperCase()).orderBy(\s -> s)  // String a mayúscula                                       .orderBy( \ s -> s )            // Método de ordenamiento
    print("first: " +  longStrings.first() ) // prints "THIS"
  }
  function bloqueMayus3(){
    var lstOfStrings = {"This", "is", "a", "list"}
    var longStrings = lstOfStrings.hasMatch( \ s -> s.length > 2 )  // String a mayúscula                                       .orderBy( \ s -> s )            // Método de ordenamiento
    print("has: " +  longStrings) // prints "LIST, THIS"
  }
}