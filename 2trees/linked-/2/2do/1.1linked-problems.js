/** INSTRUCCIONES
 *
 * crear un archivo por programa
 * implementar un método, función, solución sin función
 * resuelva cada uno según lo solicitado
 * puede usar código de ejercicios anteriores
 *
 * PROBLEMA 1
 * contiene(v)
 *
 * busque el valor v en la lista enlazada
 * @arg {tipo} v - valor; puede ser de un carácter, número, u objeto
 * @returns { bool } - verdadero o falso, si el valor v existe o no
 * puede usar poligonal
 *
 * @ejemplo
 * contiene(3)
 *
 * @ver { @link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @ver { @enlace https://jsdoc.app}
 */
function Node(data) {
    this.data = data
    this.next = null
}
const traverse=(n)=>{//es6
    let c=n//iterator
    while(c){//exists
        if(c.data)return n
        c=c.next
    }
    return null
}
const contains = (v) => {
    if(traverse(v)==v)return true
    return false

}
let n1 = new Node(3)
let n2 = new Node(-2)
let n3 = new Node(1)
n1.next=n2
n2.next=n3
let n=0

//console.log(traverse(n1))

console.log(contains(n2))
console.log(n1)