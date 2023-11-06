<h1>Timus FullStack Bootcamp Ödev 1-2</h1>

1. Soru:

2. Soru:
    
    Java ve JavaScript arasındaki temel farklar: Java bir OOP programlama dilidir, Java Script bir OOP komut listesi oluşturma dilidir. Java, sanal makinede veya tarayıcıda çalışan uygulamalar oluşturur, JavaScript kodu sadece tarayıcıda çalıştırılır. Java kodunun derlenmesi gerekir, JavaScript kodları metinlerden oluşur.

3. Soru:
    
    JavaScript veri tipleri 'İlkel (Primitive)' ve 'İlkel Olmayan (Reference)' Veri Tipleri olmak üzere ikiye ayrılır.
        <ul style="list-style-type:disc"><li><b>İlkel (Primitive) Veri Tipleri:</b> Nesne dışındaki bütün veri tipleri sonradan değiştirilemez değerler tanımlar. Bu tipteki değerler ilkel değerler (primitive values) olarak tanımlanır.</li></ul>
            <dd><ul style="list-style-type:circle">
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>Undefined</li>
            <li>Null</li>
            <li>Symbol</li></ul></dd>
        <ul style="list-style-type:disc"><li>İlkel Olmayan (Reference) Veri Tipleri: Genel olarak Reference veri türlerine Objects denir. Nesne türü özel bir tür olarak geçer. Diğer tüm türler “ilkel” olarak adlandırılır çünkü değerleri yalnızca tek bir şey içerebilir (bir metin veya sayı vb.). Aksine, nesneler veri koleksiyonlarını ve daha karmaşık varlıkları depolamak için kullanılır.</li></ul>
            <dd><ul style="list-style-type:circle">
            <li>Object</li>
            <li>Array</li>
            <li>Function</li></ul></dd>

4. Soru: 
    
    undefined, o şeyin hiçbir fikrinin olmadığı yerdir; türü yok ve bu kapsamda daha önce hiç referans alınmadığı, “değer yok” anlamına gelir. Başlatılmamış değişkenler, eksik parametreler ve bilinmeyen değişkenler bu değere sahiptir. null, varlığın bilindiği yer, ancak değerin ne olduğu bilinmemektedir.

5. Soru:
    
    JavaScript ile bir değişkenin sayı olup olmadığını NaN anahtar kelimesiyle öğrenebiliriz. Sayısal bir değer sayısal olmayan bir değerle işlem yapılırsa JavaScript NaN sonucunu verir. Metin veri türü içindeki değer sayı olursa sonuç sayı değeri olacaktır.

6. Soru:
    
    JavaScript'te yorum satırı eklemenin iki yolu vardır.
    <p>// kullanarak tek satıra yorum yazabiliriz. //'den sonra aynı satıra yazılanlar JavaScript yorumlayıcısı tarafından kod olarak değerlendirilmez.</p>
    <p>Diğer bir yorum türü ise çok satırlı yorumdur. /* ile başlar ve */ ile biter. Aradaki hiçbir şey kod olarak kabul edilmez.</p>

7. Soru:
    
    Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen değişken tipidir. Global olarak tanımlı bir değişkene dosya içerisinde her yerden erişilebilir. Bu değişkenlere de global değişken adı verilir. Uygulama içerisinde çok fazla global değişken kullanımı önerilmez. Çünkü local değişkenler işi bitince bellekten silinir ancak global değişkenler varlığını sürdürmeye devam eder. Bu durum da ileride memory(bellek) sorunlarına yol açabilir.

8. Soru:
    
    JavaScript'teki 'this' anahtar kelimesi, bir fonksiyonun içinde kullanıldığında, o anda çalıştırılan fonksiyonun bağlı olduğu nesneyi (objeyi) temsil eden özel bir anahtar kelimedir.
    Nerede kullanıldığına bağlı olarak farklı değerler alabilir;
    <ul style="list-style-type:disc">
    <li>Bir metot içerisinde kullanıldığı zaman ait olduğu nesneyi temsil eder.</li>
    <li>Tek başına kullanıldığı zaman global bir nesneyi temsil eder.</li>
    <li>Bir fonksiyon içerisinde kullanılırsa global bir nesneyi ifade eder.</li>
    <li>Eğer katı modda bir fonksiyonun içerisinde kullanılırsa undefined yani tanımsız değerini döndürür.</li>
    <li>Bir olayda (tıklama, çift tıklama gibi) olayın gerçekleştiği elementi temsil eder.</li>
    </ul>

