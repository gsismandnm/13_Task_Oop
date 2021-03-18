//ÖDEV ÜÇ NOKTA OLUŞTURUP BU NOKTALARI BİRLEŞTİRDİĞİMİZDE BİR ÜÇGEN ELDE ETMEK
//BU ÜÇGENİN ÇERVESİ VE ALANINI BULMAK.

// ÖNCELİKLE NOKTALARI OLUŞTURMAK İÇİN BİR CLASS (POINT) OLUŞTURDUK.

class Pnt {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

//ÜÇGEN OLUŞTURMAK İÇİN YENİ BİR CLASS (TRG) OLUŞTURDUK. SONRASINDA 3 NOKTA BELİRLEDİK.
class Trg {
    constructor (pnt1, pnt2, pnt3){
        this.pnt1 = pnt1;
        this.pnt2 = pnt2;
        this.pnt3 = pnt3;
    }
    toplamCevre = topCev();
    toplanAlan = topAlan();
}

//OLUŞTURDUĞUMUZ NOKTALARI BİRLEŞTİRİP ÇEVRESİNİ BULDUK. 
//ÖNCELİKLE A, B, C KENARLARININ UZUNLUKLARINI BULDUK. SONRA BU KENARLARI TOPLADIK.

topCevre = (a, b, c) => {
    // Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)) ... iki nokta arasi uzaklik formulu 
    a = Math.sqrt((pnt2.x-pnt1.x)*(pnt2.x-pnt1.x)+(pnt2.y-pnt1.y)*(pnt2.y-pnt1.y));
    b = Math.sqrt((pnt2.x-pnt3.x)*(pnt2.x-pnt3.x)+(pnt2.y-pnt3.y)*(pnt2.y-pnt3.y)); 
    c = Math.sqrt((pnt3.x-pnt1.x)*(pnt3.x-pnt1.x)+(pnt3.y-pnt1.y)*(pnt3.y-pnt1.y));
    
    return a + b + c;
    }


//ÜÇGENİN ALANINI BULMAYA ÇALIŞTIK. AŞAĞIDAKİ FORMÜLÜ UYGULADIK.
topAlan = (sonuc) => {
    //Alan(ABC)=1/2 |x1.y2+x2.y3+x3.y1−(y1.x2+y2.x3+y3.x1)| ile bulunur.
    result = 0.5 * Math.abs(pnt1.x*pnt2.y + pnt2.x*pnt3.y +pnt3.x*pnt1.y - (pnt1.y*pnt2.x + pnt2.y*pnt3.x + pnt3.y*pnt1.x));
    return sonuc;
}

//SONUÇLARI GÖRMEK İÇİN 3 NOKTA BELİRLEDİK.
    var pnt1 = new Pnt(3, 8);
    var pnt2 = new Pnt(8, 5);
    var pnt3 = new Pnt(12, 8);


//OLUŞTURDUĞUMUZ ÜÇGENİN ÇEVRESİNİ VE ALANINI BULDUK.
const triangle = new Trg(pnt1, pnt2, pnt3);
  console.log(triangle.topCev);
  console.log(triangle.topAlan)