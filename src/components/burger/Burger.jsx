import React, { useState } from 'react';
import { BACK_DARK } from '../css-settings/index';
import { BurgerItem, BurgerItemBottom, BurgerItemTitle, BurgerItemTop, BurgerMenu, BurgerWrapper, Wrapper } from './styled';
import portraits from '../../img/web/contacts_page2.jpg';
import personal from '../../img/web/personal_page2.jpg';
import { useEffect } from 'react';
import { useContext } from 'react';
import { PagesContext } from '../context/context';

const Burger = () => {
    const [active, setActive] = useState(false)
    const [showSeries, setShowSeries] = useState(false)
    const [changeDots, setChangeDots] = useState(false)
    const { rus, location } = useContext(PagesContext)

    

    useEffect(() => {
        if (location.pathname === '/contacts') {
            setChangeDots(true)
        } else {
            setChangeDots(false)
        }
    }, [location])

    return (
        <Wrapper>
            <BurgerWrapper  onClick={() => setActive(!active)} onMouseEnter={() => setShowSeries(false)}>
                <BurgerItemTop dotback={changeDots ? BACK_DARK : ''} active={active} />
                <BurgerItemBottom dotback={changeDots ? BACK_DARK : ''} active={active} />
            </BurgerWrapper>
            <BurgerMenu  active={active}>
                <BurgerItem backimg={`url(${personal})`}>
                    <BurgerItemTitle
                    active={showSeries} 
                    onMouseEnter={() => setShowSeries(true)} 
                    onClick={() => setActive(false)} 
                    to='/personal'
                    rus={rus}
                    >
                        {rus ? 'ПЕРСОНАЛЬНЫЕ РАБОТЫ' : 'PERSONALITIES'}
                    </BurgerItemTitle>
                </BurgerItem>
                <BurgerItem backimg={`url(${portraits})`}>
                    <BurgerItemTitle
                    active={showSeries} 
                    onMouseEnter={() => setShowSeries(true)} 
                    onClick={() => setActive(false)} 
                    to='/portraits'
                    rus={rus}
                    >
                        {rus ? 'ПОРТРЕТЫ' : 'PORTRAITS'}
                    </BurgerItemTitle>
                </BurgerItem>
                <BurgerItem backimg={`url(${portraits})`}>
                    <BurgerItemTitle
                    active={showSeries} 
                    onMouseEnter={() => setShowSeries(true)} 
                    onClick={() => setActive(false)}  
                    to='/contacts'
                    rus={rus}
                    >
                        {rus ? 'КОНТАКТЫ' : 'CONTACTS'}
                    </BurgerItemTitle>
                </BurgerItem>
            </BurgerMenu>
        </Wrapper>
    );
};

export default Burger;