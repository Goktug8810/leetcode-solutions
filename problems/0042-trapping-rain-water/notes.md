n'i, height dizisinin uzunluğu olarak ayarla.

Boyutu n olan ve 0 ile doldurulmuş left ve right adlı iki dizi oluştur.

left[0]'ı height[0] olarak ayarla.

right[n - 1]'i height[n - 1] olarak ayarla.

i'yi 1'den başlayarak n - 1'e kadar artırarak: left[i]'i max(left[i - 1], height[i]) olarak ayarla.

i'yi n - 2'den başlayarak 0'a kadar azaltarak: right[i]'i max(right[i + 1], height[i]) olarak ayarla.

ans'i 0 olarak başlat.

i'yi 0'dan n - 1'e kadar artırarak: ans'e min(left[i], right[i]) - height[i] değerini ekle.

ans değerini döndür.

Zaman Karmaşıklığı (Time Complexity):

    left ve right dizilerini doldurmak için iki ayrı for döngüsü var. Her döngü O(n) sürede çalışır.
    Biriken su miktarını hesaplayan üçüncü for döngüsü de O(n) sürede çalışır.
    Dolayısıyla, toplam zaman karmaşıklığı:
    O(n)+O(n)+O(n)=O(n)
    O(n)+O(n)+O(n)=O(n)
    Zaman Karmaşıklığı: O(n)

Alan Karmaşıklığı (Space Complexity):

    left ve right dizileri O(n) ek alan kullanır.
    ans ve diğer sabit sayıda değişkenler O(1) ek alan kullanır.
    Dolayısıyla, toplam alan karmaşıklığı:
    O(n)+O(n)=O(n)
    O(n)+O(n)=O(n)
    Alan Karmaşıklığı: O(n)