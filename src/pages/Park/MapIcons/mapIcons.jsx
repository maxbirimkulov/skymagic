import React,{useState} from 'react';
import './mapIcons.scss'
import doroga from './assets/Дорога.png'
import mapImage from './assets/map_of_place.jpg'
import MouseOverPopover from "../../../Components/PopoverShahta/PopoversShahta";
import MouseOverPopoverShahta from "../../../Components/PopoverPekarnya/PopoverPekarnya";
import MouseOverPopoverFerma from "../../../Components/PopoverFerma/PopoverFerma";
import MouseOverPopoverPolice from "../../../Components/PopoverPolice/PopoverPolice";
import MouseOverPopoverPochta from "../../../Components/PopoverPochta/PopoverPochta";
import MouseOverPopoverClinic from "../../../Components/PopoverClinic/PopoverClinic";
import MouseOverPopoverBeelain from "../../../Components/PopoverBeelain/PopoverBeelain";
import MouseOverPopoverArheologia from "../../../Components/PopoverArheologia/PopoverArheologia";
import MouseOverPopoverFabrica from "../../../Components/PopoverFabrica/PopoverFabrica";
import MouseOverPopoverSalon from "../../../Components/PopoverSalon/PopoverSalon";
import MouseOverPopoverDom from "../../../Components/PopoverDom/PopoverDom";
import MouseOverPopoverScena from "../../../Components/PopoverScena/PopoverScena";
import MouseOverPopoverTeatr from "../../../Components/PopoverTeatr/PopoverTeatr";
import MouseOverPopoverPojarnya from "../../../Components/PopoverPojarnya/PopoverPojarnya";
import MouseOverPopoverVoennya from "../../../Components/PopoverVoennya/PopoverVoennya";
import MouseOverPopoverStroika from "../../../Components/PopoverStroika/PopoverStroika";
import MouseOverPopoverKut from "../../../Components/PopoverKut/PopoverKut";
import MouseOverPopoverIce from "../../../Components/PopoverIce/PopoverIce";
import MouseOverPopoverVeterinar from "../../../Components/PopoverVeterinar/PopoverVeterinar";
import MouseOverPopoverBank from "../../../Components/PopoverBank/PopoverBank";
import MouseOverPopoverGlobus from "../../../Components/PopoverGlobus/PopoverGlobus";
import MouseOverPopoverEko from "../../../Components/PopoverEko/PopoverEko";
import MouseOverPopoverSto from "../../../Components/PopoverSto/PopoverSto";
import MouseOverPopoverPetroleum from "../../../Components/PopoverPetroleum/PopoverPetroleum";







const MapIcons = () => {
    return (
        <section className='mapIcons'>
            <h2 className='mapIcons__title'>Город профессий</h2>
            <div className="mapIcons__container container">


                <img className='mapIcons__road' src={doroga} alt=""/>
                <div className='mapIcons__row'>

                        <MouseOverPopoverShahta text={'Шахта'}/>
                    <MouseOverPopover  text={'Пекарня'}/>

                    <MouseOverPopoverFerma text={'Ферма'}/>

                        <MouseOverPopoverPolice text='Полиция'/>

                        <MouseOverPopoverPochta text='Почта'/>

                        <MouseOverPopoverClinic text='Клиника'/>

                </div>
                <div className='mapIcons__row2'>
                    <MouseOverPopoverBeelain text='Билайн'/>
                    <MouseOverPopoverArheologia text='Археология'/>
                    <MouseOverPopoverFabrica text='Фабрика'/>
                    <MouseOverPopoverSalon text='Салон'/>
                    <MouseOverPopoverDom text='Дом'/>
                    <MouseOverPopoverScena text='Сцена'/>
                    <MouseOverPopoverTeatr text='Театр'/>
                    <MouseOverPopoverPojarnya text='Пожарная'/>
                </div>
                <div className='mapIcons__row3'>
                    <div className="mapIcons__left">
                        <MouseOverPopoverVoennya text='Военная'/>
                        <MouseOverPopoverStroika text='Стройка'/>
                        <MouseOverPopoverKut text='Кут'/>
                    </div>
                    <div className="mapIcons__right">
                        <MouseOverPopoverIce text='Айсквин'/>
                        <MouseOverPopoverVeterinar text='Ветеринарная'/>
                    </div>
                </div>
                <div className='mapIcons__row4'>
                    <div className="mapIcons__left2">
                        <MouseOverPopoverBank text='Банк'/>
                        <MouseOverPopoverGlobus text='Глобус'/>
                        <MouseOverPopoverEko text='Эко'/>
                    </div>
                  <div className="mapIcons__right2">
                      <MouseOverPopoverSto text='Сто'/>
                      <MouseOverPopoverPetroleum text='Петролеум'/>
                  </div>
                </div>
                <img className='mapIcons__image' src={mapImage} alt=""/>

            </div>

        </section>
    );
};

export default MapIcons;