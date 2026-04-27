// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

/**
 * @param {number[]} prices
 * @return {number}
 */
function bestTimeToBuyAndSellAStock(prices) {
    let minPrice = prices[0];
    let maxKar = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }

        let currentKar = prices[i] - minPrice;

        if(currentKar > maxKar) {
            maxKar = currentKar;
        }
    }

    return maxKar;
}

var maxSubArray = function(nums) {
    let minSoFar=prices[0];
    let ans=0;

    for (let i = 1; i < nums.length; i++) {
        ans=Math.max(ans,prices[i]- minSoFar);
        minSoFar=Math.min(minSoFar,prices[i]);
    }
    return ans;
};


//ALIM SATIM YAPILAN GÜNLERİ DE TUTARAK YAPILAN PSEUDOCODE
function bestTimeToBuyAndSellAStock(prices) {
    let minPrice = prices[0]; // En düşük fiyatı saklar
    let maxProfit = 0; // En yüksek karı saklar
    let buyDay = 0; // Alım yapılan gün
    let sellDay = 0; // Satış yapılan gün
    let minDay = 0; // Şu ana kadarki en düşük fiyatın görüldüğü gün

    // Fiyatları 2. günden itibaren dolaş
    for (let i = 1; i < prices.length; i++) {
        // Kar hesapla
        let currentProfit = prices[i] - minPrice;

        // Eğer daha yüksek bir kar varsa, maxProfit'i ve satım gününü güncelle
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
            buyDay = minDay; // En düşük fiyatın görüldüğü gün alım günü olur
            sellDay = i; // O anki gün satım günü olur
        }

        // Eğer daha düşük bir fiyat bulursak, minPrice ve minDay'i güncelle
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            minDay = i; // En düşük fiyatın görüldüğü günü kaydederiz
        }
    }

    // Karı ve alım-satım günlerini döndür
    return {
        maxProfit: maxProfit,
        buyDay: buyDay + 1,  // Günü 1-index'li hale getiriyoruz (1. gün, 2. gün gibi)
        sellDay: sellDay + 1
    };
}

