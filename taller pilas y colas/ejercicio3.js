class pila_colas{

    constructor()
    {        
        this.num= [8,5,12,10,"Eilyn",false,9,6] 
        this.resultado = 0               
    }

    sumaTotal()
    {
        for(let x = 0; x < this.num.length;x++)
        {
           if(typeof this.num[x] == "numero" )
           {
                this.resultado += this.num[x]
           }
           else
           {
               console.log(x)
               console.log(typeof this.num[x])
           } 
                  
            
        }
        console.log(this.num)         
        console.log(this.resultado)

    }

    
}
let strack = new pila_colas
strack.sumaTotal()


