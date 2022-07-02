var arr = [1,5,8,2,9,10,7]
function cmp(a,b){
if (a>b){
    return 1;
}else {
    return -1;
}
}
arr.sort(cmp)
console.log (arr[0]) // find First element of array
console.log (arr[arr.length-1]) // find last element of array


