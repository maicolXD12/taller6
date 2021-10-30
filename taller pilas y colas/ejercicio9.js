class pila_colas
{
    constructor()
    {        
        this.arreglo = ["Michael","Eilyn","Maria","carmen"] 
        this.arreglonuevo = []                           
    }


    eliminar()
    {        
        let name = parseInt(prompt("Ingrese el nombre a eliminar: "))
        for(let x = 0; x < this.arreglo.length; x++)
        {
            if(name != x)
            {
               this.arreglonuevo.push(this.arreglo[x])                   
            }          
        }
        console.log(this.arreglonuevo)
    }
}

let pila_colas1 = new pila_colas()
pila_colas1.eliminar()