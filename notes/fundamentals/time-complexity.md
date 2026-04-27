
ZAMAN KARMAŞIKLIĞI(TIME COMPLEXITY)
 Zaman karmaşıklığı,bir algoritmanın çalışma süresinin girdi büyüklüğüyle nasıl değiştiğini ölçen
 bir kavramdır.Bu, algoritmanın daha büyük veri setleriyle nasıl performans göstereceğini anlamamıza
 yardımcı olur.

-İşlem sayma(Counting Operations)
-Big-O Notasyonu (Big-O Notation)

Zaman karmaşıklığı nasıl hesaplanır ?
-Genellikle işlem sayısına(kodu çalıştırdığımızda yapılan işlem adımları) bakılarak hesaplanır.
-Algoritmanın farklı girdilerdeki en kötü çalışma süresi (worst-case) dikkate alınır ve bu sürenin
girdiye göre nasıl değiştiği Big-O Notasyonu ile gösterilir.

Big-O Notasyonu(Zaman karmaşıklığı gösterimi)
-Algoritmaların performansını en kötü durumda ölçen bir matematiksel notasyondur.

Zaman Karmaşıklığı Türleri:
O(1) – Sabit Zaman Karmaşıklığı
O(log n) – Logaritmik Zaman Karmaşıklığı
O(n) – Doğrusal Zaman Karmaşıklığı
O(n log n) – Lineer Logaritmik Zaman Karmaşıklığı
O(n²) – Karesel Zaman Karmaşıklığı
O(2^n) – Üstel Zaman Karmaşıklığı
O(n!) – Faktöriyel Zaman Karmaşıklığı

Yayın Big-O Notasyonları:

O(1): Sabit zamanlı algoritma. Girdi boyutu ne olursa olsun, her zaman aynı sürede çalışır.
Örnek: Bir dizideki ilk elemana erişmek.

O(log n): Logaritmik zamanlı algoritma. Girdi boyutu arttıkça işlem sayısı çok az artar.
Örnek: İkili arama (binary search).

O(n): Doğrusal zamanlı algoritma. İşlem sayısı, girdi boyutuyla doğru orantılı olarak artar.
Örnek: Bir dizinin tüm elemanlarını gezmek.

O(n^2): Karesel zamanlı algoritma. Girdi boyutu iki katına çıktığında, işlem sayısı dört katına çıkar.
Örnek: İki iç içe döngüyle yapılan karşılaştırmalar (bubble sort).

O(2^n): Üstel zamanlı algoritma. Girdi boyutu arttıkça, işlem sayısı çok hızlı bir şekilde artar.
Örnek: Tüm olası alt kümeleri bulmak.

###################################################################################
# O(n) zaman karmaşıklığına sahip bir örnek: Bir dizideki en büyük sayıyı bulmak.

def find_max(arr):
    max_value = arr[0]  # O(1)
    for num in arr:  # O(n)
        if num > max_value:  # O(1)
            max_value = num  # O(1)
    return max_value  # O(1)

###################################################################################

Bu kodda, ilk elemanı kontrol etmek o(1) sürede yapılır, daha sonra tüm dizi üzerinde bir döngü kurulur,
bu döngüde her bir eleman bir kez kontrol edilir, bu yüzden zaman karmaşıklığı o(n) olur.

Zaman karmaşıklığı hesaplama örnekleri


#1
for(int i = 0; i < n; i++) {
    print(i);
}


for(int i = 0; i < n; i++): Burada i başlangıçta 0 olarak ayarlanmış ve her döngüde i bir artırılıyor (i++).
i, n değerine ulaşana kadar çalışıyor. Yani döngü n kere çalışıyor.

print(i): Her döngü adımında bir kez ekrana i değeri yazdırılıyor.
Bu işlem O(1) zaman alır çünkü sabit süreli bir işlemdir.

