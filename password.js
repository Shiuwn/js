// 随机生成8位密码，要求大小写，数字同时有

let numArr = [];
for(let i = 0;i<10;i++){
    numArr.push(i);
}
let letterArr = [];
let letterCapArr = [];
for(let l =0;l<26;l++){
    let letter = String.fromCharCode(65+l)
    letterArr.push(letter);
    letterCapArr.push(letter.toLocaleLowerCase());
}

// 生成一个区间内的整数随机数
function randomRange(min,max){
    let range = parseInt(max - min);
    if(range<0){
        max = min^max
        min = min^max;
        max = min^max;
    }
    // 放大原均匀分布区间提高精度
    if(range!=0){
        let tens = Math.pow(10,String(range).length);
        let step = (tens/range)
        let gen = (Math.random()*tens);

        return (min+Math.floor(gen/step));
    }else{
        return min
    }
    
}

// 密码生成器
function pwdGen(){
    let pwlen = 8;
    let numtakes = randomRange(1,pwlen-3);
    let lettertakes = randomRange(1,pwlen-2-numtakes);
    let lctakes = numtakes+lettertakes>=(pwlen-1)?1:pwlen-numtakes-lettertakes;
    nums= shuffle(numArr).slice(0,numtakes);
    letters = shuffle(letterArr).slice(0,lettertakes);
    letterCaps = shuffle(letterCapArr).slice(0,lctakes);
    let pwarr = [];
    pwarr = pwarr.concat(nums);
    pwarr = pwarr.concat(letters);
    pwarr = pwarr.concat(letterCaps);
    pwdarr = shuffle(pwarr)
    return pwarr.join('')

}
// 打乱顺序
function shuffle(arr){
    for(let i=0;i<arr.length;i++){
        let pos1 = randomRange(0,arr.length-1);
        let pos2 = randomRange(0,arr.length-1);
        if(pos1!=pos2){
            [arr[pos1],arr[pos2]] = [arr[pos2],arr[pos1]];
        }
        return arr;
     }
    
}

console.log(pwdGen())