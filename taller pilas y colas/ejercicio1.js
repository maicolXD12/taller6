class uno{

    constructor()
    {
        this.num = []
        this.name = "Pila"
    }

    metodotamanio()
    {
        let n = parseInt(prompt("Ingrese la cantidad de elementos: "))
        for(let x = 1; x <= n; x++)
        {
         let Pila = prompt("Ingrese un valor: ")
         this.num.push(Pila)
        }
        console.log(this.num)
    }

}
let strack = new uno()
strack.metodotamanio()
