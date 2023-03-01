import { useState } from 'react'

import photo1 from '../assets/images/tabsPictures/fitness.jpg'
import photo2 from '../assets/images/tabsPictures/useful.jpg'
import photo3 from '../assets/images/tabsPictures/photo3.jpg'
import photo4 from '../assets/images/tabsPictures/photo4.jpg'




const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1)
    
    const toggleTab = (index) => {
        setActiveTab(index);
    }
    
  return (


 <section className='tabs'>
        <div className="container">
            <div className="tabcontainer">
                <div className={activeTab === 1 ? 'tabcontent tabcontent_active' : 'tabcontent'}  onClick={() => toggleTab(1)}>
                    <img src={photo1} alt="vegy"></img>
                    <div className="tabcontent__descr">
                        в широком его понимании это достижение оптимального качества жизни, которое включает в себя физический, психологический, духовный и социальный компоненты. С другой стороны - это достижение более высокого уровня физической подготовленности и физического состояния в целом, снижение риска нарушения здоровья.
                    </div>
                </div>
                <div className={activeTab === 2 ? 'tabcontent tabcontent_active' : 'tabcontent'} onClick={() => toggleTab(2)}>
                    <img src={photo2} alt="elite"></img>
                    <div className="tabcontent__descr" >
                        -Изменение внешнего облика, за счет снижения жирового компонента и увеличения мышечной массы.
                        - Предотвращение развития заболеваний и нарушений, повышение устойчивости организма к неблагоприятным факторам, замедление процессов старения.
                        -Улучшение состояния при заболеваниях и нарушениях здоровья, облегчение болей, ускорение восстановления.
                    </div>
                </div>
                    <div className={activeTab === 3 ? 'tabcontent tabcontent_active' : 'tabcontent'}  onClick={() => toggleTab(3)}>
                    <img src={photo3} alt="post"></img>
                    <div className="tabcontent__descr">
                        Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!                                     
                    </div>
                </div>
                    <div className={activeTab === 4 ? 'tabcontent tabcontent_active' : 'tabcontent'} onClick={() => toggleTab(4)}>
                    <img src={photo4} alt="vegy"></img>
                    <div className="tabcontent__descr">
                        Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.
                    </div>
                </div>
                <div className="tabheader">
                    <div className="tabheader__items">
                        <div className={activeTab === 1 ? "tabheader__item tabheader__item_active" : 'tabheader__item'} onClick={() => toggleTab(1)}>О фитнесе</div>
                        <div className={activeTab === 2 ? "tabheader__item tabheader__item_active" : 'tabheader__item'} onClick={() => toggleTab(2)}>О пользе</div>
                 {/*        <div className={activeTab === 3 ? "tabheader__item tabheader__item_active" : 'tabheader__item'} onClick={() => toggleTab(3)}>Постное</div>
                        <div className={activeTab === 4 ? "tabheader__item tabheader__item_active" : 'tabheader__item'} onClick={() => toggleTab(4)}>Сбалансированное</div>
                     */}</div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Tabs