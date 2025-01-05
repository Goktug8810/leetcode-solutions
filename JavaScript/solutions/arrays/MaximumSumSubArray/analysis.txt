Kadane's Algoritması,
bir dizideki ardışık elemanlardan oluşan en büyük alt diziyi bulmak için kullanılan bir algoritmadır.
Bu algoritma, dinamik programlama yaklaşımını kullanarak verimli bir şekilde çalışır ve zaman karmaşıklığı O(n)'dir.
Yani, diziyi sadece bir kez dolaşarak sonucu bulur.

Kadane'nin algoritması, bir dizideki alt diziler arasında en büyük toplamı bulurken,
her bir elemanı değerlendirerek o ana kadar bulunan en iyi sonucu takip eder.
Her adımda iki seçenekten birini yapar:

Yeni alt dizi başlatmak: Eğer o ana kadar hesaplanan toplam,
şu anki elemanla kıyaslandığında daha küçükse, o ana kadar biriken toplamı bırakıp yeni bir alt dizi başlatmak.
Mevcut alt diziye devam etmek: Eğer o ana kadar hesaplanan toplam,
şu anki elemanla birlikte büyümeye devam edebiliyorsa, mevcut toplamı devam ettirmek.

Kadane Algoritmasının Pseudocode'u:

Başlangıç: İlk eleman hem başlangıç toplamı hem de en büyük toplam olarak belirlenir.
Her Elemanı İşlemek:
    Her elemanı işlerken o ana kadar biriken toplamı günceller.
    Eğer o ana kadar biriken toplam, şu anki elemanla kıyaslandığında daha küçükse, o noktada yeni bir alt dizi başlatır.
    Her adımda o ana kadarki en büyük toplamı takip eder ve günceller.
Sonuç: Diziyi dolaştıktan sonra en büyük alt dizi toplamı bulunur.

Zaman ve Alan Karmaşıklığı:

Zaman Karmaşıklığı:
    Algoritma diziyi bir kez dolaşır ve her eleman üzerinde sabit bir işlem yapar.
    Bu yüzden zaman karmaşıklığı O(n)'dir.

Alan Karmaşıklığı:
    Kadane'nin algoritması sabit miktarda ek bellek kullanır: maxSum ve currentSum gibi değişkenler sabittir.
    Dolayısıyla alan karmaşıklığı O(1)'dir.