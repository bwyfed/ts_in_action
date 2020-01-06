// 类类型接口
// 接口只能约束类的共有成员
interface Human {
  // new (name: string):void;
  name: string;
  eat(): void;
}
// 类实现接口时，必须实现接口中声明的“所有”属性
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

interface Boy extends Man, Child  {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}


class Auto {
  state = 1
  // private state2 = 0
}
// 接口继承类：把类的所有成员都抽象出来，只有类的成员结构，而没有具体实现
interface AutoInterface extends Auto {

}
class C implements AutoInterface {
  state = 1
}
// Bus是Auto的子类
class Bus extends Auto implements AutoInterface {
  
}