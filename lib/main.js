function main(number){
    var arr = [1, 3, 7, 1 ,4];
    let result = []
    arr.forEach((e,index) =>{
        if(e === number){
            result.push(index);
        }
    })
    return result.join(",");
}

module.exports = main;