i = 0 başlatma işlemi: Bu sabit bir işlem olduğu için O(1).
i < n koşul kontrolü: Bu her döngü adımında yapılan bir karşılaştırma işlemidir ve n kere gerçekleşir. Bu da O(n) karmaşıklığına sahiptir.
i++ artırma işlemi: Bu işlem de her döngüde bir kere çalışır, bu yüzden O(n) olur.
print(i): Her döngü adımında bir kez çalıştırılır, bu da O(n) olur.

T.O=n×(1+1+1)+1
Buradaki (1+1+1) ifadesi, her döngü adımında yapılan üç sabit işlemi (karşılaştırma, artırma ve yazdırma) temsil eder.
+1 ifadesi ise döngü dışındaki başlangıç ve koşul işlemini kapsar.

Bu ifade T.O = 3n + 1 olarak sadeleştirilir

Big-O notasyonunda sabit terimler ve katsayılar (örneğin, 3 ve 1 burada sabit terimdir) genellikle göz ardı edilir.
Bu yüzden, karmaşıklık O(n) olarak ifade edilir.
Sonuçta bu döngünün zaman karmaşıklığı O(n) olur.
#1
-----------------------------------------------------------------

#2
for(int i = 0; i % 2 == 0; i++) {
    print(i);
}

for(int i = 0; i % 2 == 0; i++): Bu döngü, i değerinin 2'ye tam bölünüp bölünmediğini kontrol ediyor (i % 2 == 0 ifadesi),
yani i çift sayılar olduğu sürece çalışacak. Döngü her adımda i'yi bir artırıyor (i++)

i = 0 olduğunda koşul sağlanır çünkü 0 % 2 == 0 doğru olur.
Bu adımda bir kez print(i) çalışır ve i bir artırılır.
Bu işlem 1+1+1 olarak hesaplanır, çünkü bir kontrol (koşul), bir artırma ve bir yazdırma işlemi gerçekleşir

i = 1 olduğunda, koşul sağlanmaz çünkü 1 % 2 == 0 yanlıştır.
Bu durumda döngü durur (stop). Yani döngü sadece ilk adımda çalışır ve hemen durur.

Döngü sadece i = 0 için çalıştığından, bu durumda zaman karmaşıklığı O(1) olur.
Yani sabit bir zamanda tamamlanır, çünkü yalnızca bir adım çalışır ve daha sonra döngü sona erer

i = 0: Bir kontrol (koşul), bir artırma ve bir yazdırma işlemi yapılır.
T.O. = 1 (koşul) + 1 (arttırma) + 1 (yazdırma) = 3

i = 1 olduğunda koşul bozulur ve döngü durur, başka adım yoktur.

T.O. = 3
Big-O: O(1) (Sabit zaman karmaşıklığı, çünkü döngü sadece bir kez çalışır.)
#2
-----------------------------------------------------------------------------
#3
int i = 1;
while (i < n) {
    print(i);
    i = i * 2;
}

int i = 1;: i başlangıçta 1 olarak ayarlanmış.
while (i < n): Bu döngü, i değeri n'den küçük olduğu sürece çalışacak.
Her iterasyonda i iki katına çıkarılıyor (i = i * 2).
print(i);: Her iterasyonda i ekrana yazdırılıyor.

Bu döngü, i her seferinde iki katına çıkarıldığı için logaritmik şekilde çalışır. i değeri her adımda 1, 2, 4, 8, ... şeklinde büyür
Bu döngüde i her iterasyonda iki katına çıktığı için toplam iterasyon sayısı, n'yi 2'nin kuvveti olarak bölen bir sayı olacaktır.
T.O. = log(n) × (1 + 1 + 1)
T.O. = log(n) × 3 = 3 log(n)
T.O. = 3 log(n)
Big-O: O(log n) (Sabit katsayılar göz ardı edilir.)

Bu döngü, i'yi her adımda iki katına çıkardığı için logaritmik bir büyüme sergiler.
Zaman karmaşıklığı O(log n)'dir. Bu, n büyüdükçe döngünün çalışacağı adım sayısının çok yavaş bir şekilde arttığı anlamına gelir.
#3
--------------------------------------------------------------------------------------------

