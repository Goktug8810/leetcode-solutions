ALAN KARMAŞIKLIĞI (SPACE COMPLEXITY)

Alan karmaşıklığı, bir algoritmanın çalışması sırasında ne kadar ekstra bellek kullandığını ifade eder.
Giriş büyüklüğüne göre algoritmanın ne kadar alan (bellek) tükettiğini analiz eder.

 Bellek kullanımı genellikle iki temel kategoriye ayrılır:
 -Variables
 -Data Structures

Algoritmaların çalışırken kullandığı bellek türleri ise:
-Açık(Explicit) Bellek Kullanımı
-Örtük(Implicit) Bellek Kullanımı


Açık bellek kullanımı, algoritmanın açıkça ve doğrudan bellekte yer ayırdığı her türlü yapı için geçerlidir.
Bu belleği yönetmek, kodun içinde doğrudan görünür ve kontrol edilebilir.
Örneğin, bir değişken veya veri yapısı bellekte belirli bir alan kapladığında, bu açık bellek kullanımıdır.

Açık Bellek Kullanımı Örnekleri:

-Değişkenler (Variables): Bir algoritmada sabit veya dinamik değişkenlerin tanımlanması, açık bellek kullanımına örnektir.
Her değişken, bellekte bir yer kaplar ve bu belleğin boyutu değişkenin tipine ve sayısına bağlıdır.

#Sabit sayıda değişkenler: Sabit sayıda kullanılan değişkenlerin bellekte kapladığı alan, giriş boyutuna bağlı olmadan sabit kalır.
int x = 5;
int y = 10;

Yukarıdaki kodda x ve y isimli iki değişken sabit bellekte yer kaplar. Bu bellek kullanımı doğrudan tanımlanmış ve kodda görünür olduğu için açık bellek kullanımıdır.


#Dinamik olarak tanımlanan değişkenler: Girdi boyutuna bağlı olarak dinamik veri yapıları oluşturulduğunda, bu veri yapılarının bellekteki yeri de açık bellek kullanımıdır.
int arr[n];

arr isimli dizinin boyutu n'ye bağlıdır. n değeri arttıkça dizi daha fazla bellek kullanır. Bu açık bir bellek kullanım şeklidir, çünkü dizinin boyutu ve bellekte kapladığı alan kodda açıkça belirtilmiştir.

-Veri Yapıları (Data Structures): Algoritmaların işleyişi sırasında kullanılan veri yapıları (örneğin diziler, bağlı listeler, ağaçlar, grafikler) da açık bellek kullanımıdır. Çünkü bu veri yapıları kodun içinde tanımlanmış ve bellekte ayrılmış alanlara sahiptir.

#Dizi (Array): Girdi boyutuna bağlı olarak bellekte belirli bir alan kaplar. Bu açık bir bellek kullanımıdır çünkü dizinin boyutu ve yapısı kodda net bir şekilde tanımlıdır.
int arr[100];
Bu dizi 100 elemanlık bir belleği kullanır.


Örtük bellek kullanımı, algoritmanın arka planda kullandığı ve genellikle doğrudan kontrol edemediğimiz bellek kullanımını ifade eder.
Bu bellek, algoritmanın işleyişi sırasında dolaylı olarak ortaya çıkar. En yaygın örtük bellek kullanımı, özyinelemeli işlemler sırasında oluşan geri çağırma yığınları (call stack) ile ilgilidir.

Açık Bellek Kullanımı Örnekleri:

#Özyineleme (Recursion): Özyinelemeli fonksiyonlar çalıştığında her fonksiyon çağrısı, bellekte bir geri çağırma yığını (call stack) oluşturur.
Bu yığın, her çağrıda ek bellek kullanır ve bu belleği doğrudan kontrol edemeyiz. Bu, örtük bellek kullanımına örnektir.

void recursiveFunction(int n) {
    if (n == 0) return;
    recursiveFunction(n - 1);
}
n her seferinde 1 azaltıldıkça, her çağrı bellekte yeni bir geri çağırma yığını açar. Bu yığınlar örtük bellekte yer kaplar, çünkü bu bellek kullanımı doğrudan tanımlanmaz; yalnızca özyineleme işlemi sırasında otomatik olarak oluşur.


