function removeDup(arr){
    if(arr.length == 0){
        return ":("
    }
    var newArr = [];
    for(var i=0; i < arr.length; i++){
        if(arr.length - 1 == i){
            newArr.push(arr[i])
            //newArr.pop()
            return newArr
            //continue
            //break
        }
        if(arr[i] != arr[i+1]){
            newArr.push(arr[i])
        }
    }
}

console.log(removeDup([1,3,5,5,5,7]))
console.log(removeDup([]))

var str = "don't"

str.charAt(3)
