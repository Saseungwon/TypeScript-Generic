interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'John',
  age: 36,
}; 

//  IPerson[keyof IPerson] 
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number

// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
//   return obj[key];
// }

// 해결
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getProp(person, 'age'); // union타입이 아니라 name, age 둘중 하나만 사용 가능하도록 만들어서 런타임까지 가지 않고 컴파일 선에서 오류 발생하게 만듦


// function setProp(obj: IPerson, key: keyof IPerson, value: string | number): void {
//   obj[key] = value;
// }

// 해결
function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}
setProp(person, "name", "Anna"); // name에는 string만 올 수 있도록 지정