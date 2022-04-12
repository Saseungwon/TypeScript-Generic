function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 같은 로직을 반복하는 함수들이 계속 생기게 돼서, 모든 타입을 다 받을 수 있는 인자로 설정하고, 모든 타입을 리턴할 수 있게 만들면 해결할 수 있다. 

function hello(message: any): any {
  return message; 
}

console.log(hello("Mark").length); 
console.log(hello(39).length);

// 이제부터 제네릭
    // any는 모든 걸 받아서 모든걸로 주는 형국이기 때문에 들어온 input에 의해 달라지는 타이핑이 불가능
    // T를 이용하면 타입에 따라 다른 연산이 가능하다. 

        function helloGeneric<T>(message: T): T { 
          return message;
        }
        console.log(helloGeneric('Mark').length);
        console.log(helloGeneric(39))   // number에는 length 사용 안 되기 때문에 불가능 
        console.log(helloGeneric(true)); 