// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//
//You must write an algorithm that runs in O(n) time and without using the division operation.
//
//
//
//Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
//
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


/**
 * @param {number[]} nums
 * @return {number[]}
 */



var productExceptSelf = function(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);

    // Sol çarpımları hesapla
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Sağ çarpımları hesapla ve sonuca ekle
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
};

// Zaman ve Alan Karmaşıklığı
//
// Zaman Karmaşıklığı (O(n)): Diziyi iki kez dolaşıyoruz, bu yüzden zaman karmaşıklığı O(n) oluyor.
//     Alan Karmaşıklığı (O(1)): Ekstra olarak result dışında ek bir bellek kullanmıyoruz, bu nedenle ek alan karmaşıklığı O(1) kabul edilir.
//
//     Bu çözüm, bölme işlemi kullanmadan ve O(n) zaman karmaşıklığında, istenen sonuca verimli bir şekilde ulaşır.