#4
for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        printf(i, j);
    }
}
Dış döngü (for i): i, 0'dan başlayarak n'e kadar artar. Bu döngü toplamda n kez çalışır.
İç döngü (for j): j, 0'dan başlayarak m'e kadar artar. Dış döngü her çalıştığında, iç döngü baştan sona m kez çalışır.
Yani iç döngü, dış döngünün her iterasyonunda tekrar edilir.

İç ve dış döngü birlikte çalıştığında, her dış döngü için m kez iç döngü çalışır. Bu durumda, toplam iterasyon sayısı n * m olur.

Bu tür iç içe geçmiş döngülerde zaman karmaşıklığı O(n * m) olarak ifade edilir. Eğer n ve m aynı büyüklükteyse, zaman karmaşıklığı O(n²) olur.
Bu da girdinin büyüklüğüne göre oldukça hızlı bir artışı ifade eder, özellikle n ve m büyük değerler aldığında algoritmanın performansı düşer.

T.O. = n × (m × (1 + 1 + 1))
T.O. = n × (m × 3)
T.O. = 3nm
T.O. = 3nm
Big-O: O(n * m) (Sabit katsayılar göz ardı edilir.)
#4

EK BİLGİLER
"Zaman karmaşıklığı O(log n)'dir. Bu, n büyüdükçe döngünün çalışacağı adım sayısının çok yavaş bir şekilde arttığı anlamına gelir"
Bu cümlenin örnekle açıklanması
Eğer zaman karmaşıklığınız O(n) olsaydı, n = 100 olduğunda 100 adım, n = 1.000.000 olduğunda 1.000.000 adım çalıştırılması gerekirdi. Yani, n büyüdükçe çalışma süresi hızla artardı.
Ancak O(log n) olan bir algoritmada, örneğin n = 1.000.000 olduğunda döngü sadece log₂(1.000.000) yani yaklaşık 20 kez çalışır. n'in 1.000.000 kat artmasına rağmen döngü adımları yalnızca 20 adım civarında çalışacaktır.

n büyüdükçe adım sayısının çok yavaş bir şekilde artması, logaritmik büyüme nedeniyle adım sayısının sadece çok küçük miktarda artacağı anlamına gelir. Bu da logaritmik karmaşıklığa sahip algoritmaların büyük verilerde bile oldukça hızlı çalıştığını gösterir.

Adım Sayısının Yavaş Artmasının Önemi:

Olumlu Yanı:
-Verimlilik: O(log n) gibi düşük karmaşıklığa sahip algoritmalar, büyük veri kümeleri üzerinde çok daha hızlı sonuç verirler. Örneğin, bir veri yapısında 1 milyon elemanınız varsa, O(log n) bir algoritma sadece 20 adımda sonuca ulaşabilirken, O(n) bir algoritma 1 milyon adım atmak zorunda kalır.
-Büyük Veri Kümesiyle Çalışma: Büyük veri kümelerinde performans kritik bir faktördür. Logaritmik büyümeye sahip algoritmalar, çok büyük veri kümeleri için bile hızlı çalışabilir ve bu da onların en büyük avantajıdır.

Olumsuz Yanı:

Basit İşlemlerde O(n) Tercih Edilebilir: Küçük veri kümelerinde O(n) gibi daha basit algoritmalar yeterince hızlıdır ve logaritmik algoritmaların karmaşıklığı gereksiz olabilir. Örneğin, birkaç eleman içeren bir dizide O(log n) arama yapmak yerine, O(n) ile tarama yapmak daha basit ve anlaşılır olabilir.
Uygulama ve Veri Yapısı Karmaşıklığı: O(log n) zaman karmaşıklığına sahip algoritmalar genellikle daha karmaşık veri yapıları (örneğin, ağaçlar, heap yapıları) gerektirir. Bu da uygulama sırasında veri yapılarının doğru yönetilmesini ve uygulamayı zorlaştırabilir. Daha basit ve küçük veri kümeleri için bu karmaşıklık gereksiz olabilir.

