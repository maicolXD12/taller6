class pila_colas
{
    constructor()
    {        
        this.num = [20,5,12,6,15,22]
        this.impares = []                      
    }

    metodoImpares()
    {
        for(let x = 0; x < this.num.length;x++)
        {
            if(this.num[x] % 2 != 0)
            {
                this.impares.push(this.num[x])
            }
        }
        console.log(this.num)
        console.log(this.impares)
    }  
    
}
let strack = new pila_colas
strack.metodoImpares()