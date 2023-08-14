import React from 'react'
import { useFormik } from 'formik';
import '../App.css';
import { basicSchema } from '../schemas';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function GeneralForm() {
    const [userInfo, setUserInfo] = useState('');

const onSubmit = async (values, actions) =>{
    const userInfoString = `Email: ${values.email}, Yaş: ${values.age}, Parola: ${values.password}`;
    setUserInfo(userInfoString);
    await new Promise((resolve) => {
        setTimeout(resolve,1000)
    })
    actions.resetForm();
};
    const {values, errors,isSubmitting, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    });
  return (
    <form className='input-form' onSubmit={handleSubmit}>
        <div className='input-div'>
            <label>Email</label>
            <input 
                type='email'
                value={values.email}
                onChange={handleChange}
                id='email'
                placeholder='Mail Adresinizi Giriniz'
                className={errors.email ? "input-error" : ''}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='input-div'>
            <label>Yaş</label>
            <input 
                type='number'
                value={values.age}
                onChange={handleChange}
                id='age'
                placeholder='Yaşınızı Giriniz'
                className={errors.age ? "input-error" : ''}
            />
            {errors.age && <p className='error'>{errors.age}</p>}
        </div>
        <div className='input-div'>
            <label>Şifre</label>
            <input
                type='password'
                value={values.password}
                onChange={handleChange}
                id='password'
                placeholder='Şifrenizi Giriniz'
                className={errors.password ? "input-error" : ''}
                />
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div className='input-div'>
            <label>Şifre (Tekrar)</label>
            <input
                type='password'
                value={values.confirmPassword}
                onChange={handleChange}
                id='confirmPassword'
                placeholder='Şifrenizi Onaylayınız'
                className={errors.confirmPassword ? "input-error" : ''}
                />
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div>
        <button disabled={isSubmitting} className='input-button' type='submit'>Kaydet</button>
        <Link className='formlink' to="/portal">Portala Git</Link>
        {userInfo && (
                <div className='user-info'>
                    <h2>Girilen Bilgiler:</h2>
                    <p>{userInfo}</p>
                </div>
            )}
    </form>
  )
}

export default GeneralForm