#Fonksiyon Çağrıları: Her fonksiyon çağrısı sırasında, bellekte bir geri çağırma yığını oluşur ve bu yığın bellek tüketir.
Eğer çok sayıda fonksiyon çağrısı içeren bir algoritma çalışıyorsa, bu çağrıların her biri bellekte bir yığın oluşturur.
Özyineleme durumunda olduğu gibi, bu çağrı yığınları da örtük bellek kullanımı oluşturur.

Implicit Bellek Kullanımında #1 ve #2 analiz edilerek önemli bir ayırdım :

#1
int add(int x, int y) {
    int result = x + y;
    return result;
}

int main() {
    int x = 5;
    int y = 6;
    int sum = add(x, y);
    return 0;
}
#1

#1 için Bellek Kullanımı Analizi:
Değişkenler (Variables) ve Açık Bellek Kullanımı:

    x ve y: Fonksiyonda x ve y değişkenleri tanımlanır ve bunlar sabit bellekte yer kaplar. Bu değişkenler integer (tam sayı) tipindedir ve bellekte her biri için sabit bir alan ayrılır (genellikle 4 byte).
    result: Fonksiyon içinde x ve y'nin toplamı result değişkeninde tutulur. Bu da sabit bellekte yer kaplar ve başka bir integer değişkeni olduğundan yine 4 byte'lık bir yer kullanır.
    Sonuç olarak: x, y ve result değişkenlerinin bellekte kapladığı alanlar açık bellek kullanımıdır, çünkü bu değişkenlerin kullanımı ve bellekte ne kadar yer kapladığı kod içinde açıkça tanımlıdır.

Örtük Bellek Kullanımı (Yok):

    Bu örnekte özyineleme (recursion) veya karmaşık fonksiyon çağrı yığınları yoktur. Her fonksiyon çağrısı normal şekilde yapılıp sonlandırılır. Dolayısıyla, bellekte geri çağırma yığınları (call stack) gibi örtük bir bellek kullanımı söz konusu değildir.

#2
// Negatif sayı kontrol fonksiyonu
bool isNegative(int num) {
    return num < 0;
}

// Toplama fonksiyonu ve negatiflik kontrolü
int addAndCheck(int x, int y) {
    int result = x + y;

    // Negatif mi değil mi kontrolü
    if (isNegative(result)) {
        std::cout << "Sonuç negatif.";
    } else {
        std::cout << "Sonuç pozitif.";
    }

    return result;
}

int main() {
    int x = 5;
    int y = -10;
    int sum = addAndCheck(x, y);
    return 0;
}
#2 için Bellek Kullanım Analizi
Açık (Explicit) Bellek Kullanımı:

    Değişkenler (Variables):
        x, y, ve result değişkenleri bellekte sabit bir yer kaplar. Bunlar integer (tamsayı) türünde olduğu için her biri genellikle 4 byte yer kaplar.
        isNegative fonksiyonu çağrıldığında, o fonksiyonun aldığı parametre (num) de bellekte bir değişken olarak tutulur ve bu da açık bellek kullanımıdır.
    Bu değişkenler ve işlemler açık bellek kullanımıdır, çünkü kodda net olarak tanımlanmıştır ve bellekte ayrılan alan doğrudan kontrol edilebilir.

2. Örtük (Implicit) Bellek Kullanımı:

    Fonksiyon Çağrısı Yığınları (Call Stack): Burada örtük bellek kullanımı devreye girer. Bir fonksiyonun başka bir fonksiyonu çağırması, bellekte bir geri çağırma yığını (call stack) oluşturur.
        addAndCheck fonksiyonu çağrıldığında, bu fonksiyon çalışırken bellekte o fonksiyon için bir geri çağırma yığını oluşur.
        addAndCheck fonksiyonu içinde isNegative fonksiyonu çağrıldığında, bu yeni bir geri çağırma yığını oluşturur. Yani her fonksiyon çağrısı için bellekte ek bir yer açılır.
    Bu geri çağırma yığınları (call stack) otomatik olarak yönetilir ve biz kodda doğrudan bu belleği kontrol etmeyiz. Bu yüzden geri çağırma yığınları, örtük bellek kullanımı örneğidir.

