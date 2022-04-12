class PersonExtends<T extends string | number> { // 타입을 가장 작은 부분으로 제한하는 것이 좋다. 
  private _name: T; 

  constructor(name: T){
    this._name = name;
  }
}

new PersonExtends("Mark"); 
new PersonExtends(34);
// new PersonExtends(true); // 'boolean' 형식의 인수는 'string | number' 형식의 매개 변수에 할당될 수 없습니다.