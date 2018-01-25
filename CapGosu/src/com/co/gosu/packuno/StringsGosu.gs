package com.co.gosu.packuno

/**
 * Created by daniel.mejia on 1/24/2018.
 */
class StringsGosu {

  function workString() {
    var s0 = "cocoliso"
    var s1:double = 1.02
    var s2:boolean = false
    var s3:double = 1.02
    var date = "01/25/2012 05:25:50".toDate()
    print ( "${s1*s3}               ${s2}  date ${date}   ${s0.elide(6)} //  ${s0.chomp("liso")}    ${s0.leftPad(3)}      ")  // prints "Hello World!"

    print("asdasd" + s0)

  }

}