İlk Döngü (Sol Çarpımlar):

leftProduct başlangıçta 1 olarak başlatılır.
Bu döngüde result[i] her seferinde leftProduct ile güncellenir ve ardından leftProduct
bir sonraki elemanı çarpmak üzere güncellenir.


nums = [1, 2, 3, 4]

Başlangıç:
result = [1, 1, 1, 1]
leftProduct = 1

i = 0:
    result[0] = leftProduct = 1  // Başlangıçta sadece 1, etkilemez
    leftProduct *= nums[0] = 1 * 1 = 1

i = 1:
    result[1] = leftProduct = 1  // İlk elemandan gelen çarpım değeri
    leftProduct *= nums[1] = 1 * 2 = 2

i = 2:
    result[2] = leftProduct = 2  // İlk iki elemandan gelen çarpım değeri
    leftProduct *= nums[2] = 2 * 3 = 6

i = 3:
    result[3] = leftProduct = 6  // İlk üç elemandan gelen çarpım değeri
    leftProduct *= nums[3] = 6 * 4 = 24


İkinci Döngü (Sağ Çarpımlar):

Şimdi rightProduct da 1 ile başlatılır ve sağdan sola doğru giderken result dizisindeki mevcut değerlerle çarpılır.
Bu döngüde, her result[i] elemanı nums[i]'nin sağındaki tüm elemanların çarpımıyla güncellenir.

rightProduct = 1

i = 3:
    result[3] *= rightProduct = 6 * 1 = 6
    rightProduct *= nums[3] = 1 * 4 = 4

i = 2:
    result[2] *= rightProduct = 2 * 4 = 8
    rightProduct *= nums[2] = 4 * 3 = 12

i = 1:
    result[1] *= rightProduct = 1 * 12 = 12
    rightProduct *= nums[1] = 12 * 2 = 24

i = 0:
    result[0] *= rightProduct = 1 * 24 = 24
    rightProduct *= nums[0] = 24 * 1 = 24


Sonuç olarak result dizisi şu hale gelir: [24, 12, 8, 6], her eleman nums[i] hariç diğer tüm elemanların çarpımını içerir.


Başlangıç değerleri olarak 1 kullanılır çünkü çarpma işlemi için nötr eleman 1'dir.
İlk döngü, her elemanın solundaki elemanların çarpımını result dizisine yazar.
İkinci döngü, her elemanın sağındaki elemanların çarpımını result dizisi ile çarparak sonuçları günceller.


Sağ ve Sol Çarpımlar Yöntemi Nasıl Çalışıyor?

Bu yöntemde, iki aşamada işlem yapıyoruz:

    Soldan Sağa (Sol Çarpımlar):
        Bu adımda her i elemanı için kendisinden önceki tüm elemanların çarpımını hesaplıyoruz.
        leftProduct değişkeni, result[i]'nin solundaki elemanların çarpımını saklıyor.
        Bu aşamada sadece solundaki elemanların çarpımı yapıldığı için, her i elemanının kendisi hesaba katılmıyor. Dolayısıyla result[i]'de nums[i]'nin kendisi dahil edilmeden sol çarpımlar hesaplanıyor.

    Sağdan Sola (Sağ Çarpımlar):
        Bu adımda her i elemanı için kendisinden sonraki tüm elemanların çarpımını hesaplıyoruz.
        rightProduct değişkeni, her result[i]'nin sağındaki elemanların çarpımını saklıyor.
        Bu aşamada da sadece sağındaki elemanların çarpımı yapıldığı için, yine nums[i]'nin kendisi hesaba katılmıyor.

Sonuç olarak, result[i] dizisinin her bir elemanında nums[i] hariç diğer tüm elemanların çarpımı elde edilir. Yani, her i elemanı için sol çarpımlar ve sağ çarpımlar birleştirilir, ama nums[i]'nin kendisi bu çarpıma dahil edilmez.


 O(n) Zaman Karmaşıklığını Sağlamak İçin

Sağ ve sol çarpımlar yöntemi, her eleman için sol ve sağ çarpımları tek bir geçişte hesaplamamızı sağlar. Bu sayede:

    İlk geçişte, her eleman için solundaki çarpımları hesaplıyoruz (soldan sağa geçiş).
    İkinci geçişte, her eleman için sağındaki çarpımları hesaplayıp mevcut result dizisiyle çarpıyoruz (sağdan sola geçiş).

Böylece diziyi sadece iki kez dolaşarak, yani O(n) zaman karmaşıklığıyla sonucu elde ediyoruz.

Eğer sağ ve sol çarpımlar yöntemi yerine her eleman için ayrı ayrı tüm çarpımları hesaplamaya çalışsaydık, her eleman için diğer elemanların çarpımını tek tek hesaplamamız gerekecekti. Bu da O(n²) zaman karmaşıklığına yol açar ve büyük veriler için performans sorunlarına neden olur.