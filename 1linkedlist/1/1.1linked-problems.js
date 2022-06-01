function Node(data) {
    this.data = data
    this.next = null
}
const traverse=(n)=>{
    let b=n
    while(b){//exists
        if(b.data)return n
        b=b.next
    }
    return null
}
const contains = (v) => {
    if(traverse(v)==v)return true
    return false

}
let n1 = new Node(6)
let n2 = new Node(-4)
let n3 = new Node(2)
n1.next=n2
n2.next=n3
let n=0

//console.log(traverse(n1))

console.log(contains(n2))
console.log(n1)