import React from "react";
import styles from "../Login/Login.module.css";
import userPhoto from '../image/userPhoto.jpeg';
import { useCookies } from 'react-cookie';

type UserType = {
    username: string;
    password: string;
  };
  
  type PropsType = {
    users: UserType[];
    openLoginModal?: () => void;
  };

const ModalHappyWindow: React.FC<PropsType> = (props) => {
    const [cookies] = useCookies(['username', 'email']);
    return (
        <section>
            <div className={styles.divModalWindow}>
                <p>Congratulations {props.users[0].username} you have successfull registered!!!</p>
                <div className={styles.AcauntMesage}>
                    <span>Do you want to go to the login form?<h3 onClick={props.openLoginModal}>Enter</h3> </span>
                </div>
                <img src={userPhoto}alt="delete" />
            </div>
        </section>
    )
}
export default ModalHappyWindow;