#2

!! Bu noktada sorulabilecek bir soru,
#1'de de bir fonksiyon başka bir fonksiyonu çağırıyor olmasına rağmen, neden örtülü bellek kullanımı yok diye analiz ediliyor ?

Tek Fonksiyon Çağrısı: #1'de, add() fonksiyonu sadece bir kez çağrılıyor ve çağrı tamamlandığında bellekteki yığın temizleniyor. Yani, fonksiyon bittiğinde geri çağırma yığını ortadan kalkıyor. Örtük bellek kullanımı genellikle, bir fonksiyonun tekrar tekrar çağrıldığı (özellikle özyinelemeli fonksiyonlarda) veya çok sayıda iç içe çağrı olduğunda önemli hale gelir.

Sabit Bellek Kullanımı: Buradaki fonksiyon çağrısı sabit bir bellek kullanır ve algoritmanın karmaşıklığına ciddi bir etkisi olmaz. Yani, her fonksiyon çağrısı için kullanılan bellek sabit ve sınırlıdır (sadece bir çağrı yığını oluşturulur ve iş tamamlanınca yığın temizlenir).

Özyineleme Yok: Bu örnekte bir özyineleme (recursion) yok. Özyineleme sırasında, her çağrı bir sonrakini tetikler ve her çağrı bellek üzerinde yeni bir geri çağırma yığını oluşturur. Bu, bellekte zincirleme bir yığın kullanımı anlamına gelir ve örtük bellek kullanımı artar. Ancak burada, add() fonksiyonu çağrılıp tamamlanıyor, bu yüzden zincirleme bir bellek kullanımı veya derin yığın oluşumu yok.

VARILAN SONUÇ
Evet, burada geri çağırma yığını var, çünkü bir fonksiyon başka bir fonksiyonu çağırıyor. Ancak bu belirgin bir örtük bellek kullanımı olarak değerlendirilmez çünkü:

    Tek bir çağrı yapılıyor ve bu çağrı bittiğinde bellek temizleniyor.
    Zincirleme bir yığın oluşturma durumu yok.
    Özyineleme gibi derin fonksiyon çağrılarının olmadığı, basit ve sınırlı bir bellek kullanımı söz konusu.


Peki o zaman #2'de neden var ?
    main() fonksiyonu, addAndCheck() fonksiyonunu çağırır.
        Bu çağrı sırasında addAndCheck() için bellekte bir geri çağırma yığını oluşturulur.
        Yığında x, y, ve result gibi yerel değişkenler tutulur.
    addAndCheck() fonksiyonu, isNegative() fonksiyonunu çağırır.
        Bu yeni çağrı sırasında, isNegative() fonksiyonu için bellekte bir geri çağırma yığını daha oluşturulur.
        Bu yığında yalnızca num parametresi tutulur.

Bu durumda iki fonksiyon çağrısı (nested function call) olduğu için, geri çağırma yığını birden fazla kez oluşturulur.
main(), addAndCheck(), ve isNegative() çağrıları sırasında bellekte farklı yığınlar oluşur.

Fonksiyonlar İç İçe Çağrılıyor:

    addAndCheck() fonksiyonu çalışırken, içinde isNegative() fonksiyonu çağrılır. Bu fonksiyonun çağrısı sırasında bellekte geçici olarak ikinci bir geri çağırma yığını oluşturulur. Ancak bu yığın, isNegative() fonksiyonu tamamlandığında otomatik olarak temizlenir.
    Örtük bellek kullanımı, bu fonksiyonlar arasında oluşan geri çağırma yığınlarının geçici bellekte kapladığı alandır. Ancak bu yığınlar, fonksiyonlar tamamlandığında hemen bellekten temizlenir.

Fonksiyon Zincirlemesi:

    Örtük bellek kullanımı, özellikle bir fonksiyonun başka bir fonksiyonu çağırdığı durumlarda devreye girer. Yani, addAndCheck() fonksiyonu içinde isNegative() çağrıldığında, bu geçici bellek kullanımı bir yığın zinciri oluşturur.
    Her bir fonksiyon çağrısında geçici bir bellek kullanımı vardır, ancak bu minimal seviyededir ve fonksiyon çağrısı bittiğinde hemen temizlenir.

