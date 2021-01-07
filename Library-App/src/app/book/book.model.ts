export class BookModel{
    constructor(
        public _id:string,
        public name:string,
        public author:string,
        public genre:string,
        public description:string,
        public image:string){}
}