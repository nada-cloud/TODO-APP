import { Guid } from "guid-typescript";


export interface ITodo {
    id: Guid,
    title: string,
    state: boolean,
    description: string,
    dateCreation: string,
    deadline: string,
  }
  
export class Todo{
    constructor(
        public id: Guid,
        public title: string,
        public state: boolean,
        public description: string,
        public dateCreation: string,
        public deadline: string,
    ){

    }

    setState(state:boolean):void{
        this.state=state;
    }
}