let indices=(x)=>{
    const nums =[2, 4, 7, 8, 11, 14]
    for(let i=0; i<=nums.length-1;i++){
        for (let j=i+1;j<=nums.length-1;j++){
            if((nums[i]+nums[j])===x){
                console.log(i+" "+j)
            }
        }
    }
}

indices(18)