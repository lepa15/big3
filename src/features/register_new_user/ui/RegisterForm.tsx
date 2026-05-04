import style from './RegisterForm.module.css';
import {NavLink} from 'react-router-dom';
import {useRegisterNewUser} from "../model/use_register_new_user.ts";
import {useState} from "react";
import eyeIcon from '@/shared/assets/icons/eye.svg';
import closeEyeIcon from '@/shared/assets/icons/close_eye.svg';
import bgImage from '@/shared/assets/images/bg_sign_up.svg';


export function RegisterForm() {
    const {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
    } = useRegisterNewUser();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    }

    return (
        <section className={style.section}>
            <div className={style.registerForm__container}>
                <form onSubmit={handleSubmit(onSubmit)}
                      className={style.form}
                      action='/register'
                >
                    <h2 className={style.title}>Sigh UP</h2>
                    <div className={style.input__container}>
                        <label className={style.label}
                               htmlFor='userName'>
                            Name
                        </label>
                        <input {...register('userName')}
                               className={`${style.input} ${errors.userName ? style.input_error : ''}`}
                               name='userName'
                               type='text'
                               id='userName'
                               placeholder=''
                        />
                    </div>
                    {errors.userName && <p className={style.error}>{errors.userName.message}</p>}
                    <div className={style.input__container}>
                        <label className={style.label}
                               htmlFor='login'>
                            Login
                        </label>
                        <input {...register('login')}
                               className={`${style.input} ${errors.login ? style.input_error : ''}`}
                               name='login'
                               type='text'
                               id='login'
                               placeholder=''
                        />
                    </div>
                    {errors.login && <p className={style.error}>{errors.login.message}</p>}
                    <div className={style.input__container}>
                        <label className={style.label}
                               htmlFor='password'>
                            Password
                        </label>
                        <input {...register('password')}
                               className={`${style.input} ${errors.password ? style.input_error : ''}`}
                               name='password'
                               type={showPassword ? 'text' : 'password'}
                               id='password'
                               placeholder=''
                        />
                        <button className={style.icon_button}
                                type='button'
                                onClick={togglePassword}
                        >
                            <img className={style.icon}
                                 src={showPassword ? eyeIcon : closeEyeIcon}
                                 alt="show password"
                            />
                        </button>
                    </div>
                    {errors.password && <p className={style.error}>{errors.password.message}</p>}
                    <div className={style.input__container}>
                        <label className={style.label}
                               htmlFor='confirmPassword'
                        >
                            Enter your password again
                        </label>
                        <input {...register('confirmPassword')}
                               className={`${style.input} ${errors.confirmPassword ? style.input_error : ''}`}
                               name='confirmPassword'
                               type={showPassword ? 'text' : 'password'}
                               id='confirmPassword'
                               placeholder=''
                        />
                        <button className={style.icon_button}
                                type='button'
                                onClick={togglePassword}
                        >
                            <img className={style.icon}
                                 src={showPassword ? eyeIcon : closeEyeIcon}
                                 alt="show password"
                            />
                        </button>
                    </div>
                    {errors.confirmPassword && <p className={style.error}>{errors.confirmPassword.message}</p>}
                    <div className={style.input__container}>
                        <input  {...register('agreement')}
                                className={`${style.input} ${errors.agreement ? style.checkbox_input_error : ''}`}
                                type="checkbox"
                                id='agreement'
                        />
                        <label className={`${style.label} ${errors.agreement ? style.checkbox_label_error : ''}`}
                               htmlFor='agreement'>
                            I accept the agreement
                        </label>
                    </div>
                    {errors.agreement && <p className={style.error}>{errors.agreement.message}</p>}
                    <button className={style.button}
                            type='submit'
                            disabled={isSubmitting}
                    >
                        Sign Up
                    </button>
                    <span className={style.span}>
                    Already a member? <NavLink className={style.link} to='/login'>Sign in</NavLink>
                </span>
                </form>
            </div>
            <div className={style.img__container}>
                <img className={style.img} src={bgImage} alt='playground image'/>
            </div>
        </section>
    )
}
