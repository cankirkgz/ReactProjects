import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';

function PortalForm() {
  const [userInfo, setUserInfo] = useState('');
  const onSubmit = async (values, actions) =>{
      const userInfoString = `Email: ${values.email}, Yaş: ${values.age}, Parola: ${values.password}`;
      setUserInfo(userInfoString);
      await new Promise((resolve) => {
          setTimeout(resolve,1000)
      })
      actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {(isSubmitting) => (
          <Form>
            <CustomInput label="Kullanıcı Adı" name="username" type="text" placeholder="Kullanıcı adını giriniz"/>
            <CustomSelect label="Okulunuz" name="university" placeholder="Üniversitenizi seçiniz" >
              <option value="">Lütfen üniversitenizi seçiniz</option>
              <option value="ytu">Yıldız Teknik Üniversitesi</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtu">Orta Doğu ve Teknik Üniversitesi</option>
              <option value="itu">İstanbul Teknik Üniversitesi</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted"/>
            <button disabled={isSubmitting} type="submit">Submit</button>
            <Link className='formlink' to="/">Ana Forma Git</Link>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PortalForm