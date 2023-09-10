import React from "react"
import "../style.scss"

const PageSangaria = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/spisok/сангария_2.png" alt="" className="img_site" />
                </div>
                <div className="info">
                    <div className = "tovar">
                        <h2 className="h2_name">ГАЗИРОВАННЫЙ НАПИТОК <br /> SANGARIA ORIGINAL, 350 МЛ</h2>
                        <h3 className="h3_tovar">Способы доставки:</h3>
                        <p className="p_name">
                        - самовывоз; <br />
                        - курьерская доставка по Москве; <br />
                        - доставка в регионы РФ и страны СНГ;
                        </p>
                        <h3 className="h3_tovar">Способы оплаты:</h3>
                        <p className="p_name">
                        - наличный расчет; <br />
                        - безналичный расчет;
                        </p>
                    </div>
                    <div className="price">
                        <p>Цена: 150р</p>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PageSangaria



