1. Soru:

2. Soru:
    Java ve JavaScript arasındaki temel farklar: Java bir OOP programlama dilidir, Java Script bir OOP komut listesi oluşturma dilidir. Java, sanal makinede veya tarayıcıda çalışan uygulamalar oluşturur, JavaScript kodu sadece tarayıcıda çalıştırılır. Java kodunun derlenmesi gerekir, JavaScript kodları metinlerden oluşur.

3. Soru:
    JavaScript veri tipleri 'İlkel (Primitive)' ve 'İlkel Olmayan (Reference)' Veri Tipleri olmak üzere ikiye ayrılır.
        - İlkel (Primitive) Veri Tipleri: Nesne dışındaki bütün veri tipleri sonradan değiştirilemez değerler tanımlar. Bu tipteki değerler ilkel değerler (primitive values) olarak tanımlanır.
            - String
            - Number
            - Boolean
            - Undefined
            - Null
            - Symbol
        - İlkel Olmayan (Reference) Veri Tipleri: Genel olarak Reference veri türlerine Objects denir. Nesne türü özel bir tür olarak geçer. Diğer tüm türler “ilkel” olarak adlandırılır çünkü değerleri yalnızca tek bir şey içerebilir (bir metin veya sayı vb.). Aksine, nesneler veri koleksiyonlarını ve daha karmaşık varlıkları depolamak için kullanılır.
            - Object
            - Array
            - Function

4. Soru: 
    undefined, o şeyin hiçbir fikrinin olmadığı yerdir; türü yok ve bu kapsamda daha önce hiç referans alınmadığı, “değer yok” anlamına gelir. Başlatılmamış değişkenler, eksik parametreler ve bilinmeyen değişkenler bu değere sahiptir. null, varlığın bilindiği yer, ancak değerin ne olduğu bilinmemektedir.

5. Soru:
    JavaScript ile bir değişkenin sayı olup olmadığını NaN anahtar kelimesiyle öğrenebiliriz. Sayısal bir değer sayısal olmayan bir değerle işlem yapılırsa JavaScript NaN sonucunu verir. Metin veri türü içindeki değer sayı olursa sonuç sayı değeri olacaktır.

6. Soru:
    JavaScript'te yorum satırı eklemenin iki yolu vardır.
        - // kullanarak tek satıra yorum yazabiliriz. //'den sonra aynı satıra yazılanlar JavaScript yorumlayıcısı tarafından kod olarak değerlendirilmez.
        - Diğer bir yorum türü ise çok satırlı yorumdur. /* ile başlar ve */ ile biter. Aradaki hiçbir şey kod olarak kabul edilmez.

7. Soru:
    Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen değişken tipidir. Global olarak tanımlı bir değişkene dosya içerisinde her yerden erişilebilir. Bu değişkenlere de global değişken adı verilir. Uygulama içerisinde çok fazla global değişken kullanımı önerilmez. Çünkü local değişkenler işi bitince bellekten silinir ancak global değişkenler varlığını sürdürmeye devam eder. Bu durum da ileride memory(bellek) sorunlarına yol açabilir.

8. Soru:
    JavaScript'teki 'this' anahtar kelimesi, bir fonksiyonun içinde kullanıldığında, o anda çalıştırılan fonksiyonun bağlı olduğu nesneyi (objeyi) temsil eden özel bir anahtar kelimedir.
    Nerede kullanıldığına bağlı olarak farklı değerler alabilir;
    - Bir metot içerisinde kullanıldığı zaman ait olduğu nesneyi temsil eder.
    - Tek başına kullanıldığı zaman global bir nesneyi temsil eder.
    - Bir fonksiyon içerisinde kullanılırsa global bir nesneyi ifade eder.
    - Eğer katı modda bir fonksiyonun içerisinde kullanılırsa undefined yani tanımsız değerini döndürür.
    - Bir olayda (tıklama, çift tıklama gibi) olayın gerçekleştiği elementi temsil eder.

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
    


   