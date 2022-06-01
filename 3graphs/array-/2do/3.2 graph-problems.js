let directed =  [
    [0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1],
]
let undirected =  [
    [0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
]
let tree =  [
    [0, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
]

const isSquire = (g) => {
    let ban=true
    for(let i=0; i <= g.length-1; i++){
        for(let j=0; j <= g[i].length-1; j++){
        }
        if(g.length-1 != g[i].length-1){
            ban=false
        }

    }
    return ban
}

console.log('is squire: ' + isSquire(directed))

const isSymmetrical = (g) => {
    let ban=true
    for(let i=0; i <= g.length-1; i++){
        for(let j=0; j <= g.length-1; j++){
            if(g[i][j] != g[j][i]){
                ban=false
            }
        }
    }
    return ban
}

console.log('is symmetrical: ' + isSymmetrical(undirected))

const isTree = (t) => {
    let count = 0;
    let column = 0;
    let k = 0;
    let ban=true

    for (let i = 0; i <= t.length-1; i++) {
        for (let j = 0; j < t[i].length; j++, count++)
            column = count / t.length;
    }
    for (let i = 1; i <= t.length-1; i++) {
        k = 0;
        for (let j = 0; j < column; j++) {
            if (j < i) {
                k += t[i][j];
                if (k > 1) ban = false;
            }
        }
    }
    return ban;
}

console.log('is a tree: '+isTree(tree))

const isGraph = (g) => {
    let flag = true
    if (isTree(g) == true) flag = false
    return flag
}

console.log('is a graph: '+ isGraph(tree))