--------------------------------------------------------------------------------------------------


Açık (Explicit) Bellek Kullanımı:
Algoritmanın doğrudan kullandığı bellek alanlarıdır.
Bu genellikle değişkenler ve veri yapıları (diziler, bağlı listeler, ağaçlar) ile olur.
Bu tür bellek kullanımı kodda açıkça görülebilir ve kontrol edilebilir.


Örtük (Implicit) Bellek Kullanımı:
Algoritmanın dolaylı olarak kullandığı bellek alanlarıdır.
Bu genellikle özyineleme (recursion) sırasında ortaya çıkan geri çağırma yığınlarıdır.
Bu bellek kullanımı doğrudan kontrol edilemez, çünkü algoritmanın işlemleri sırasında otomatik olarak oluşur.


---------------------------------------------------------------------------------------------

Alan karmaşıklığı da genellikle Big O notasyonu ile ifade edilir.
Alan karmaşıklığı hesaplanırken kullanılan bellek, algoritmanın girdi boyutuna göre nasıl değiştiğine bağlı olarak analiz edilir.

Alan Karmaşıklığı Türleri:

O(1) - Sabit Alan Karmaşıklığı: Bellek kullanımı sabittir, girdi büyüklüğü ne olursa olsun değişmez.
O(n) - Doğrusal Alan Karmaşıklığı: Bellek kullanımı girdi büyüklüğü ile orantılı olarak artar.
O(log n) - Logaritmik Alan Karmaşıklığı: Bellek kullanımı logaritmik olarak artar.
O(n^2) - Karesel Alan Karmaşıklığı: Bellek kullanımı, girdi büyüklüğünün karesi ile orantılı olarak artar.

ÖRNEKLER

#1
O(1) - Sabit Alan Karmaşıklığı
Sabit alan karmaşıklığında, bellek kullanımı sabittir ve girdi boyutundan bağımsızdır.
Yani n ne kadar büyük olursa olsun, algoritma aynı miktarda bellek kullanır.

int add(int x, int y) {
    int result = x + y;
    return result;
}
Formülizasyon:
Bu fonksiyon içinde sadece 3 değişken var: x, y, ve result.
Her bir değişken bellekte sabit miktarda yer kaplar (örneğin her biri 4 byte olabilir).
Girdinin boyutuna bağlı olmaksızın, bellek kullanımı sabittir.

Formül:
Bellek Kullanımı (T.O.) = 1 (x) + 1 (y) + 1 (result) = 3
Bu sabit olduğu için Big-O notasyonu O(1)'dir.

Yani, bellekte her zaman sabit miktarda yer ayrılır, bu da O(1) anlamına gelir.
#1

#2
O(n) - Doğrusal Alan Karmaşıklığı
Doğrusal alan karmaşıklığında, bellek kullanımı girdi boyutuna bağlı olarak doğrusal biçimde artar. Bellek tüketimi, genellikle bir dizi veya liste gibi veri yapılarının boyutuna bağlıdır.

void createArray(int n) {
    int arr[n];  // n elemanlı bir dizi oluşturuluyor.
    for (int i = 0; i < n; i++) {
        arr[i] = i * 2;
    }
}

Formülizasyon:
Burada n elemanlı bir dizi (arr) bellekte yer kaplar.
Dizide her bir eleman için sabit bir bellek alanı ayrılır (örneğin, her eleman 4 byte).
Bellek kullanımı dizinin boyutuna, yani n'ye bağlıdır.

Formül:
Bellek Kullanımı (T.O.) = n (arr dizisi elemanları)
Bu doğrusal bir büyüme olduğu için Big-O notasyonu O(n)'dir.

Yani, dizinin boyutu n arttıkça, bellek kullanımı da doğrusal olarak artar.
#2

#3
O(log n) - Logaritmik Alan Karmaşıklığı
Logaritmik alan karmaşıklığı genellikle özyinelemeli (recursive) algoritmalarda görülür.
Her özyineleme çağrısı sırasında bellekte bir geri çağırma yığını oluşur, ancak burada girdi boyutu her adımda yarıya indirildiği için bellekteki büyüme logaritmik olur.

