let n = 5;

function tree (h) {
    for(let i = 0; i < n; i++) {
        let spaces = '';
        let stars = '';
        for (let j = 0; j < h-i-1; j++) {
            spaces = spaces + ' ';
        }
        for (let k = 0; k < i*2+1; k++) {
            stars = stars + '*';
        }
        console.log(spaces + stars);
    }
}

tree(n);
