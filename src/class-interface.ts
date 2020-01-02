interface Human {
  // new (name: string):void;
  name: string;
  eat(): void;
}
// 类实现接口时，必须实现接口中所有属性
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
  sleep() {}
}

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child  {
}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

class Auto {
  state = 1
}
interface AutoInterface extends Auto {

}
class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {
  
}