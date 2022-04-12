// Array
function helloArray<T>(message: T[]): T {
  return message[0];
}
helloArray(['Hello', 'World']); 
helloArray(["Hello", 5]);   // helloArray<string | number>(message: (string | number)[])


// Tuple
function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}
helloTuple(['Hello', 'World']);
helloTuple(['Hello', 5]);   // helloTuple<string, number>(message: [string, number])