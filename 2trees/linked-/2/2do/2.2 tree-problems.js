function inorder(n){
    if (n!==null){
        inorder(n.l)
        console.log(n.d)
        inorder(n.r)
    }
}
function postorder(n){
    if (n!==null){
        postorder(n.l)
        postorder(n.r)
        console.log(n.d)
    }
}
function preorder(n){
    if (n!==null){
        console.log(n.d)
        preorder(n.l)
        preorder(n.r)
    }
}

function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}

let prd = new Node('+')
let o1 = new Node('-')
let o2 = new Node(3)
let o3 = new Node(8)
let o4 = new Node(3)

prd.l = o1
o1.l = o3
o1.r = o4
prd.r = o2

console.log('Preorder:')
console.log(preorder(prd))
console.log('Inorder')
console.log(inorder(prd))
console.log('Postorder')
console.log(postorder(prd))