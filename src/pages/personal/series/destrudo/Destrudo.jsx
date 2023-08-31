import React, { useContext, useState } from 'react';
import { Description, Wrapper } from './styled';
import img1 from '../../../../img/web/personal/destrudo/1.jpg';
import img2 from '../../../../img/web/personal/destrudo/2.jpg';
import img3 from '../../../../img/web/personal/destrudo/3.jpg';
import img4 from '../../../../img/web/personal/destrudo/4.jpg';
import img5 from '../../../../img/web/personal/destrudo/5.jpg';
import img6 from '../../../../img/web/personal/destrudo/6.jpg';
import img8 from '../../../../img/web/personal/destrudo/8.jpg';
import img9 from '../../../../img/web/personal/destrudo/9.jpg';
import MyImage from '../../../../components/UI/image/MyImage';
import { PagesContext } from '../../../../components/context/context';

const Destrudo = () => {
    const { rus } = useContext(PagesContext)
    return (
        <Wrapper>
            {rus
            ?
            <Description rus={rus}>
                Мы часто ощущаем себя ровно также как и животное в клетке. Безвыходно, скованно и с парой чьих-то глаз, пристально наблюдающих за нашими действиями. <br/><br/>
                Это агрессивное поведение, суицидальные мотивы в поведении и мотивациях. Я наблюдаю и нахожу связь между образами животного в какой-то ситуации, человеческим внутренним и понятием данного термина. <br/><br/>
                Когда я вижу убитого животного, которое послужило кому-то обедом, я сопоставляю эту картину с понятием "опыта", когда таковой проявляется в отношении человека. Мы часто слышим что кто-то кому-то был нужен для "опыта". Когда я вижу человека желающего "вырваться из толпы", я ассоциирую это с банкой, набитой доверху мелкой рыбой. <br/><br/>
                Люди и животные всегда были неразрывны в понятиях инстинктов. А главный инстинкт - инстинкт самосохранения всегда шел как побочный эффект от инстинкта смерти.
            </Description>
            :
            <Description>
                We often feel exactly the same as an animal in a cage. Hopeless, constrained and with a pair of someone's eyes intently watching our actions.<br/><br/>
                Destrudo is a term used in psychoanalysis to denote the magnitude of the energy of the death instinct. These are aggressive behavior, suicidal motives in behavior and motivations. I observe and find a connection between the images of an animal in some situation, the human inner and the concept of this term. <br/><br/>
                When I see a slaughtered animal that served as someone's dinner, I compare this picture with the concept of "experience" when it manifests itself in relation to a person. We often hear that someone needed someone for an "experience". When I see a person who wants to "break out of the crowd," I associate it with a jar filled to the brim with small fish. <br/><br/>
                Humans and animals have always been inseparable in terms of instincts. And the main instinct - the instinct of self-preservation has always been a side effect of the death instinct.
            </Description>
            }
            <MyImage cr_year='2023' w='true' backimg={`url(${img8})`} />
            {/* <MyImage cr_year='2022' w='true' backimg={`url(${img2})`} /> */}
            <MyImage cr_year='2022' backimg={`url(${img3})`} />
            <MyImage cr_year='2023' backimg={`url(${img4})`} />
            <MyImage cr_year='2023' w='true' backimg={`url(${img5})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img6})`} />
            {/* <MyImage cr_year='2022' backimg={`url(${img7})`} />
            <MyImage cr_year='2023' w='true' backimg={`url(${img8})`} /> */}
            <MyImage cr_year='2023' w='true' backimg={`url(${img9})`} />
            {/* <MyImage cr_year='2022' backimg={`url(${img1})`} />
            <MyImage cr_year='2022' backimg={`url(${img2})`} /> */}
        </Wrapper>
    );
};

export default Destrudo;