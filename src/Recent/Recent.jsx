import React from "react";
import '../Recent/Recent.css'
import imgRec1 from '../image/1.png'
import imgRec2 from '../image/2.png'
import imgRec3 from '../image/3.png'
import { MdAccessTimeFilled } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Recent = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <section className="Sectionrecentr">
            <div className="RecentrLogoH1">
                <h1>{t("Recent.title")}</h1>
            </div>

            <div className="DivCintainerRecent">

                <div className="DivMinContainer">
                    <img src={imgRec1} alt="delete" />
                    <h2>
                        {t("Recent.Container_1.textData_1")}<span><MdAccessTimeFilled className="TimeField1" />{t("Recent.Container_1.textData_2")}</span>
                    </h2>
                    <h3>{t("Recent.Container_1.subTitle")}</h3>
                    <p>
                    {t("Recent.Container_1.text_blockRecent_1")}<br />
                    {t("Recent.Container_1.text_blockRecent_2")}<br />
                    {t("Recent.Container_1.text_blockRecent_3")}
                    </p>
                </div>

                <div className="DivMinContainer">
                    <img src={imgRec2} alt="delete" />
                    <h2>
                    {t("Recent.Container_2.textData_1")}<span> <MdAccessTimeFilled className="TimeField2" />{t("Recent.Container_2.textData_2")}</span>
                    </h2>
                    <h3>{t("Recent.Container_2.subTitle")}</h3>
                    <p>
                    {t("Recent.Container_2.text_blockRecent_1")}<br />
                    {t("Recent.Container_2.text_blockRecent_2")}
                    </p>
                </div>

                <div className="DivMinContainer">
                    <img src={imgRec3} alt="delete" />
                    <h2>
                    {t("Recent.Container_3.textData_1")}<span><MdAccessTimeFilled className="TimeField3" /> {t("Recent.Container_3.textData_2")}</span>
                    </h2>
                    <h3> {t("Recent.Container_3.subTitle")}</h3>
                    <p>
                    {t("Recent.Container_3.text_blockRecent_1")} <br />
                    {t("Recent.Container_3.text_blockRecent_2")}<br />
                    {t("Recent.Container_3.text_blockRecent_3")}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Recent;