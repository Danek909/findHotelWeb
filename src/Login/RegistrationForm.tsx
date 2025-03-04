import React, { useState } from 'react';
import styles from '../Login/Login.module.css';
import '../Modal/Modal.css';
import LoginForm from './LoginForm';
import { Modal } from 'antd';
import useAuthStore from './AuthStore';
import { FormProvider, useForm } from 'react-hook-form';
import { InputOutlined } from './components/InputOutlined/inputOutLinet';
import ModalHappyWindow from './ModalHappyWindow';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';

type PropsType = {
    openLoginModal?: () => void;
    closeModal(): void;
    password: string,
    PasswordConfirmation: string,
    username: string,
    email: string,
    phoneNumber: string,
}


const RegistrationForm: React.FC<PropsType> = (props) => {
    const [password, setPassword] = useState("");
    const [registerState, setRegisterState] = useState('');
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [happyModalWindow, setHappyModalWindow] = useState(false);
    const updateUsers = useAuthStore((state) => state.updateUsers);
    const users = useAuthStore((state) => state.users);
    const [cookies, setCookie] = useCookies(['userData']);
    const form = useForm<PropsType>({ mode: "onBlur" });
    const { register, handleSubmit, formState: { errors }, setError } = form;
    const { t, i18n } = useTranslation();

    const registerUser = (values: PropsType) => {
        setCookie('userData', { username: values.username, password: values.password, isLogined: "no_authorized" });
        const { password, PasswordConfirmation } = values;
        if (password === PasswordConfirmation) {
            updateUsers({
                username: values.username, email: values.email, password: values.password,
                PasswordConfirmation: values.PasswordConfirmation
            });
            const userExsist = users.find(obj => obj.username === values.username);
            if (userExsist) {
                setHappyModalWindow(true);
            } else {
                setRegisterState((t('RegistrationForm.errors')));
            }
        } else {
            setError("PasswordConfirmation", { type: "manual", message: (t('RegistrationForm.passwordConfirm_message')) });
        }
    };

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    const openLoginModal = () => {
        setLoginModalIsOpen(true);
    };
    const closeLoginModal = () => {
        setLoginModalIsOpen(false);
        props.closeModal();
    };

    const closeHappyModal = () => {
        setHappyModalWindow(false);
        props.closeModal();
    };

    return (
        <section className={styles.SectionLogin}>
            <h1>{t('RegistrationForm.Title')}</h1>
            <FormProvider {...form}>
                <form onSubmit={handleSubmit(registerUser)} className={styles.RegForm}>
                    <div>
                        <div className={styles.divContainerRegForm_1}>
                            <InputOutlined style={errors.username ? { borderColor: 'red' } : null}
                                {...register("username")} type="text" placeholder={t('RegistrationForm.userName_placeholder')}
                                rules={{
                                    required: (t('RegistrationForm.required')),
                                    maxLength: { value: 15, message: (t('RegistrationForm.userName_MaxLenght')) },
                                    minLength: { value: 2, message: (t('RegistrationForm.MinLenght')) }
                                }} /><p className={styles.divErrors}>{errors?.username?.message}
                                {errors?.username && <img src={`/findHotelWeb/image/errorImg.png`} className={styles.errorImg} alt='undefined' />}</p>
                        </div>
                        <div className={styles.divContainerRegForm_2}>
                            <InputOutlined style={errors.email ? { borderColor: 'red' } : null}
                                className={errors?.email ? 'erorr_Input_RegForm' : ' '}
                                {...register("email")} type="email"
                                placeholder={t('RegistrationForm.email_placeholder')}
                                rules={{
                                    required: (t('RegistrationForm.required')),
                                    maxLength: { value: 55, message: (t('RegistrationForm.email_MaxLenght')) },
                                    minLength: { value: 2, message: (t('RegistrationForm.MinLenght')) },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: (t('RegistrationForm.pattern_message')),
                                    },

                                }} /><p className={styles.divErrors}>{errors?.email?.message}
                                {errors?.email && <img src={`/findHotelWeb/image/errorImg.png`} className={styles.errorImg} alt='undefined' />}</p>
                        </div>

                        <div className={styles.divContainerRegForm_3}>
                            <InputOutlined style={errors.password ? { borderColor: 'red', } : null}
                                {...register("password")} type="password"
                                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                                placeholder={t('RegistrationForm.password_placeholder')}
                                rules={{
                                    required: (t('RegistrationForm.required')),
                                    maxLength: { value: 15, message: (t('RegistrationForm.MaxLenght')) },
                                    minLength: { value: 2, message: (t('RegistrationForm.MinLenght')) },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_-])[A-Za-z\d!@#$%^&*()_-]{8,}$/,
                                        message: (t('RegistrationForm.pattern_message_password'))
                                    }
                                }} />
                            <p className={styles.divErrors_Password}>{errors?.password?.message}
                                {errors?.password && <img src={`/findHotelWeb/image/errorImg.png`} className={styles.errorImg} alt='undefined' />}</p>
                        </div>

                        <div className={styles.divContainerRegForm_4}>
                            <InputOutlined style={errors.PasswordConfirmation ? { borderColor: 'red' } : null}
                                name="PasswordConfirmation" type="password" placeholder={t('RegistrationForm.passwordConfirmation_placeholder')}
                                rules={{
                                    required: (t('RegistrationForm.required')),
                                    maxLength: { value: 15, message: (t('RegistrationForm.MaxLenght')) },
                                    minLength: { value: 2, message: (t('RegistrationForm.MinLenght')) },
                                }} />
                            {<p className={styles.divErrorsPsConfirm}>{errors?.PasswordConfirmation?.message}
                                {errors?.PasswordConfirmation?.message && <img src={`/findHotelWeb/image/errorImg.png`} className={styles.errorImg} alt='undefined' />}</p>}


                        </div>

                        <div className={styles.divContainerRegForm_5}>
                            <InputOutlined style={errors.phoneNumber ? { borderColor: 'red' } : null}
                                name="phoneNumber" type="tel" placeholder={t('RegistrationForm.PhoneNumber_placeholder')}
                                rules={{
                                    required: (t('RegistrationForm.required')),
                                    maxLength: { value: 15, message: (t('RegistrationForm.MaxLenght')) },
                                    minLength: { value: 2, message: (t('RegistrationForm.MinLenght')) },
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: (t('RegistrationForm.pattern_message_PhoneNumber')),
                                    },
                                }} />
                            <p className={styles.divErrors}>{errors?.phoneNumber?.message}
                                {errors?.phoneNumber && <img src={`/findHotelWeb/image/errorImg.png`} className={styles.errorImg} alt='undefined' />}</p>

                        </div>

                    </div>
                    <div className={styles.RegistrationDivBtn}>
                        <button type="submit">{t('RegistrationForm.button_Registration')}</button>
                    </div>
                    {registerState.length > 0 && <div>{registerState}</div>}
                    <Modal open={happyModalWindow} onCancel={closeHappyModal}
                        footer={null}><ModalHappyWindow openLoginModal={openLoginModal} users={users} /></Modal>
                </form>
            </FormProvider>
            <div className={styles.AcauntMesage}>
                {cookies?.userData !== undefined && (
                    <span onClick={openLoginModal}>
                        {t('RegistrationForm.span_Message_account')} <h3>{t('RegistrationForm.button_Enter')}</h3>
                    </span>
                )}
            </div>
            <Modal open={loginModalIsOpen} onCancel={closeLoginModal} className={styles.ModalLoginWindow} footer={null}>
                <LoginForm username={""} password={""} />
            </Modal>
        </section >
    )
}

export default RegistrationForm;