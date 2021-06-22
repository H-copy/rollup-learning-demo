
export const add = (a:number, b:number):number => a + b

export const sub = (a:number, b:number):number => a - b

export const print = console.log

export class Man{
  name: string
  age: number
  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }

  call(){
    print(this.name)
  }
}