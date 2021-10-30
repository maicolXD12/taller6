class pila_colas
{
    constructor()
    {        
        this.num = ["Eilyn",4,12,"Michael","Dayhanna","David",8,1,5,]
        this.strings = []                      
    }

    metodoString()
    {
        for(let x = 0; x < this.num.length;x++)
        {
            if(typeof this.num[x] == "string")
            {
                this.strings.push(this.num[x])
            }
        }
        console.log(this.num)
        console.log(this.strings)
    }  
    
}
let strack = new pila
strack.metodoString()