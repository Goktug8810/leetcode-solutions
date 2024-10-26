
/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [2,3,-2,4]


var maxProduct = function(nums) {
    if (nums.length == 0) {
        return nums[0];  // Eğer dizi boşsa ilk elemanı döndür.
    }

    let ans = -∞;  // En büyük çarpımı saklamak için başlangıç değeri eksi sonsuz
    let currentProduct = 1;  // O anki çarpımı başlat

    // İlk döngü: Soldan sağa doğru ilerle
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            currentProduct *= nums[i];  // O anki elemanla çarpımı güncelle
            ans = Math.max(ans, currentProduct);  // En büyük çarpımı güncelle
        } else {
            currentProduct = 1;  // Eğer 0 ise, çarpımı sıfırla
        }
    }

    // İkinci döngü: Sağdan sola doğru ilerle
    currentProduct = 1;  // O anki çarpımı yeniden başlat
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] != 0) {
            currentProduct *= nums[i];  // O anki elemanla çarpımı güncelle
            ans = Math.max(ans, currentProduct);  // En büyük çarpımı güncelle
        } else {
            currentProduct = 1;  // Eğer 0 ise, çarpımı sıfırla
        }
    }

    return ans;  // En büyük çarpımı döndür.
};


function maxProduct(nums) {
    if (nums.length === 0) return 0;  // Eğer dizi boşsa 0 döndür.

    let maxProduct = nums[0];  // O anki maksimum çarpım
    let minProduct = nums[0];  // O anki minimum çarpım (negatif sayılar için)
    let result = nums[0];      // Sonuç olarak döndürülecek en büyük çarpım

    for (let i = 1; i < nums.length; i++) {
        let currentNum = nums[i];

        // Negatif sayılarla başa çıkmak için max ve min'i takas ederiz
        if (currentNum < 0) {
            let temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }

        // maxProduct ve minProduct'i güncelle
        maxProduct = Math.max(currentNum, maxProduct * currentNum);
        minProduct = Math.min(currentNum, minProduct * currentNum);

        // Sonucu güncelle, maxProduct o ana kadar ki en büyük çarpımdır
        result = Math.max(result, maxProduct);
    }
    return result;
}

// Zaman ve Alan Karmaşıklığı:
//
//Zaman Karmaşıklığı (O(n)): Algoritma diziyi sadece bir kez dolaşır, bu nedenle zaman karmaşıklığı O(n)'dir.
// Alan Karmaşıklığı (O(1)): Sadece sabit miktarda ek bellek kullanır, dolayısıyla alan karmaşıklığı O(1)'dir.


//Brut Force yaklaşım
function maxProductBruteForce(nums) {
    let maxProduct = -Infinity;  // Başlangıçta en küçük değeri veririz.

    // Tüm alt dizileri kontrol etmek için iki döngü kullanılır.
    for (let i = 0; i < nums.length; i++) {
        let currentProduct = 1;  // Alt dizinin çarpımını saklar.

        for (let j = i; j < nums.length; j++) {
            currentProduct *= nums[j];  // O anki alt dizinin çarpımını hesapla
            maxProduct = Math.max(maxProduct, currentProduct);  // Maksimum çarpımı güncelle
        }
    }

    return maxProduct;  // En büyük çarpımı döndür
}

//
// Zaman Karmaşıklığı:
//
//     Bu yaklaşımda iki iç içe döngü olduğu için zaman karmaşıklığı O(n²)'dir.
// Her alt dizi için çarpımı hesapladığımızdan dolayı, n uzunluğundaki bir dizi için yaklaşık n*(n+1)/2 alt dizi vardır, bu da O(n²) olur.
//
//     Alan Karmaşıklığı:
//     O(1)'dir, çünkü sadece sabit miktarda bellek kullanıyoruz (örneğin maxProduct ve currentProduct gibi değişkenler).