9. Soru:
    
    İki eşittir ve üç eşittir arasındaki en temel fark tip ve değer karşılaştırmasıdır. Üç eşittir kullandığınızda iki değerin hem tipini hem de değerini karşılaştırırken iki eşittir ise değerlerin tiplerini eşitleyerek sadece değer karşılaştırması yapar.
        var num = 0;					                var num = 0;
        var obj = new String('0');			            var obj = new String('0');
        var str = '0';					                var str = '0';

        console.log(num == num); // true	            console.log(num === num); // true
        console.log(obj == obj); // true	            console.log(obj === obj); // true
        console.log(str == str); // true	            console.log(str === str); // true

        console.log(num == obj); // true	            console.log(num === obj); // false
        console.log(num == str); // true	            console.log(num === str); // false
        console.log(obj == str); // true	            console.log(obj === str); // false
        console.log(null == undefined); // true	        console.log(null === undefined); // false

10. Soru: 
    Var: Global scope'ta tanımlıdır. Daha sonra değiştirilebilir ve aynı değişken tekrar tanımlanabilir.
    Let: Block scope'ta tanımlıdır. Daha sonra değiştirilebilir ama aynı değişken tekrar tanımlanamaz.
    Const: Block scope'ta tanımlıdır. Daha sonra değiştirilemez ve aynı değişken tekrar tanımlanamaz.

	<table style="width:100%">
    <tr>
    <th>Anahtar Kelime</th>
    <th>Scope</th> 
    <th>Değiştirilebilme</th>
    <th>Tekrar Tanımlanabilme</th>
    </tr>
    <tr>
    <td>var</td>
    <td>Global Scope</td>
    <td>Değiştirilebilir</td>
    <td>Tekrar Tanımlanabilir</td>
    </tr>
    <tr>
    <td>let</td>
    <td>Block Scope</td>
    <td>Değiştirilebilir</td>
    <td>Tekrar Tanımlanamaz</td>
    </tr>
    <tr>
    <td>const</td>
    <td>Block Scope</td>
    <td>Değiştirilemez</td>
    <td>Tekrar Tanımlanamaz</td>
    </tr>
    </table>

11. Soru:
    
    - Normal fonksiyonlarda fonksiyon parametre almasa dahi ( ) işaretlerini kullanmak zorundayız fakat arrow fonksiyonlarda bunun içinde kolaylık sağlanmış. Eğer tek bir parametremiz varsa ( ) kullanmamıza gerek kalmıyor. Fonksiyon parametre almıyorsa ( ) yerine _ kullanabiliyoruz. İki veya ikiden fazla parametre var ise mecbur ( ) kullanmak zorundayız.
    - Normal fonksiyonlardan farklı olarak arrow fonksiyonlarda return anahtar kelimesi kullanılmadan da geriye değer döndürülebilir. Bunun için kodun yalnızca bir satırdan oluşması ve süslü parantez içine alınmaması gerekir. Eğer birden fazla satır varsa kod, süslü parantez içerisine alınmalı ve return anahtar kelimesi kullanılmalıdır.
    - Arrow fonksiyonu normal fonksiyondan ayıran en önemli özelliklerden bir diğeri ise this anahtar kelimesidir. this anahtar kelimesi nerede çağırıldığına bağlı olarak değeri değişebilir. Arrow fonksiyonlarda this, fonksiyon nasıl çağrılırsa çağrılsın asla yeni bir değere bağlanmaz. this her zaman onu çevreleyen kodun this değeriyle aynı değerde olacaktır.

12. Soru:

        var i = 1;
        switch ( i ){
        case 1:
            var a = 1;
            alert(a);
            break;
        case 2:
            .
            .
            .
            break;
        .
        .
        .
        default:
            ...
        }

13. Soru:
    
    Saf fonksiyonlar kendi argümanlarına bağlı olarak yeni bir değer döndüren fonksiyonlardır.
    Veritabanı yada io gibi yan etkilere sahip istekler içermezler.
    Sadece argümanlarına bağlı yeni bir değer hesaplaması yaparlar.
    Aynı argümanlarla birden fazla kere çağrıldığında hep aynı değeri döndürür.
    Ayrıca argümanların değerlerini değiştirmezler. Bunun yerine yeni bir değer döndürürler.

14. Soru:
    
    Rest Parametresi, fonksiyonlara sınır sayısı olmadan parametre geçmemize olanak verir ve bizim isteğimiz harici kalan tüm öğeleri bir dizide toplar.
 
    <p>Örneğin, birden fazla argüman alan bir fonksiyonumuz olduğunu düşünelim ve sadece geçirilen ilk argümanla ilgilendiğimizi ancak geri kalanını sonrası için saklamak istediğinizi varsayalım:</p>

        function sum(a,b,...remaining){  
            console.log(a); // 1
            console.log(b); // 2
            console.log(remaining); // [3,4,5,6,7]
        }
 
        sum(1,2,3,4,5,6,7);

    Yukarıdaki örnekte, üç noktayı (...) Rest Parametresi olarak kullanıyoruz ve fonksiyona gönderilen parametre içerisinden a ve b olarak 1. ve 2. parametreyi aldıktan sonra kalanları bir dizide topluyoruz, iletilen diğer tüm argümanlar artık remaining adlı dizide saklanmaktadır. Bu teknik özellikle iletilecek argümanların sayısını bilmediğinizde kullanışlı olmaktadır.

