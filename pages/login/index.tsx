import React, { useState } from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main className='login-display-center'>
            <div className='login-display-col'>
                <section className='background-session col-1'>
                    <div className='display-center-img'>
                        <figure>
                            <img src='../../login/logo.png' />
                        </figure>
                        <figure>
                            <img src='../../login/tambo-login.png' />
                        </figure>
                    </div>
                    <p>
                        Inicia sesión y obten un
                        control de tu negocio
                    </p>
                </section>
                <section className='login-session col-2'>
                    <header className='field-text-register'>
                        <p>
                            Iniciar sesión en su cuenta
                        </p>
                        <span>
                            Inicia sesión y obten un control de tu negocio
                        </span>
                    </header>
                    <form className='register-user-session'>
                        <div className='field-correo rows'>
                            <p>Correo electrónico</p>
                            <input type='text' placeholder='Introduce tu correo electrónico' />
                        </div>
                        <div className='field-password rows'>
                            <p>Contraseña</p>
                            <input
                                type={showPassword ? 'password' : 'text'}
                                placeholder='Ingresa tu contraseña'
                            />
                            <div className='display-icon-input-password'>
                                {showPassword ? (
                                    <VisibilityOffIcon onClick={togglePasswordVisibility} />
                                ) : (
                                    <VisibilityIcon onClick={togglePasswordVisibility} />
                                )}
                            </div>
                        </div>
                    </form>
                    <button className='buttom-session'>
                        <span>Iniciar sesión</span>
                    </button>
                </section>
            </div >
        </main>
    )
}

export default Login