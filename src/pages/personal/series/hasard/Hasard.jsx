import React, { useContext, useState } from 'react';
import { Description, Wrapper } from './styled';
import img1 from '../../../../img/web/personal/hasard/1.jpg';
import img2 from '../../../../img/web/personal/hasard/2.jpg';
import img3 from '../../../../img/web/personal/hasard/3.jpg';
import img4 from '../../../../img/web/personal/hasard/4.jpg';
import img5 from '../../../../img/web/personal/hasard/5.jpg';
import img6 from '../../../../img/web/personal/hasard/6.jpg';
import img7 from '../../../../img/web/personal/hasard/7.jpg';
import img8 from '../../../../img/web/personal/hasard/8.jpg';
import img9 from '../../../../img/web/personal/hasard/9.jpg';
import img10 from '../../../../img/web/personal/hasard/10.jpg';
import img11 from '../../../../img/web/personal/hasard/11.jpg';
import img12 from '../../../../img/web/personal/hasard/12.jpg';
import img13 from '../../../../img/web/personal/hasard/13.jpg';
import img14 from '../../../../img/web/personal/hasard/14.jpg';
import img15 from '../../../../img/web/personal/hasard/15.jpg';
import img16 from '../../../../img/web/personal/hasard/16.jpg';
import img17 from '../../../../img/web/personal/hasard/17.jpg';
import img18 from '../../../../img/web/personal/hasard/18.jpg';
import img19 from '../../../../img/web/personal/hasard/19.jpg';
import MyImage from '../../../../components/UI/image/MyImage';
import { PagesContext } from '../../../../components/context/context';

const Hasard = () => {
    const { rus } = useContext(PagesContext)

    return (
        <Wrapper>
            {rus
            ?
            <Description rus={rus}>
                Я привержена гуманистическому познанию жизни, в центре которого находится сущность человека. Где форма и содержание неразрывно связаны, а человеческое тело является отражением его внутреннего мира. Также мне импонирует идея того вида симбиоза, наружного и внутреннего, в котором импульс эмоции приобретает физическую оболочку.<br/><br/>
                Находя новый спектр эмоций, который я пропускаю через себя и свой жизненный опыт, я обращаюсь к языку тела, создавая линии, округлости и углы из его изгибов. Добавляя ритм, я уменьшаю статику позы, что дает возможность существования мысли о трансформации переживаний. Подбирая ракурс, цвет и свет, я нахожу изображению ту форму, которая бы вторила конкретно взятой за основу эмоции.<br/><br/>
                Конечной целью моих работ я вижу создание для зрителя интервью, где в качестве гостя выступает его “Я”, а интервьюером – изображение. В котором бессознательное возникновение ранее установленной реакции на увиденное позволяет задать опорную точку для возможности нахождения ответов на негласные вопросы посредством рефлексии.
            </Description>
            :
            <Description>
                I am committed to a humanistic understanding of life that is centered on the essence of the human being. Where form and content are inextricably linked, and the human body is a reflection of his inner world. Also, I am impressed by the idea of that kind of symbiosis of external and internal, in which the impulse of emotion acquires a physical shell.<br/><br/>
                Finding a new range of emotions that I pass through myself and my life experience, I turn to body language, creating lines, curves and angles. By adding rhythm, I reduce the static of the pose, which makes it possible for the thought of the transformation of experiences to exist. Choosing the angle, color and light, I find the image and the form that would echo the emotion specifically taken as a basis.<br/><br/>
                The ultimate goal of my work is to create an interview with the viewer, where his Inner Self acts as a guest, and the image is the interviewer. Where the reaction to the image is the initial stage by which answers to unspoken questions can be found through reflection.
            </Description>
            }
            <MyImage cr_year='2021' w='true' backimg={`url(${img1})`} />
            <MyImage cr_year='2021' backimg={`url(${img2})`} />
            <MyImage cr_year='2022' backimg={`url(${img3})`} />
            <MyImage cr_year='2021' backimg={`url(${img4})`} />
            <MyImage cr_year='2022' backimg={`url(${img5})`} />
            <MyImage cr_year='2021' backimg={`url(${img6})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img7})`} />
            <MyImage cr_year='2021' backimg={`url(${img8})`} />
            <MyImage cr_year='2022' backimg={`url(${img10})`} />
            <MyImage cr_year='2021' backimg={`url(${img9})`} />
            <MyImage cr_year='2022' backimg={`url(${img11})`} />
            <MyImage cr_year='2021' backimg={`url(${img12})`} />
            <MyImage cr_year='2021' backimg={`url(${img14})`} />
            <MyImage cr_year='2022' backimg={`url(${img18})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img17})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img13})`} />
            <MyImage cr_year='2021' backimg={`url(${img16})`} />
            <MyImage cr_year='2021' backimg={`url(${img19})`} />
        </Wrapper>
    );
};

export default Hasard;