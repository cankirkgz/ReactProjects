import React from 'react';
import BannerImage from '../assets/banner.png';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='left-side' style={{ backgroundImage: `url(${BannerImage})` }}>
      </div>
      <div className='right-side'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='Lütfen ad soyad giriniz.' />
          <label>Email</label>
          <input type='email' name='email' placeholder='Lütfen email giriniz.' />
          <label>Mesajınız</label>
          <textarea rows={6} name='message' placeholder='Lütfen mesajınızı giriniz.'></textarea>
          <button type='submit'>Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
