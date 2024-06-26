import React from "react";
import styles from "../Login/Login.module.css"
import Avatarka from "../image/Avatarka.jpeg"
import { useCookies } from 'react-cookie';


const ModalHappyWindow = (props) => {
    const [cookies] = useCookies(['username', 'email']);
    return (
        <section>
            <div className={styles.divModalWindow}>
                <p>Congratulations {props.users[0].username} you have successfull registered!!!</p>
                <div className={styles.AcauntMesage}>
                    <span>Do you want to go to the login form?<h3 onClick={props.openLoginModal}>Enter</h3> </span>
                </div>
                <img src={Avatarka} alt="delete" />
            </div>
        </section>
    )
}
export default ModalHappyWindow;