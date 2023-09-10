import React from "react"
import "./style.scss"

const PageMenuM = () => {
    return (
        <div className="main">
            <div className = "logo_main"> 
                <h3 className = "name_logo">Ice lemonade</h3>
                <p className = "priglashenie">Охлади свой мозг</p>
            </div>

            <article>
            <h2>В "Железе"</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/coca_cola" className="a_spisok">
                        <img src="../../../images/lyamonade/кола.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Coca - Cola</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/fanta" className="a_spisok">
                        <img src="../../../images/lyamonade/фанта.png" alt="" className = "img_main" />
                        <p class = "card_opisanie">Fanta</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/sangaria" className="a_spisok">
                        <img src="../../../images/lyamonade/сангария.png" alt="" className = "img_main" />
                        <p className = "card_opisanie"> Sangaria</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/fanta_berry" className="a_spisok">
                        <img src="../../../images/lyamonade/фанта_бери.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Fanta Berry</p>
                    </a>
                </div>
            </div>
        </article>
        
        <article className="posled">
            <h2>В "Стекле"</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/hatasoda" className="a_spisok">
                        <img src="../../../images/lyamonade/хатасода.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Hatasoda</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/cola_hata" className="a_spisok">
                        <img src="../../../images/lyamonade/кола_хата.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Cola Hata</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/fanta_steklo" className="a_spisok">
                        <img src="../../../images/lyamonade/фанта_стекло.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Fanta</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/fanta_china" className="a_spisok">
                        <img src="../../../images/lyamonade/фанта_чайна.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Fanta china</p>
                    </a>
                </div>
            </div>
        </article>
        </div>
    )
}
export default PageMenuM



