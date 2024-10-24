Bu çözüm, "Greedy Algorithm" (Açgözlü Algoritma) olarak bilinen bir algoritma yaklaşımına dayanır.
Bu yöntem, her adımda en iyi yerel çözümü seçerek ilerler ve sonunda en iyi genel çözüme ulaşmayı hedefler.
Bu problemde, her adımdaki fiyatı kontrol ederken o ana kadar gördüğümüz en düşük fiyatı sürekli güncelleyerek ve elde edilebilecek maksimum karı bulmaya çalışıyoruz.
Böylece, her adımda karı maksimize etmeye yönelik kararlar alıyoruz.

Algoritma Yöntemi:

    Greedy (Açgözlü) Yaklaşım:
        Her adımda en düşük fiyatı güncelleyip, o andaki fiyatla elde edilebilecek en yüksek karı hesaplayarak ilerliyoruz.
        Önceki adımlardaki kar hesaplamalarını unutup her yeni adımda mevcut durumu en iyi şekilde değerlendirmeye odaklanıyoruz. Bu, greedy yaklaşımın temel mantığıdır.

    Sürekli Minimumu ve Karı İzleme:
        En düşük fiyatı sürekli güncelliyoruz.
        Her yeni fiyatla, bu düşük fiyatla elde edilebilecek karı hesaplıyoruz ve o ana kadar ki en büyük karı saklıyoruz.


AÇIKLAMA

minPrice: Dizideki ilk elemanla başlatılır ve her adımda karşılaştığımız en düşük fiyat olarak güncellenir. Bu sayede, her yeni fiyatla karşılaştığımızda, o ana kadarki en düşük fiyattan alım yapmayı simüle ederiz.

maxProfit: Başlangıçta 0 olarak başlatılır, çünkü henüz kar elde edilmemiştir. Her adımda elde edilebilecek kar hesaplanır (prices[i] - minPrice), ve bu kar mevcut maxProfit ile karşılaştırılarak en büyük kar saklanır.

Döngü: İkinci günden (indeks 1) başlayarak, diziyi baştan sona dolaşırız. Her adımda:

    O anki fiyatla (prices[i]) o ana kadar bulduğumuz en düşük fiyat (minPrice) arasındaki farkı hesaplarız.
    Bu karı o ana kadar elde edilen en yüksek karla karşılaştırırız ve gerekiyorsa güncelleriz.
    O andaki fiyat, bulduğumuz en düşük fiyattan daha düşükse, minPrice güncellenir.

Sonuç: Döngü bittiğinde, en büyük kar maxProfit değişkeninde saklanmış olacaktır. Eğer hiç kar elde edilemiyorsa (örneğin sürekli azalan bir dizi), maxProfit hala 0 kalır ve bu değer döndürülür.

Örnek Çalışma:

Girdi: prices = [7, 1, 5, 3, 6, 4]

    Başlangıç:
        minPrice = 7
        maxProfit = 0

    2. Gün (prices[1] = 1):
        currentProfit = 1 - 7 = -6
        maxProfit = max(0, -6) = 0
        minPrice = min(7, 1) = 1

    3. Gün (prices[2] = 5):
        currentProfit = 5 - 1 = 4
        maxProfit = max(0, 4) = 4
        minPrice = 1 (değişmez)

    4. Gün (prices[3] = 3):
        currentProfit = 3 - 1 = 2
        maxProfit = max(4, 2) = 4
        minPrice = 1 (değişmez)

    5. Gün (prices[4] = 6):
        currentProfit = 6 - 1 = 5
        maxProfit = max(4, 5) = 5
        minPrice = 1 (değişmez)

    6. Gün (prices[5] = 4):
        currentProfit = 4 - 1 = 3
        maxProfit = max(5, 3) = 5
        minPrice = 1 (değişmez)

Sonuç: Maksimum kar = 5 (2. gün satın alınıp, 5. gün satıldığında).

Zaman ve Alan Karmaşıklığı:

    Zaman Karmaşıklığı (O(n)): Algoritma, fiyatları bir kez dolaşır. Her adımda sabit işlem yapıldığı için zaman karmaşıklığı O(n)'dir, yani dizinin boyutuna doğrusal olarak bağlıdır.

    Alan Karmaşıklığı (O(1)): Yalnızca birkaç sabit miktarda değişken (minPrice ve maxProfit) kullanıldığı için, alan karmaşıklığı O(1)'dir. Algoritma ek bir bellek kullanmaz.