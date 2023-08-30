import React from 'react';
import { Avatar, DescContent, DescLink, Description, DescTitle, DescWrap, Wrapper } from './styled';
import avatar from '../../img/web/000.jpg';
import { useState } from 'react';
import Copyright from '../../components/UI/copyright/Copyright';
import { useContext } from 'react';
import { PagesContext } from '../../components/context/context';
import Footer from '../../components/UI/footer/Footer';

const ContactsPage = () => {
    const {rus} = useContext(PagesContext)
    const [showCr, setShowCr] = useState(false)
    const onHandleRightClick = (event) => {
        event.preventDefault()
        setShowCr(true)
        setTimeout(() => {
            setShowCr(false)
        }, 1500);
    }

    return (
        <Wrapper>
            <DescWrap>
                {showCr && <Copyright />}
                <Avatar onContextMenu={onHandleRightClick} src={avatar} alt="" />
                <Description>
                    <DescContent rus={rus}>
                        <p>{rus
                        ?
                        'София Антропова – фотограф, визуальный исследователь, работающая в жанре психологического портрета, нередко для которого формой выражения выступает ню фотография. Она живет и работает в России, Москве.'
                        :
                        'Sophia Antropova is a photographer and visual researcher working in the genre of psychological portrait. For her nude photography often acts as a form of self-expression. She lives and works in Moscow, Russia.'
                        }</p>
                    </DescContent>
                    <DescTitle rus={rus}>{rus ? 'КОНТАКТЫ' : 'CONTACTS'}</DescTitle>
                    <DescContent rus={rus}>
                        <p>{rus
                        ?
                        'По всем вопросам и заказам съемок:'
                        :
                        'For all the inquiries and booking please contact:'
                        }</p>
                        <p>
                            <DescLink rus={rus} href="mailto:antropovasophia@gmail.com">antropovasophia@gmail.com</DescLink>
                        </p>
                        <p>{rus ? 'или' : 'or'}</p>
                        <p>
                            <DescLink rus={rus} href="https://t.me/sophia_antropova">telegram: @antropovasophia</DescLink>
                        </p>
                    </DescContent>
                </Description>
            </DescWrap>
            <Footer />
        </Wrapper>
    );
};

export default ContactsPage;