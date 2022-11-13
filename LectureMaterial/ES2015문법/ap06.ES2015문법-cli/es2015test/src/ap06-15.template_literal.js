/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.
    1. 다중 문자열 생성시 사용.
*/

const name = '홍길동';
const age = 20;

const str = `abv ${name}
def
kfa
kfkf`;

const product = { name: '도서', price: '4200원' };
const message = ` 제품 ${product.name} 의 가격은 ${product.price} 입니다`;

console.log(str);
console.log(message);
