import * as yup from 'yup';
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&.,])[A-Za-z\d@$!%*#?&.,]{5,25}$/;


export const basicSchema=yup.object().shape({
    email:yup.string().email('Lütfen geçerli bir email giriniz')
    .required('Email girmek zorunludur!'),
    age:yup.number().positive('Lütfen geçerli bir yaş giriniz! (Yaş negatif olamaz)')
    .integer("Lütfen geçerli bir yaş giriniz! (Yaş tam sayı olmalıdır)")
    .required("Yaş girmek zorunludur!"),
    password:yup.string().min(5, "Parolanız en az 5 karakterli olmalıdır.")
    .max(25, "Parolanız en fazla 25 karakter olabilir.")
    .matches(passwordRules, "Parolanız en az 1 büyük harf, 1 küçük harf, 1 sayı ve 1 noktalama işareti içermelidir.")
    .required("Parola girmek zorunludur!"),
    confirmPassword:yup.string().oneOf([yup.ref('password')], "Parolanız eşleşmiyor!").required("Parola girmek zorunludur!")
})

export const advancedSchema=yup.object().shape({
    username:yup.string().min(5, 'Kullanıcı adı en az 5 karakter içermelidir.')
    .max(25, 'Kullanıcı adı en fazla 25 karakter içermelidir.')
    .required('Kullanıcı adı girmek zorunludur!'),
    university:yup.string().oneOf(['ytu', 'bogazici', 'gsu', 'odtu', 'itu'], 'Lütfen üniversitenizi seçiniz')
    .required("Üniversite girmek zorunludur!"),
    isAccepted:yup.bool().oneOf([true], 'Lütfen Kullanım Koşullarını kabul ediniz!')
})