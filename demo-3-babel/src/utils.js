
export const add = (a, b) => a + b

export const sub = (a, b) => a - b

export const print = console.log

export class Man{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  call(){
    print(this.name)
  }
}