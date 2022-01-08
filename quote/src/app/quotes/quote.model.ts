export class Quote{
    public id!:number;
    public quote!:string;
    public quotemaster!:string;
    public commenter!:string
    
    constructor (quote:string,quotemaster:string,commenter:string){
        this.quote=quote
        this.quotemaster=quotemaster
        this.commenter=commenter
    }
}

