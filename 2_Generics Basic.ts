function helloBasic<T, U>(message: T, comment: U): T{
  return message;
}

// 1. T를 지정하기(제한하기)
helloBasic<string, number>("Mark", 23);
// 2. T를 지정하지 않기(추론하기)
helloBasic(56, 33);