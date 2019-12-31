/**
class Dog {
  constructor(name: string) {
    this.name = name
  }
  // name?: string = 'dog'
  // name: string = 'dog'
  name: string // 三种方法给类的属性初始值
  run() {}
}
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name) //super表示父类的实例
    this.color = color
  }
  color: string
}
// 类的成员修饰符
class Dog1 {
  // 构造函数前加private，此类既不能被实例化，也不能被继承
  // 构造函数前加上protected，此类不能被实例化，只能被继承，也就是声明了一个基类
  constructor(name: string) {
    this.name = name
  }
  public name: string // 默认都是public
  run() {}
  private pri() {} // 私有成员，不能被实例和子类中调用
  protected pro() {} // 受保护成员，只能在类和子类中调用，不能被实例调用
  readonly legs: number = 4 // 只读属性，不能被更改，一定要被初始化
  static food: string = 'bones' // 类的静态成员只能通过类名调用，不能通过实例访问
}
let dog1 = new Dog('wangwang')
console.log(dog1)
console.log(Dog1.food)
class Husky1 extends Dog1 {
  constructor(name: string, public color: string) { // 将参数color自动变为实例的属性
    super(name) //super表示父类的实例
    this.color = color
  }
}
console.log(Husky1.food) // 父类的静态成员也能被子类继承
*/

// 抽象类与多态

abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 抽象方法
  abstract sleep(): void
}

class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
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
// 链式调用
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
new MyFlow().next().step1().next().step2()