import React from 'react';
import BannerImage from '../assets/banneryeni.jpg';
import '../styles/About.css';

export const About = () => {
  return (
    <div className='about'>
      <div className='about-top' style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className='about-bottom'>
        <h1>Hakkımızda</h1>
        <p>
          Merhaba ve hoş geldiniz! Biz, Burger Yiyelim, tutkulu bir ekip olarak lezzetli ve doyurucu burgerler sunmaktan gurur duyuyoruz. Amacımız, sadece bir yemek değil, unutulmaz bir lezzet deneyimi sunmaktır.
        </p>
        <h5>Kalite Önceliğimizdir</h5>
        <p>
          Burger Yiyelim olarak, en kaliteli malzemeleri seçerek ve özenle hazırlayarak her bir burgeri özel kılıyoruz. Dana eti, sebzeler, soslar ve baharatlar gibi bileşenler, tazelik ve lezzet garantisiyle sizlere sunuluyor.
        </p>
        <h5>Yaratıcılık ve Çeşitlilik</h5>
        <p>
          Menümüzdeki çeşitli burger seçenekleri ile her damak zevkine hitap ediyoruz. Geleneksel lezzetlerden modern tatların harmanına kadar geniş bir yelpazede seçenek sunarak, her müşterimizin aradığını bulmasını sağlıyoruz. Ayrıca, özel burgerler ve sınırlı süreli tekliflerle sizi sürekli şaşırtmak istiyoruz.
        </p>
        <h5>Müşteri Memnuniyeti</h5>
        <p>
          Sizlerin gülümsemesi ve doyurucu bir yemek deneyimi yaşamanız bizim için en önemli hedeflerimizden biridir. Eğitimli ve samimi ekibimiz, her ziyaretinizde sıcak bir karşılama ve hızlı hizmet sunmak için burada.
        </p>
        <h5>Sosyal Sorumluluk</h5>
        <p>
          Burger Yiyelim olarak, sadece lezzetli burgerler sunmanın ötesine geçiyoruz. Sürdürülebilirlik ve toplumsal sorumluluk ilkelerini benimsiyoruz. Çevreye saygılı uygulamalarla, yerel topluluklara destek ve yardımlaşma ile sosyal etkilerimizi pozitif yönde artırmak istiyoruz.
        </p>
        <p>
          Biz Burger Yiyelim olarak, lezzet dolu anlarınıza ortak olmak için buradayız. Sizi restoranlarımıza bekliyor, sıcak bir atmosferde unutulmaz burger deneyimi yaşatmayı dört gözle bekliyoruz. Sorularınız, önerileriniz veya geri bildirimleriniz için her zaman buradayız. İyi yemekler!<br /><br />
          Sevgiler,<br />
          Burger Yiyelim Ekibi
        </p>
      </div>
    </div>
  );
}

export default About;
