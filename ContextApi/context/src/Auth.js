import { useContext } from "react";
import AuthContext from './context/auth-context'

function Auth() {
    const{status,login} = useContext(AuthContext);
    console.log(status);
    return ( <div>
        <h1>Giriş yaptınız mı?</h1>
        {status ? <p>Giriş yaptınız!</p> : <p>Giriş yapmadınız!</p>}
        <button onClick={login}>{status ? 'Çıkış Yap' : 'Giriş Yap'}</button>
    </div> );
}

export default Auth;