import React from "react"
import "./style.scss"
const PageFooter = () => {
    return (
        <div className="mainFooter">
            <footer>
                <div className = "text_footer">
                    <div>
                        <p className="ppp_footer">Лямонадная Ice lemonade</p>
                        <p className="ppp_footer">г. Барнаул, ул. Ленина, 102В</p>
                    </div>
                    <div className = "networks_footer">
                        <a href="https://telegram.org/"><img src="images/icons/тг.png" alt="" class="img_nav" /></a>
                        <a href="https://vk.com/"><img src="images/icons/вк.png" alt="" class="img_nav" /></a>
                        <a href="https://instagram.com/"><img src="images/icons/инстаграм.png" alt="" class="img_nav" /></a>
                    </div>
                </div>
                <p className = "prava">© 2023 «Айс лямонаде». Все права защищены.</p>
            </footer>
        </div>
    )
}
export default PageFooter



