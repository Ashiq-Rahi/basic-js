let pp = 600;
let ggg = 750;
let mm = 530;

if(pp > ggg){
    if(pp > mm){
        console.log('pp is bigger')
    }
    else{
        console.log('mm is bigger')
    }
}
else{
    if(ggg > mm){
        console.log('ggg is bigger')
    }
    else{
        console.log('mm is bigger')
    }
}

// simple rule
let bigger = Math.max(pp, ggg, mm);
console.log(bigger)