void logRecursion(int n) {
    if (n <= 1) {
        return;
    }
    logRecursion(n / 2);
}

Formülizasyon:
Bu özyinelemeli fonksiyon, her çağrıda n değerini yarıya indiriyor.
Bellekteki her geri çağırma yığını için bir fonksiyon çağrısı yapılır ve her çağrı sırasında yeni bir yığın eklenir.
Ancak her adımda n yarıya indiği için toplamda log₂(n) adım yapılır.

Formül:
Bellek Kullanımı (T.O.) = log₂(n)
Bu logaritmik bir büyüme olduğu için Big-O notasyonu O(log n)'dir.

Yani, her seferinde n değeri yarıya indiği için toplam bellek kullanımı logaritmik olarak artar.

#3

#4
O(n²) - Karesel Alan Karmaşıklığı
Karesel alan karmaşıklığında, bellek kullanımı girdi boyutunun karesi ile doğru orantılı olarak artar. Genellikle iki boyutlu dizilerde (matrislerde) bu tür bir büyüme görülür.

void createMatrix(int n) {
    int matrix[n][n];  // n x n boyutunda bir matris oluşturuluyor.
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }
}

Formülizasyon:
Bu kodda, bellekte n x n boyutunda bir matris (matrix) oluşturuluyor.
Matrisin her bir elemanı için sabit bir bellek alanı ayrılır.
Matrisin boyutu n x n olduğu için bellek kullanımı karesel olarak artar.

Formül:
Bellek Kullanımı (T.O.) = n (satırlar) × n (sütunlar) = n²
Bu karesel bir büyüme olduğu için Big-O notasyonu O(n²)'dir.

Yani, matrisin boyutu arttıkça bellek kullanımı n² olarak artar.
#4

#5
O(n log n) - Lineer Logaritmik Alan Karmaşıklığı
Lineer logaritmik alan karmaşıklığı genellikle bazı sıralama algoritmalarında veya birden fazla aşamalı işlemlerde görülür.

void mergeSort(int arr[], int temp[], int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        mergeSort(arr, temp, left, mid);
        mergeSort(arr, temp, mid + 1, right);
        merge(arr, temp, left, mid, right);
    }
}

Formülizasyon:
Merge Sort gibi algoritmalarda, veri kümesi her seferinde ikiye bölünür ve daha küçük parçalar halinde sıralanır.
Bu algoritma aynı zamanda geçici bir dizi (temp[]) kullanır, bu da ek bellek kullanımı anlamına gelir.
Hem n elemanlı diziyi saklamak, hem de her adımda log n adımda sıralama işlemi yapmak gerektiği için bellek kullanımı O(n log n)'dir.

Formül:
Bellek Kullanımı (T.O.) = n (geçici dizi) + log n (sıralama adımları) = n log n
Bu hem lineer hem de logaritmik bir büyüme olduğu için Big-O notasyonu O(n log n)'dir.
#5


Genel Özet ve Formülizasyon:

O(1): Sabit bellek kullanımı, girdi boyutuna bağlı değildir.
    Formül: Bellek Kullanımı = Sabit Değişkenlerin Sayısı
    Örnek: T.O. = 1 + 1 + 1 = 3

O(n): Bellek kullanımı girdi boyutuyla doğrusal olarak artar.
    Formül: Bellek Kullanımı = n × (Her Eleman için Sabit Bellek Miktarı)
    Örnek: T.O. = n × (1) = n

O(log n): Bellek kullanımı logaritmik olarak artar, özellikle özyineleme ve veri bölme işlemlerinde görülür.
    Formül: Bellek Kullanımı = log₂(n)
    Örnek: T.O. = log₂(n)

O(n²): Bellek kullanımı girdi boyutunun karesiyle artar.
    Formül: Bellek Kullanımı = n × n = n²
    Örnek: T.O. = n²

O(n log n): Bellek kullanımı hem lineer hem de logaritmik olarak artar.
    Formül: Bellek Kullanımı = n × log n
    Örnek: T.O. = n × log n