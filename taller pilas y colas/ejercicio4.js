class pila_colas
{
    constructor()
    {        
        this.num = [10,9,20,1,12,7] // 22
        this.pares = []                      
    }

    metodoPares()
    {
        for(let x = 0; x < this.num.length;x++)
        {
            if(this.num[x] % 2 == 0)
            {
                this.pares.push(this.num[x])
            }
        }
        console.log(this.num)
        console.log(this.pares)
    }  
    
}
let strack = new pila_colas
strack.metodoPares()