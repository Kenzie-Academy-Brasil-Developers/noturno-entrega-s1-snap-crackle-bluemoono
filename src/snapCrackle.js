// Seu código vai aqui

function snapCrackle(maxValue){
    let a = '';
    for(let i=1; i<=maxValue;i++){        
        if (i%2!==0&&i%5===0) {
            a+= "SnapCrackle, ";
            continue;
        } else if (i%5===0) {
            a+= 'Crackle, ';
            continue;
        } if (i%2!==0) {
            a+='Snap, ';
            continue;
        } else {
            a+=i + ', '
            continue;
        }
    }
    document.write(a)

}
snapCrackle(15)