## 两数求和

**题目描述**

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**举例**
```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

方法一：暴力法
```
function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
}    
```
方法二：Hash法

```
function(nums, target) {
    let map = new Map()
    nums.forEach((v,i)=>{
        map.set(v,i)   //将arr的健值放入Map
    })
    for(let i=0;i<nums.length;i++){
        let tmp = target - nums[i]  // 目标元素

        //我们将检查每个元素内有无目标元素
        if(map.has(tmp) && arr.get(tmp) != i){ 
            return [arr.get(tmp),i]
        }
    }
};
```