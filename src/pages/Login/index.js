import React, { useState } from 'react'
import './login.css'
import Logo from '../../assets/logo.png'
import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"

function Login() {
          const [email, setEmail] = useState("")
          const [password, setPassword] = useState("")
          const [show, setShow] = useState(false)

          const handleClick = (e) => {
                    e.preventDefault()
                    setShow(!show);
          }

          return (
                    <div className="login">
                              <div className="login-logo">
                                        <img src={Logo} alt='' />
                              </div>

                              <div className="login-right">
                                        <h1>Bem-vindo de volta!</h1>

                                        <div className="login-loginInputEmail">
                                                  <MdEmail />
                                                  <input
                                                            type="email"
                                                            placeholder="Digite um email"
                                                            value={email}
                                                            onChange={e => setEmail(e.target.value)}
                                                  />
                                        </div>

                                        <div className="login-loginInputPassword">
                                                  <MdLock />
                                                  <input
                                                            placeholder="Digite sua senha"
                                                            type={show ? "text" : "password"}
                                                            value={password}
                                                            onChange={e => setPassword(e.target.value)}
                                                  />
                                                  <div className="login-eye">
                                                            {show ? (
                                                                      <HiEye
                                                                                size={20}
                                                                                onClick={handleClick}
                                                                      />
                                                            ) : (
                                                                      <HiEyeOff
                                                                                size={20}
                                                                                onClick={handleClick}
                                                                      />
                                                            )}
                                                  </div>
                                        </div>

                                        <button type="submit">
                                                  Entrar
                                        </button>
                              </div>
                    </div>
          )
}

export default Login

