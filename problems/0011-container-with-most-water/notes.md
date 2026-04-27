Çalışma Mantığı

    left ve right uçtan başlarken her adımda en kısa çizgiyi içe doğru hareket ettiriyoruz, çünkü iki çizgi arasında daha kısa olan suyun sınırını belirliyor. Daha kısa olan çizgiyi içe doğru hareket ettirerek potansiyel olarak daha yüksek bir çizgiyle yeni bir alan oluşturabiliriz.
    Her adımda mevcut alanı maxArea ile karşılaştırarak güncelliyoruz, böylece sonunda en yüksek alanı elde ediyoruz.

Zaman ve Alan Karmaşıklığı

    Zaman Karmaşıklığı: O(n) - left ve right işaretçileri bir kez hareket ediyor ve birbirini geçene kadar işlem devam ediyor.
    Alan Karmaşıklığı: O(1) - Ekstra bir alan kullanmıyoruz, sadece sabit miktarda değişkenler (işaretçiler ve maxArea) tutuyoruz.

Örnek Üzerinde Çalıştırma

Örneğin height = [1,8,6,2,5,4,8,3,7] girdisiyle:

    left = 0, right = 8, height[left] = 1, height[right] = 7.
        area = min(1, 7) * (8 - 0) = 1 * 8 = 8
        maxArea = max(0, 8) = 8
        height[left] < height[right] olduğundan left++.

    left = 1, right = 8, height[left] = 8, height[right] = 7.
        area = min(8, 7) * (8 - 1) = 7 * 7 = 49
        maxArea = max(8, 49) = 49
        height[left] > height[right] olduğundan right--.

Bu adımlarla devam edip en büyük alanı 49 olarak buluyoruz.