let numCount=(num)=>{
    const nums = [2, 4, 5, 2, 1, 2]
    let count = 0
    for(let i=0;i<=nums.length-1;i++){
        if(nums[i]===num){
            count = count+1
        }
    }
    return count;
}

console.log(numCount(2))