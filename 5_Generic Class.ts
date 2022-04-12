class Person<T, K> {
  private _name:T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name; 
    this._age = age;
  }
}

new Person("Mark", 22);
// new Person<string>(34); // 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
// new Person<string, number>("Mark", "fff");  // 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.