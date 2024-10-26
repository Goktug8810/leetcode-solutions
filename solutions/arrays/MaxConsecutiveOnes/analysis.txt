ans = count Kullansaydık Ne Olurdu?

Eğer Math.max(ans, count) yerine ans = count kullanmış olsaydık:

    i = 3 konumunda 0 ile karşılaşıldığında count sıfırlanacaktı ve ans de 0 olurdu.
    Bu durumda, ardışık 1 dizisi kesildiğinde daha önceki maksimum 3 değerini ans'de saklayamazdık ve doğru sonucu kaybetmiş olurduk.

Bu yüzden Math.max(ans, count) kullanarak ans değerinin önceki en büyük değeri saklamasını sağlıyoruz.
Bu, her yeni 1 dizisi başladığında ans değerinin sadece daha büyük bir count değeri geldiğinde
güncellenmesini sağlar.

Zaman Karmaşıklığı: O(n) – nums dizisinin her elemanını bir kez ziyaret ediyoruz.
Alan Karmaşıklığı: O(1) – Sadece sabit sayıda değişken kullanılıyor (ans ve count), bu yüzden hafıza kullanımı sabit.

