package com.co.gosu.packuno

/**
 * Created by daniel.mejia on 1/24/2018.
 */
class CollectionsGosu {

  function coleccion(){
    var map = { "isOverlyVerbose" -> false,"hola" -> 7 }
    var map2 = { "negro" -> "28","hola" -> 7 }
    var list = { map }
    list.add(map2)
    print(list.get(1).get("negro"))
  }

}