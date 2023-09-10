import React from "react"
import "./style.scss"
const PageNovosti = () => {
    return (
        <div className="main">
            <div className = "logo_novosti">
                <h3 className = "logo_logo">Новости</h3>
            </div>
            <article>
                <div className="abzac_novosti">
                    <h3>Новинка</h3>
                    <p className="name_abzac">
                        Лимонад от бренда Coca - Cola теперь доступен в новом вкусе - ваниль!
                    </p>
                </div>
            </article>
            <article>
                <div className="abzac_novosti">
                    <h3>Расширение</h3>
                    <p className="name_abzac">
                        Открытие нового магазина в центре города,
                        где вы можете купить ваш любимый лимонад!
                    </p>
                </div>
            </article>
            <article className="bezOtstupov">
                <div className="abzac_novosti">
                    <h3>Акция</h3>
                    <p className="name_abzac">
                        В честь дня рождения бренда Fanta мы объявляем о распродаже! 
                        Покупайте лимонады Fanta со скидкой 30% до конца месяца!
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageNovosti



