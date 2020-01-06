declare namespace umdLib {
  const version: string
  function doSomething(): void
}
// 专门为UMD写的语句
export as namespace umdLib

export = umdLib