import { Guid } from "guid-typescript";

export class Todo{
    constructor(
        public id: Guid,
        public title: string,
        public state: number,
        public description: string,
        public dateCreation: string,
        public deadline: string,
    ){

    }
}