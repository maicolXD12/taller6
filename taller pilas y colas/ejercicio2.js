class pila_colas{

    constructor()
    {        
        this.num = [4,1,6,8,3,6]
        this.resultado = []               
    }

    validar()
    {
        for(let x = 0; x < this.num.length;x++)
        {
            if(this.num[x] % 2 == 0)
            {
                this.resultado.push(true)
            }
            else
            {
                this.resultado.push(false)
            }   
        }
        console.log(this.num)         
        console.log(this.resultado)

    }

    
}
let strack = new pila_colas
strack.validar()

