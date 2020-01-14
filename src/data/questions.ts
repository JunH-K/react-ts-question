const questions: { [level: string]: any } = {
    intermediate: [{
        name: 'Test1',
        data: [{
            question: 'result 의 값은?',
            code: `let result = 2009;
const func = (x = 262) => {
  result = x;
};
func( null );`,
            example: [
                {title: 'null', key: 0, correct: 'correct'},
                {title: '262', key: 1, correct: ''},
                {title: '2009', key: 2, correct: ''},
            ],
            correct: 0
        },
            {
                question: 'result 의 값은?',
                code: `const result = 0 || 1 && 2 || 3;`,
                example: [
                    {title: '3', key: 1, correct: ''},
                    {title: 'true', key: 2, correct: ''},
                    {title: '0', key: 3, correct: ''},
                    {title: '1', key: 4, correct: ''},
                    {title: '2', key: 0, correct: 'correct'},
                ],
                correct: 0
            },
            {
                question: 'result 의 값은?',
                code: `const plus = +0;
const minus = -0;
const result = plus === minus;`,
                example: [
                    {title: 'false', key: 1, correct: ''},
                    {title: 'true', key: 0, correct: 'correct'},
                    {title: 'throw a SyntaxError', key: 2, correct: ''},
                ],
                correct: 0
            },
            {
                question: 'result 의 값은?',
                code: `const result = "1" == 1;`,
                example: [
                    {title: 'true', key: 0, correct: 'correct'},
                    {title: 'false', key: 1, correct: ''},
                ],
                correct: 0
            },
            {
                question: 'result 의 값은?',
                code: `const value = new Set( [ 1, 1, 2, 3, 2, 3 ] );
const result = [ ...value ];`,
                example: [
                    {title: '[1]', key: 0, correct: ''},
                    {title: '112323', key: 1, correct: ''},
                    {title: '[1,1,2,3,2,3]', key: 2, correct: ''},
                    {title: '[1,2,3]', key: 3, correct: 'correct'},
                    {title: '[1,2,3,1,2,3]', key: 4, correct: ''}
                ],
                correct: 3
            },
            {
                question: 'result 의 값은?',
                code: `const getA = () => 1;
const getB = () => 2;
const getC = () => 3;
const result = ( getA(), getB(), getC() );`,
                example: [
                    {title: '3', key: 0, correct: 'correct'},
                    {title: '1', key: 1, correct: ''},
                    {title: 'undefined', key: 2, correct: ''},
                    {title: '6', key: 3, correct: ''},
                    {title: '2', key: 4, correct: ''}
                ],
                correct: 0
            },
            {
                question: 'result 의 값은?',
                code: `const array = [ 10, 15, 20, 25, 30 ];
const result = array.find( v => v > 15 );`,
                example: [
                    {title: '20', key: 0, correct: 'correct'},
                    {title: '2', key: 1, correct: ''},
                    {title: '15', key: 2, correct: ''},
                    {title: '3', key: 3, correct: ''},
                    {title: '1', key: 4, correct: ''}
                ],
                correct: 0
            },
            {
                question: 'result 의 값은?',
                code: `class User {
  getName() {}
}

const result = typeof User;`,
                example: [
                    {title: 'string', key: 1, correct: ''},
                    {title: 'object', key: 2, correct: ''},
                    {title: 'class', key: 3, correct: ''},
                    {title: 'prototype', key: 4, correct: ''},
                    {title: 'function', key: 0, correct: 'correct'},
                ],
                correct: 0
            }]
    },
        {
            name: 'Test2',
            data: [{
                question: 'result 의 값은?',
                code: `const map = v => v * v;
const array = Array.from( [ 1, 2, 3 ], map );`,
                example: [
                    {title: '1,4,9', key: 1, correct: ''},
                    {title: '149', key: 0, correct: 'correct'},
                    {title: '14', key: 2, correct: ''},
                    {title: '1,2,3', key: 3, correct: ''},
                    {title: '123', key: 4, correct: ''}
                ],
                correct: 0
            },
                {
                    question: 'result 의 값은?',
                    code: `const array = [ 1, 2, 3 ];
const result = 3 in Array;`,
                    example: [
                        {title: 'false', key: 0, correct: 'correct'},
                        {title: 'true', key: 1, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const func = function (x, y = 4) {
  return x + y;
};

const result = func( 2 );`,
                    example: [
                        {title: '8', key: 1, correct: ''},
                        {title: '2', key: 2, correct: ''},
                        {title: 'NaN', key: 3, correct: ''},
                        {title: 'undefined', key: 4, correct: ''},
                        {title: '6', key: 0, correct: 'correct'},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const numbers = [ 2009, 95, 262 ];
const [ first, ...rest ] = numbers;
const result = rest[ 1 ];`,
                    example: [
                        {title: '95', key: 1, correct: ''},
                        {title: '262', key: 0, correct: 'correct'},
                        {title: 'throw a SyntaxError', key: 2, correct: ''},
                        {title: 'undefined', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const o = {
  name: 'ECMAScript',
  version: 2016,
};

const result = Object.values( o ).join( '' );`,
                    example: [
                        {title: 'nameVersion', key: 1, correct: ''},
                        {title: 'null', key: 2, correct: ''},
                        {title: 'ECMAScript2016', key: 0, correct: 'correct'},
                        {title: '[]', key: 3, correct: ''},
                        {title: 'undefined', key: 4, correct: ''}
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const result = Number.parseInt( '1995 year' + 1 );`,
                    example: [
                        {title: '1996', key: 1, correct: ''},
                        {title: 'null', key: 2, correct: ''},
                        {title: 'undefined', key: 3, correct: ''},
                        {title: '1995', key: 0, correct: 'correct'},
                        {title: 'NaN', key: 4, correct: ''}
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `let name = 1;
( { name } = { name: 3 } );
const result = name;`,
                    example: [
                        {title: '1', key: 1, correct: ''},
                        {title: '3', key: 0, correct: 'correct'},
                        {title: 'undefined', key: 2, correct: ''},
                        {title: 'NaN', key: 3, correct: ''},
                        {title: 'throw a SyntaxError', key: 4, correct: ''}
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const array = [ 1, 2, 3 ];
let result = 1;

for ( const value of array ) {
  result *= value;
}`,
                    example: [
                        {title: '36', key: 1, correct: ''},
                        {title: 'throw a SyntaxError', key: 2, correct: ''},
                        {title: '36', key: 3, correct: ''},
                        {title: '0', key: 4, correct: ''},
                        {title: '6', key: 0, correct: 'correct'},
                    ],
                    correct: 0
                }]
        },
        {
            name: 'Test3',
            data: [{
                question: 'result 의 값은?',
                code: `const result = Object.is(NaN,NaN);`,
                example: [
                    {title: 'false', key: 1, correct: ''},
                    {title: 'true', key: 0, correct: 'correct'},
                    {title: 'undefined', key: 2, correct: ''},
                    {title: 'throw a SyntaxError', key: 3, correct: ''},
                ],
                correct: 0
            },
                {
                    question: 'result 의 값은?',
                    code: `let result = 2009;
let value = 262;
const obj = {
  value:95
};
with(obj) {
result = value;
}
`,
                    example: [
                        {title: '95', key: 0, correct: 'correct'},
                        {title: '262', key: 1, correct: ''},
                        {title: '2009', key: 2, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `var value = 2009;
delete value;
const result = value;`,
                    example: [
                        {title: '2009', key: 0, correct: 'correct'},
                        {title: 'null', key: 1, correct: ''},
                        {title: 'undefined', key: 2, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const result = null && undefined;`,
                    example: [
                        {title: 'undefined', key: 1, correct: ''},
                        {title: 'true', key: 2, correct: ''},
                        {title: 'null', key: 0, correct: 'correct'},
                        {title: 'false', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const s = new Set([1,1,2,3,4,4,5,5]);
const result = s.size;`,
                    example: [
                        {title: '7', key: 1, correct: ''},
                        {title: '8', key: 2, correct: ''},
                        {title: '4', key: 3, correct: ''},
                        {title: '5', key: 0, correct: 'correct'},
                        {title: 'undefined', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const result = Number.MIN_VALUE > 0;`,
                    example: [
                        {title: 'true', key: 0, correct: 'correct'},
                        {title: 'false', key: 1, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const result = 'good' > 'bad';`,
                    example: [
                        {title: 'true', key: 0, correct: 'correct'},
                        {title: 'throw a SyntaxError', key: 1, correct: ''},
                        {title: 'false', key: 2, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const array = [ 1, 2, 3 ];
const map = (v, i) => v * i;`,
                    example: [
                        {title: '[NaN,NaN,NaN]', key: 1, correct: ''},
                        {title: '[1, 4, 9]', key: 2, correct: ''},
                        {title: '[1, 2, 3]', key: 3, correct: ''},
                        {title: '[0, 2, 6]', key: 0, correct: 'correct'},
                    ],
                    correct: 0
                }]
        },
        {
            name: 'Test4',
            data: [{
                question: 'result 의 값은?',
                code: `const result = Number( "" ) + 1;`,
                example: [
                    {title: '1', key: 0, correct: 'correct'},
                    {title: '0', key: 1, correct: ''},
                    {title: 'NaN', key: 2, correct: ''},
                    {title: 'undefined', key: 3, correct: ''},
                ],
                correct: 0
            },
                {
                    question: 'result 의 값은?',
                    code: `const numbers = [ 2009 ];
const [ first, second = 95 ] = numbers;

const result = second;`,
                    example: [
                        {title: '2009', key: 1, correct: ''},
                        {title: '95', key: 0, correct: 'correct'},
                        {title: 'undefined', key: 2, correct: ''},
                        {title: 'throw a SyntaxError', key: 3, correct: ''},
                        {title: 'null', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const value = 2009;
const result = isFinite( value );`,
                    example: [
                        {title: 'true', key: 0, correct: 'correct'},
                        {title: 'false', key: 1, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const func = new Function( 'a', 'b', 'return a+b;' );
const result = func( 1, 2 );`,
                    example: [
                        {title: '3', key: 0, correct: 'correct'},
                        {title: 'undefined', key: 1, correct: ''},
                        {title: 'null', key: 2, correct: ''},
                        {title: 'throw a SyntaxError', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const func = (obj) => {
  obj = null;
};
const obj = {
  name: 'Brendan'
};
func( obj );

const result = obj.name;`,
                    example: [
                        {title: 'throw a ReferenceError', key: 1, correct: ''},
                        {title: 'null', key: 2, correct: ''},
                        {title: 'Brendan', key: 0, correct: 'correct'},
                        {title: 'undefined', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const firstArray = [ 1, 2, 3 ];
const secondArray = [ 1, 2, 3 ];`,
                    example: [
                        {title: 'false', key: 0, correct: 'correct'},
                        {title: 'true', key: 1, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const array = [ 1, 3, 5, 3, 10 ];
const result = array.lastIndexOf( 3 );`,
                    example: [
                        {title: '1', key: 1, correct: ''},
                        {title: '0', key: 2, correct: ''},
                        {title: '-1', key: 3, correct: ''},
                        {title: '2', key: 4, correct: ''},
                        {title: '3', key: 0, correct: 'correct'},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `function func() {
  return;
}

const result = func();`,
                    example: [
                        {title: 'undefined', key: 0, correct: 'correct'},
                        {title: 'throw a ReferenceError', key: 1, correct: ''},
                        {title: 'null', key: 2, correct: ''},
                    ],
                    correct: 0
                }]
        },
        {
            name: 'Test5',
            data: [{
                question: 'result 의 값은?',
                code: `const value = 23.45;
const result = value.toFixed( 1 );`,
                example: [
                    {title: '23.45', key: 1, correct: ''},
                    {title: '23.4', key: 0, correct: 'correct'},
                    {title: '23.5', key: 2, correct: ''},
                    {title: '23', key: 3, correct: ''},
                    {title: '24', key: 4, correct: ''},
                ],
                correct: 0
            },
                {
                    question: 'result 의 값은?',
                    code: `Array.prototype 에 존재하지 않는 메소드는?`,
                    example: [
                        {title: 'call', key: 0, correct: 'correct'},
                        {title: 'slice', key: 1, correct: ''},
                        {title: 'map', key: 2, correct: ''},
                        {title: 'forEach', key: 3, correct: ''},
                        {title: 'reduce', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const array = [ 1, 2, 3 ];
let result = 0;
for ( const value in array ) {
  result += +value;
}`,
                    example: [
                        {title: '3', key: 0, correct: 'correct'},
                        {title: '6', key: 1, correct: ''},
                        {title: '0012', key: 2, correct: ''},
                        {title: '5', key: 3, correct: ''},
                        {title: '0123', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `let first = 262;
let second = 2009;

[ first, second ] = [ second, first ];

const result =;`,
                    example: [
                        {title: '262', key: 1, correct: ''},
                        {title: 'null', key: 2, correct: ''},
                        {title: 'undefined', key: 3, correct: ''},
                        {title: '2009', key: 0, correct: 'correct'},
                        {title: 'throw a TypeError', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const array = [ 1, 2, 3 ];
const arrayNext = array;
arrayNext.length = 0;

const result = array[ 0 ];`,
                    example: [
                        {title: 'undefined', key: 0, correct: 'correct'},
                        {title: '1', key: 1, correct: ''},
                        {title: 'null', key: 2, correct: ''},
                        {title: '1,2,3', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const name = 'Brendan';
const obj = {
  [ name ]: name
};

const result = obj[ 'name' ];`,
                    example: [
                        {title: 'undefined', key: 0, correct: 'correct'},
                        {title: 'throw a SyntaxError', key: 1, correct: ''},
                        {title: 'name', key: 2, correct: ''},
                        {title: 'Brendan', key: 3, correct: ''},
                        {title: 'null', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const name = 'Javascript';
const func = function () {
  return this.name;
};
const obj = {
  name: 'ECMAScript',
  func: func
};

const result = obj.func();`,
                    example: [
                        {title: 'Javascript', key: 1, correct: ''},
                        {title: 'null', key: 2, correct: ''},
                        {title: 'undefined', key: 3, correct: ''},
                        {title: 'ECMAScript', key: 0, correct: 'correct'},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `let result = 2009;
try {
  result = 262;
} finally {
  result = 95;
}`,
                    example: [
                        {title: '95', key: 0, correct: 'correct'},
                        {title: '262', key: 1, correct: ''},
                        {title: '2009', key: 2, correct: ''},
                    ],
                    correct: 0
                }]
        },
        {
            name: 'Test6',
            data: [{
                question: 'result 의 값은?',
                code: `const SimpleNumber = function (value) {
  return value;
};
const number = new SimpleNumber( 2009 );
const result = number === 2009;`,
                example: [
                    {title: 'false', key: 0, correct: 'correct'},
                    {title: 'true', key: 1, correct: ''},
                ],
                correct: 0
            },
                {
                    question: 'result 의 값은?',
                    code: `const a = isFinite( null );
const b = Number.isFinite( null );
const result = a === b;
`,
                    example: [
                        {title: 'false', key: 0, correct: 'correct'},
                        {title: 'true', key: 1, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `let result = 0;
for ( let i = 0; i < 5; i++ ) {
  if ( i % 2 ){
    result += i;
  }
}
`,
                    example: [
                        {title: '6', key: 1, correct: ''},
                        {title: '15', key: 2, correct: ''},
                        {title: '0', key: 3, correct: ''},
                        {title: '4', key: 0, correct: 'correct'},
                        {title: '5', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `let value = 2009;
setTimeout( () => {
  value = 262;

}, 0 );
const result = value;`,
                    example: [
                        {title: 'undefined', key: 1, correct: ''},
                        {title: '262', key: 2, correct: ''},
                        {title: '2009', key: 0, correct: 'correct'},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const result = '1' + 1;`,
                    example: [
                        {title: '11', key: 0, correct: 'correct'},
                        {title: '2', key: 1, correct: ''},
                        {title: 'NaN', key: 2, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const array = [1, 2, 3];
const result = array.unshift( 0 );`,
                    example: [
                        {title: '[0,1,2,3]', key: 1, correct: ''},
                        {title: '[1,2,3,0]', key: 2, correct: ''},
                        {title: '4', key: 0, correct: 'correct'},
                        {title: '[1,2,3]', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const result = typeof !!null;`,
                    example: [
                        {title: 'boolean', key: 0, correct: 'correct'},
                        {title: 'number', key: 1, correct: ''},
                        {title: 'true', key: 2, correct: ''},
                        {title: 'false', key: 3, correct: ''},
                        {title: 'undefined', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const User = function (name) {
  this.name = name;
};

const Brendan = new User( 'Brendan' );
const James = new Brendan.constructor( 'James' );

const result = James instanceof User;
`,
                    example: [
                        {title: 'true', key: 0, correct: 'correct'},
                        {title: 'throw a SyntaxError', key: 1, correct: ''},
                        {title: 'false', key: 2, correct: ''},
                    ],
                    correct: 0
                }]
        },
        {
            name: 'Test7',
            data: [{
                question: 'result 의 값은?',
                code: `const result = true > false;`,
                example: [
                    {title: 'false', key: 1, correct: ''},
                    {title: 'true', key: 0, correct: 'correct'},
                    {title: 'number', key: 2, correct: ''},
                    {title: 'null', key: 3, correct: ''},
                ],
                correct: 0
            },
                {
                    question: 'result 의 값은?',
                    code: `const result = Number.isInteger( 95.0 );`,
                    example: [
                        {title: 'true', key: 0, correct: 'correct'},
                        {title: 'false', key: 1, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const array = [1, 2, 3, 4, 5];
const result = array.splice( 1, 2, 3 );
`,
                    example: [
                        {title: '[2,3]', key: 0, correct: 'correct'},
                        {title: '[1,2,3,4,5,1,2,3]', key: 1, correct: ''},
                        {title: '[1,1,2,2,3,3]', key: 2, correct: ''},
                        {title: '[3,3,4,5]', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const func = () => {
};

const result = func instanceof Object;
`,
                    example: [
                        {title: 'true', key: 0, correct: 'correct'},
                        {title: 'false', key: 1, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const { name } = {
  name: 'Brendan'
};

const result = name;`,
                    example: [
                        {title: 'throw a SyntaxError', key: 1, correct: ''},
                        {title: 'undefined', key: 2, correct: ''},
                        {title: 'name', key: 3, correct: ''},
                        {title: 'Brendan', key: 0, correct: 'correct'},
                        {title: 'null', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const items = [1, 2, 3, 4];
const noop = value => value;

for ( var i = 0; i < items.length; i++ ) {
  noop( items[ i ] );
}

const result = i;
`,
                    example: [
                        {title: '4', key: 0, correct: 'correct'},
                        {title: 'undefined', key: 1, correct: ''},
                        {title: '0', key: 2, correct: ''},
                        {title: 'throw a ReferenceError', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `let value = 32;
const reseult = value << 1;`,
                    example: [
                        {title: '64', key: 0, correct: 'correct'},
                        {title: '-32', key: 1, correct: ''},
                        {title: '31', key: 2, correct: ''},
                        {title: '16', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const str = 'JavaScript is not Java';
const result = str.replace( 'Java', 'ECMA' );`,
                    example: [
                        {title: 'ECMAScript is not Java', key: 0, correct: 'correct'},
                        {title: 'JavaScript is not ECMA', key: 1, correct: ''},
                        {title: 'ECMAScript is not ECMA', key: 2, correct: ''},
                        {title: 'JavaScript is not Java', key: 3, correct: ''},
                        {title: 'ECMA', key: 4, correct: ''},
                    ],
                    correct: 0
                }]
        },
        {
            name: 'Test8',
            data: [{
                question: 'result 의 값은?',
                code: `const result = (1 && 2) || (0 && 3);`,
                example: [
                    {title: '2', key: 0, correct: 'correct'},
                    {title: '1', key: 1, correct: ''},
                    {title: '0', key: 2, correct: ''},
                    {title: '3', key: 3, correct: ''},
                    {title: '4', key: 4, correct: ''},
                ],
                correct: 0
            },
                {
                    question: 'result 의 값은?',
                    code: `var prop = 95;
const result = window.prop;`,
                    example: [
                        {title: 'true', key: 1, correct: ''},
                        {title: 'throw a ReferenceError', key: 2, correct: ''},
                        {title: 'undefined', key: 3, correct: ''},
                        {title: '95', key: 0, correct: 'correct'},
                        {title: 'null', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const obj = {
  value: 2009,
};
const func = function () {
  this.value = 262;
};

func.call( obj );
const result = obj.value;`,
                    example: [
                        {title: '262', key: 0, correct: 'correct'},
                        {title: '2009', key: 1, correct: ''},
                        {title: 'undefined', key: 2, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `let prop = 95;
const result = window.prop;`,
                    example: [
                        {title: 'undefined', key: 0, correct: 'correct'},
                        {title: 'null', key: 1, correct: ''},
                        {title: 'throw a ReferenceError', key: 2, correct: ''},
                        {title: 'true', key: 3, correct: ''},
                        {title: '95', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const array = [5, 1, 3, 4, 2];
const result = array.some( (a, b) => b - a );`,
                    example: [
                        {title: '[5,4,3,2,1]', key: 0, correct: 'correct'},
                        {title: '[1,2,3,4,5]', key: 1, correct: ''},
                        {title: '[5,1,3,4,2]', key: 4, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const str = "{\\"name\\":\\"Brendan\\"}";
const json = JSON.parse( str );
const result = json.name;
`,
                    example: [
                        {title: 'Brendan', key: 0, correct: 'correct'},
                        {title: 'undefined', key: 1, correct: ''},
                        {title: 'throw a ReferenceError', key: 2, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `const result = typeof Object;`,
                    example: [
                        {title: 'function', key: 0, correct: 'correct'},
                        {title: 'Object', key: 1, correct: ''},
                        {title: 'object', key: 2, correct: ''},
                        {title: 'throw a TypeError', key: 3, correct: ''},
                    ],
                    correct: 0
                },
                {
                    question: 'result 의 값은?',
                    code: `let result = 2009;
try {
  result = 262 / 0;
} catch (e) {
  result = 0 / 262;
}
`,
                    example: [
                        {title: 'Infinity', key: 0, correct: 'correct'},
                        {title: 'throw a TypeError', key: 1, correct: ''},
                        {title: '0', key: 2, correct: ''},
                        {title: '2009', key: 3, correct: ''},
                    ],
                    correct: 0
                }]
        }
    ],
    advanced: [{
        name: 'Test1',
        data: [
            {
                question: 'result 의 값은?',
                code: `const toString = Object.prototype.toString;\nconst result = toString.call(null);`,
                example: [
                    {title: '[object Null]', key: 0, correct: 'correct'},
                    {title: '[object Object]', key: 1, correct: ''},
                    {title: '[Object]', key: 2, correct: ''},
                    {title: 'Null', key: 3, correct: ''},
                    {title: 'null', key: 4, correct: ''}
                ],
                correct: 0
            },
            {
                question: 'result 의 값은?',
                code: `const func = function(){
  return arguments.join("");
}
const result = func(2009,262);`,
                example: [
                    {title: '2271', key: 0, correct: ''},
                    {title: '2009262', key: 1, correct: ''},
                    {title: 'NaN', key: 2, correct: ''},
                    {title: 'throw a TypeError', key: 3, correct: 'correct'},
                ],
                correct: 3
            },
            {
                question: 'result 의 값은?',
                code: `let result = "string";
(function (){
  result = typeof arguments;
})();`,
                example: [
                    {title: 'undefined', key: 0, correct: ''},
                    {title: 'null', key: 1, correct: ''},
                    {title: '"array"', key: 2, correct: ''},
                    {title: '"object"', key: 3, correct: 'correct'},
                    {title: '"string"', key: 4, correct: ''}
                ],
                correct: 3
            },
            {
                question: 'result 의 값은?',
                code: `const target = {
  name : "ECMAScript"
}

const proxy = new Proxy(target, {});
proxy.name = "Javascript";

const result = target.name;`,
                example: [
                    {title: 'ECMAScript', key: 0, correct: ''},
                    {title: 'Javascript', key: 1, correct: 'correct'},
                    {title: 'undefined', key: 2, correct: ''},
                    {title: 'Null', key: 3, correct: ''},
                    {title: 'null', key: 4, correct: ''}
                ],
                correct: 1
            },
            {
                question: 'result 의 값은?',
                code: `const User = function () {
  const result = new.target === User;
};

const man = new User();`,
                example: [
                    {title: 'true', key: 0, correct: 'correct'},
                    {title: 'false', key: 1, correct: ''},
                    {title: 'throw a SyntaxError', key: 2, correct: ''},
                ],
                correct: 0
            },
            {
                question: 'result 의 값은?',
                code: `const  constructor = function () {};

const result = constructor.prototype.constructor == constructor;`,
                example: [
                    {title: 'false', key: 0, correct: ''},
                    {title: 'true', key: 1, correct: 'correct'},
                    {title: 'throw a SyntaxError', key: 2, correct: ''},
                ],
                correct: 1
            },
            {
                question: 'result 의 값은?',
                code: `const plus = +0;
const minus = -0;
const result = Object.is( plus, minus );`,
                example: [
                    {title: 'true', key: 0, correct: ''},
                    {title: 'false', key: 1, correct: 'correct'},
                    {title: 'throw a SyntaxError', key: 2, correct: ''},
                ],
                correct: 1
            },
            {
                question: 'result 의 값은?',
                code: `const obj={};
const result = "toString" in obj;`,
                example: [
                    {title: 'true', key: 0, correct: 'correct'},
                    {title: 'false', key: 1, correct: ''},
                    {title: 'null', key: 2, correct: ''},
                    {title: 'undefined', key: 3, correct: ''},
                ],
                correct: 0
            },
        ]
    },],
};

export default questions
