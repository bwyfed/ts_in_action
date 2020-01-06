// 为外部变量提供一个类型声明
declare function globalLib(options: globalLib.Options): void;

declare namespace globalLib {
  const version: string;
  function doSomething(): void;
  interface Options {
    [key: string]: any
  }
}
// 以上用到了函数和命名空间的合并