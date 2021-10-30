class pila_colas
{
    constructor()
    {        
        this.num = ["Eilyn",5,6,"Dayhanna","Michael ","David", 8,7,1,true, false,["Maria","Lolita"]]
        this.arrays = 0
        this.numeros = 0
        this.strings = 0
        this.bolean = 0                      
    }

    tipos_Datos()
    {
        for(let x = 0; x < this.num.length; x++)
        {
            if(typeof this.num[x] == "string")
            {
                this.strings = this.strings + 1
            }
            if(typeof this.num[x] == "numero")
            {
                this.numeros++
            }
            if(typeof this.num[x] == "boolean")
            {
                this.bolean++
            }
            if(typeof this.num[x] == "objeto")
            {
                this.arrays++
            }
        }
        console.log(this.num)
        console.log(`Cantidad de numeros : ${this.numeros}`)
        console.log("Cantidad de strings: " + this.strings)        
        console.log(`Cantidad de arreglos : ${this.arrays}`)
        console.log(`Cantidad de boleeanos : ${this.boleans}`)
    }  
    
}
let strack = new pila_colas
strack.tipos_Datos()
