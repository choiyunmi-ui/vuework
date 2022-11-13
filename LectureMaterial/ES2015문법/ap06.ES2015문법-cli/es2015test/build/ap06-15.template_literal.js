"use strict";

/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.
    1. 다중 문자열 생성시 사용.
*/

var name = '홍길동';
var age = 20;
var str = "abv ".concat(name, "\ndef\nkfa\nkfkf");
var product = {
  name: '도서',
  price: '4200원'
};
var message = " \uC81C\uD488 ".concat(product.name, " \uC758 \uAC00\uACA9\uC740 ").concat(product.price, " \uC785\uB2C8\uB2E4");
console.log(str);
console.log(message);