15. Soru:

    Destructuring Assignment, elimizde var olan nesne veya dizi gibi yapılardan(bu yapılar çok büyük olabilir) küçük parçalar ayırmak için kullanılır. Destructuring assignment işlemi değer atama işlemi gibi yapılır. Kaynak nesne veya diziden alınmak istenen değerler eşitliğin sol tarafına yazılır.

        var bir, iki, digerSayilar;
            [bir,iki] =[1,2];
            console.log (bir);
            console.log(iki);

        [bir,iki,...digerSayilar] = [1,2,3,4,5,6];
        console.log(digerSayilar);

16. Soru:

    <b>1. Yöntem</b>

        let obj = { 
            nesne1: "A Özelliği", 
            nesne2: "B Özelliği" 
        };
    
    <b>2. Yöntem</b>

        let obj = new Object();
        obj.nesne1 = "A Özelliği";
        obj.nesne2 = "B Özelliği";
    
    <b>3. Yöntem</b>

        let nesne1 = "A Özelliği";
        let nesne2 = "B Özelliği";
        let obj = { nesne1, nesne2 };
    
    <b>4. Yöntem</b>

        let obj = {};
        obj.nesne1 = "A Özelliği";
        obj.nesne2 = "B Özelliği";

    <b>5. Yöntem</b>

        let obj2 = { nesne1: "A Özelliği", nesne2: "B Özelliği" };
        let obj = Object.create(obj2);
    
    <b>6. Yöntem</b>

        let obj = Object.assign({}, { nesne1: "A Özelliği", nesne2: "B Özelliği" });

17. Soru:

18. Soru:

    <table style="width:100%">
    <tr>
    <th>Özellik</th>
    <th>Cookie</th> 
    <th>Local Storage</th>
    <th>Session Storage</th>
    </tr>
    <tr>
    <td>Max Veri Boyutu</td>
    <td>4 KB</td>
    <td>5 MB</td>
    <td>5 MB</td>
    </tr>
    <tr>
    <td>Adresten Erişilebilme</td>
    <td>Sunucu & İstemci Tarafı</td>
    <td>Sadece İstemci Tarafı</td>
    <td>Sadece İstemci Tarafı</td>
    </tr>
    <tr>
    <td>Temizleme / Silme</td>
    <td>PHP, JavaScript ve Otomatik</td>
    <td>Sadece JavaScript</td>
    <td>JavaScript ve Otomatik</td>
    </tr>
    <tr>
    <td>Veri Tutma Süresi</td>
    <td>Belirlenen Süre Boyunca</td>
    <td>Silinene Kadar</td>
    <td>Sekme Kapanana Kadar</td>
    </tr>
    <tr>
    <td>Her HTTP İsteğinde Veri Aktarımı</td>
    <td>Evet</td>
    <td>Hayır</td>
    <td>Hayır</td>
    </tr>
    </table>

19. Soru:

    Senkron programlamada bir fonksiyon bitmeden diğeri çalışmaya başlamaz, yani birbirlerini beklerler. Bekleyen fonksiyonun cevabı dönmeden diğerine geçilmez. Fakat asenkron fonksiyonlar aynı anda çalışmaya başlarlar ve birbirlerinin sonucunu beklemeden çalışmaya devam ederler. Hangisinin sonucu önce çıkarsa o sonuç gösterilir.

20. Soru:

    Promise aslında Türkçe çevirisinden de anlayabileceğimiz üzerine sözdür. Mesela internetten bir sipariş veriyorsunuz.  Size bir sipariş sözü verildiğini biliyorsunuz yani elinize bir mesaj veya bir mal geçecek buna “promise”, buradan gelen bildirimi beklemeye “pending”, cevap başarılı yani sipariş size ulaşacak ise “resolved”, siparişiniz iptal olduysa “rejected” oluyor. Bu başarısız durumda da hata çözümleme(error-handling) yapılarak başka bir çözüm yoluna gidiliyor.

    <ul style="list-style-type:disc">
    <li>Promise olan bir değişkenin değeri değiştirilemez yani immutabledır.</li>
    <li>Sadece bir kere başarılı veya başarısız olurlar.</li>
    <li>Promise oluştururken bize iki adet işlev sunar bunlar resolve ve rejecttir.</li>
    <li>Resolve başarılı durumlar için, reject ise başarısız durumlar için kullanılır.</li>
    </ul>