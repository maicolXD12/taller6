class pila_colas
{
    constructor()
    {        
        this.arreglo = ["juanita","pepito","pepita","juanito"] 
        this.arreglonuevo = []                           
    }


    eliminar()
    {
        console.log("nombres disponibles: ")
        console.log(this.arreglo)
        let name = prompt("Ingrese el nombre a eliminar: ")
        for(let x = 0; x < this.arreglo.length; x++)
        {
            if(name != this.arreglo[x])
            {
               this.arreglonuevo.push(this.arreglo[x])                   
            }          
        }
        console.log(this.arreglonuevo)
    }
}

let pila_cola1 = new pila_cola()
pila_cola1.eliminar()