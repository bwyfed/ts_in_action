/**
// Part 1 类的定义，继承和修饰符

class Dog {
  constructor(name: string) {
    this.name = name
  }
  // 实例的属性必须要有初始值,或者在构造函数中初始化
  // 三种方法给类的属性初始值
  // name: string = 'dog'
  // name?: string = 'dog' // 设置为可选的属性
  name: string // 在构造函数中初始化
  run() {}
}
console.log(Dog.prototype) // {run: ƒ, constructor: ƒ}
let dog = new Dog('wangwang')
console.log(dog) // {name: "wangwang"}
// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name) //super表示父类的实例
    this.color = color
  }
  color: string // Husky自己的属性
}

// 类的成员修饰符:TS对ES的扩展
class Dog1 {
  // 类的所有属性默认都是public
  // 构造函数前加private，表示此类既不能被实例化，也不能被继承
  // 构造函数前加protected，表示此类不能被实例化，只能被继承，也就是声明了一个基类
  constructor(name: string) {
    this.name = name
  }
  public name: string // 默认都是public
  run() {}
  private pri() {} // 私有成员，不能在实例和子类中访问
  protected pro() {} // 受保护成员，只能在类和子类中放温暖，不能被实例调用
  readonly legs: number = 4 // 只读属性，不能被更改，一定要被初始化
  static food: string = 'bones' // 类的静态成员只能通过类名调用，不能通过实例访问
}
let dog1 = new Dog('wangwang')
console.log(dog1)
// dog1.pri()
// dog1.pro()
console.log(Dog1.food)
class Husky1 extends Dog1 {
  constructor(name: string, color: string) { // public color: string 将参数color自动变为实例的属性
    super(name) //super表示父类的实例
    this.color = color
    // this.pri()
    this.pro()
  }
  color: string
}
console.log(Husky1.food) // 父类的静态成员也能被子类继承
*/

// Part 2 抽象类与多态
// 抽象类：只能被继承，不能被抽象化的类
abstract class Animal {
  // 抽象类中定义了方法的实现，子类中就不用再实现，实现方法的复用
  eat() {
    console.log('eat')
  }
  // 抽象方法:子类有具体的实现
  abstract sleep(): void
}
// let animal = new Animal() // 无法创建抽象类的实例
class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  // 抽象方法的具体实现
  sleep() {
    console.log('Dog sleep')
  }
}
let dog = new Dog('wangwang')
dog.eat()
dog.sleep()

class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}
let cat = new Cat()
// 多态
let animals: Animal[] = [dog, cat]
animals.forEach(i => {
  i.sleep()
})

class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
// 类方法的链式调用
new WorkFlow().step1().step2()
// 类继承时this的多态
class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
// 父类和子类之间接口调用的连贯性
new MyFlow().next().step1().next().step2()
