function main(number){
    var arr = [1, 3, 7, 1 ,4];
    let res = arr.map((e,index) =>{
        if(e === number){
            return index;
        }else {
            return "";
        }
    })
    var result = []
    res.forEach((e,index) =>{
        if(e !== ""){
            result.push(index);
        }
    })
    return result.join(",");
}

module.exports = main;
