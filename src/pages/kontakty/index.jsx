import React from "react"
import "./style.scss"


const PageKontakty = () => {
    return (
        <div className="main">
            <div className = "logo_kontakty">
                <h3 className = "logo_logo_kontakty">Контакты</h3>
            </div>

            <article className="kontakty_map">
                <div className = "abzac_spisok">
                    <div className = "abzac">
                        <h3>Адрес</h3>
                        <p className = "name_abzac">г.Барнаул, пр-т. Ленина, 102В</p>
                    </div>
                    <div class = "abzac">
                        <h3>Телефон</h3>
                        <p className = "name_abzac">+8 800 000 66 66</p>
                    </div>
                    <div class = "abzac">
                        <h3>Электронная почта</h3>
                        <p className = "name_abzac">ice_lemonade_corp@gmail.com</p>
                    </div>
                </div>
                <div className = "map">
                    <a className="map_one" href="https://yandex.ru/maps/197/barnaul/?utm_medium=mapframe&utm_source=maps">Барнаул</a>
                    <a className="map_two" href="https://yandex.ru/maps/197/barnaul/house/prospekt_lenina_102v/bEoYcQFkSUACQFtpfX93c35rYQ==/?indoorLevel=1&ll=83.764352%2C53.361930&source=morda&utm_medium=mapframe&utm_source=maps&z=16.91" 
                    >Проспект Ленина, 102в — Яндекс Карты</a>
                    <iframe className="map_three" src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=83.764352%2C53.361930&mode=whatshere&source=morda&whatshere%5Bpoint%5D=83.763178%2C53.361775&whatshere%5Bzoom%5D=17&z=16.91" 
                     frameborder="1" allowfullscreen="true"></iframe> 
                </div>
            </article>
        </div>
    )
}
export default PageKontakty



