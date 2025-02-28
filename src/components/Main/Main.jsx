import style from "./Main.module.css";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CSSTransition } from 'react-transition-group';

    // Херня для слайдер
    const TestCard = ({ title, description, background }) => {
        return (
        <div className={style.testCard} style={{ background }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className={style.goButton}>Перейти</button>
        </div>
        );
    };
  
  const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const testCards = [
      {
        title: 'Тест 1',
        description: 'Описание теста 1',
        background: 'linear-gradient(45deg, #feecf1 0%, #fff7f3 100%)',
      },
      {
        title: 'Тест 2',
        description: 'Описание теста 2',
        background: 'linear-gradient(90deg, #fbfefe 0%, #fcfefe 100%)',
      },
      {
        title: 'Тест 3',
        description: 'Описание теста 3',
        background: 'linear-gradient(135deg, #fffef4 0%, #fff2f0 100%)',
      },
      {
        title: 'Тест 4',
        description: 'Описание теста 4',
        background: 'linear-gradient(45deg, #feecf1 0%, #fff7f3 100%)',
      },
      {
        title: 'Тест 5',
        description: 'Описание теста 5',
        background: 'linear-gradient(90deg, #fbfefe 0%, #fcfefe 100%)',
      },
      {
        title: 'Тест 6',
        description: 'Описание теста 6',
        background: 'linear-gradient(135deg, #fffef4 0%, #fff2f0 100%)',
      },
    ];
  
    const totalSlides = Math.ceil(testCards.length / 3);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };
  
    const startIndex = currentSlide * 3;
    const currentCards = testCards.slice(startIndex, startIndex + 3);
  
    return (
      <div className={style.sliderContainer}>
        <div className={style.slides}>
          {currentCards.map((card, index) => (
            <div key={index} className={style.slide}>
              <TestCard title={card.title} description={card.description} background={card.background} />
            </div>
          ))}
        </div>
        {/* Переключатель */}
        <div className={style.sliderControls}>
          <button className={style.arrowButton} onClick={prevSlide}>
            <svg width="103" height="12" viewBox="0 0 103 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M102 7C102.552 7 103 6.55228 103 6C103 5.44772 102.552 5 102 5V7ZM0 6L10 11.7735V0.226497L0 6ZM102 5L9 5V7L102 7V5Z" fill="#545778" />
            </svg>
          </button>
          <div className={style.slideNumber}>
            {currentSlide + 1} / {totalSlides}
          </div>
          <button className={style.arrowButton} onClick={nextSlide}>
            <svg width="109" height="12" viewBox="0 0 109 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5C0.447715 5 -4.82823e-08 5.44772 0 6C4.82823e-08 6.55228 0.447715 7 1 7L1 5ZM109 5.99999L99 0.226489L99 11.7735L109 5.99999ZM1 7L100 6.99999L100 4.99999L1 5L1 7Z" fill="#545778" />
            </svg>
          </button>
        </div>
      </div>
    );
  };


    // Компонент для отображения звездочек
    const StarRating = ({ rating }) => {
        const maxStars = 5;
        const stars = [];
    
        const starContainerStyle = {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        borderRadius: '2px',
        margin: '0px',
        textAlign: 'center',
        lineHeight: '22px',
        color: '#f86a6c',
        fontSize: '24px'
        };
    
        for (let i = 1; i <= maxStars; i++) {
        stars.push(
            <span key={i} style={starContainerStyle}>
            {i <= rating ? '★' : '☆'}
            </span>
        );
        }
    
        return <div>{stars}</div>;
    };
  
    // Компонент карточки отзыва
    const ReviewCard = ({ review, background }) => {
        const { name, rating, comment, avatar } = review;
        const [isExpanded, setIsExpanded] = useState(false);
    
        const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        };
    
        return (
        <div className={style.reviewCard} style={{ background }}>
            <StarRating rating={rating} />
            <p className={`${style.commentUserForRevi} ${isExpanded ? style.expanded : ''}`}>{comment}</p>
            <button className={style.expanButton} onClick={toggleExpand}>
            {isExpanded ? 'Скрыть' : 'Показать больше'}
            </button>
            <div className={style.infoUserForRev}>
            <div className={style.avatarUser}>
                <img src={avatar}/>
            </div>
            <p className={style.nameUserForRevi}>{name}</p>
            </div>
        </div>
        );
    };

    // SVG-иконка стрелки
    const ArrowIcon = ({ isExpanded }) => (
        <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isExpanded ? style.rotated : ''}
    >
        <path
        d="M6.5 9.75L13 16.25L19.5 9.75" // Изменяем направление стрелки на вниз
        stroke="#545778"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </svg>
    );
  
    // Компонент FAQItem для одного вопроса и ответа
    const FAQItem = ({ question, answer }) => {
        const [isExpanded, setIsExpanded] = useState(false);
    
        const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        };
    
        return (
        <div className={style.faqItem}>
            <div className={style.faqQuestion} onClick={toggleExpand}>
            <p>{question}</p>
            <button className={style.expandButton}>
                <ArrowIcon isExpanded={isExpanded} />
            </button>
            </div>
            {isExpanded && <div className={style.faqAnswer}>{answer}</div>}
        </div>
        );
    };

    // Копирование почты с сообщением
    const EmailCopy = () => {
        const [showNotification, setShowNotification] = useState(false);
      
        const handleCopy = () => {
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 5000);
        };
      
        return (
          <div className={style.containerCopy}>
            <CopyToClipboard text="ivka_83@mail.ru" onCopy={handleCopy}>
                <button className={style.copyButton}>
                    <img className={style.iconCopyButton} src={require('./image/mail.png')}/>
                    ivka_83@mail.ru
                </button>
            </CopyToClipboard>
            <CSSTransition
              in={showNotification}
              timeout={500}
              classNames={{
                enter: style['notification-enter'],
                enterActive: style['notification-enter-active'],
                exit: style['notification-exit'],
                exitActive: style['notification-exit-active'],
              }}
              unmountOnExit
            >
              <div className={style.notification}>Почта успешно скопирована!</div>
            </CSSTransition>
          </div>
        );
      };

    // Копирование телефона с сообщением
    const PhoneCopy = () => {
        const [showNotification, setShowNotification] = useState(false);
      
        const handleCopy = () => {
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 5000);
        };
      
        return (
          <div className={style.containerCopy}>
            <CopyToClipboard text="+7 967 371 7579" onCopy={handleCopy}>
                <button className={style.copyButton}>
                    <img className={style.iconCopyButton} src={require('./image/phoneCall.png')}/>
                    +7 967 371 7579
                </button>
            </CopyToClipboard>
            <CSSTransition
              in={showNotification}
              timeout={500}
              classNames={{
                enter: style['notification-enter'],
                enterActive: style['notification-enter-active'],
                exit: style['notification-exit'],
                exitActive: style['notification-exit-active'],
              }}
              unmountOnExit
            >
              <div className={style.notification}>Телефон успешно скопирован!</div>
            </CSSTransition>
          </div>
        );
      };

const Main = () => {

    const faqs = [
        {
          question: 'Что такое интегральное нейропрограммирование?',
          answer: (<span>
            Интегральное нейропрограммирование (ИНП) представляет собой современное (т.е. созданное уже в ХХ1 веке) направление практической психологии и психологически ориентированной психотерапии, получившее, несмотря на краткий срок своего существования очень широкое распространение как в России, так и в ближнем и дальнем зарубежье.
            <br />
            <br />
            Подробнее: <a className={style.answerLink} href="https://psy-in.ru/articles/vmesto-vvedeniya-ili-ochen-korotko-ob-integralnom-nejroprogrammirovanii-inp?ysclid=lrrp773125293140394 " target="_blank" rel="noopener noreferrer">https://psy-in.ru/articles/vmesto-vvedeniya-ili-ochen-korotko-ob-integralnom-nejroprogrammirovanii-inp?ysclid=lrrp773125293140394 </a>.
          </span>),
        },
        {
          question: 'Какова стоимость консультации?',
          answer: 'Стоимость консультации зависит от продолжительности и сложности случая. Пожалуйста, свяжитесь с нами для получения более подробной информации.',
        },
        {
          question: 'Как записаться на прием?',
          answer: 'Вы можете записаться на прием, заполнив форму на нашем сайте или позвонив по телефону.',
        },
      ];
    
    const reviews = [
        { name: 'Анна Никулина', rating: 5, comment: 'В самом начале нашей работы я хотела слиться, даже не начав, такое сильное было сопротивление. Екатерина всё же мне написала, и я обрадовалась, потому что уже пожалела, что отказалась. Начали работать. Иногда я не понимаю что происходит, просто чувствую, что "шестерёночки" в голове местами переставляются. Замечаю, что меняется реакция на какие-то события в жизни, сто раз делала "по накатанной", а сейчас могу отследить, остановиться, подумать. Очень тяжело работать с родителями, через силу. С Екатериной работать приятно, она чувствует иногда как тяжело мне, не торопит. Где надо приостанавливаемся, разговариваем. Огромная благодарность за медитации и практики, помогает сбросить негатив и не впадать в депрессию. У меня сейчас начался второй виток гормонотерапии, и я боялась депрессии (как в первый раз) но сейчас всё хорошо. Меняется внутри и меняется мир вокруг.', avatar: require('./image/ava.png') },

        { name: 'Денис Наритов', rating: 4, comment: 'В процессе наших с вами встреч, техник, работы со мной,я стал замечать кардинальные изменения.Я стал совершать смелые поступки и чувствую уверенность в себе.Я стал спокойным разборчивым в словах, Появилось желание заниматься спортом, больше стал шутить, смеяться, поменялся вкус -после бани,я пью молоко, либо другие напитки. Хочу поблагодарить институт Ковалёва С В. За,то что предоставил мне возможность познакомиться и поработать с Вами высококлассным специалистом Благодаря встречям я поверил в психологическую помощь и ощутил колоссальную работу техник Хочу выразить огромную благодарность замечательной психологине Екатерине за её работу. Она отличный специалист и очень добрый человек. Встречи всегда проходили в спокойной атмосфере, что довало мне возможность раскрыться на не простые темы.Екатерина находится именно в позиции психолога, не привнося ничего личного в рамках наших консультаций, благодаря чему чувствуешь себя комфортно.Блестяще выявляет проблемы, предвзятости, заблуждения и всегда предлагает варианты и способы их решения. Но работать над собой и отношениями придется самому)))).конфликты в семье, тревожность, взаимоотношения с окружающими, зависимости, личная самооценка -это малая часть, что мы разобрали и решили! Спасибо Вам большое, что помогли мне взрастить прочный внутренний стержень в себе! Но на самом деле, порой, мы -люди, даже до конца не осознаём на сколько наши страхи, наши зависимости,не дают нам полноценно жить. Искренне благодарю, низкий поклон, желаю счастья и здоровья, как физического, так и психологического.)). Желаю дальнейшего процветания институту инновационных психотехнологий Ковалёва .С. В. С большим уважением ваш клиент Денис.Н.', avatar: require('./image/ava2.jpg') },
      ];

    const backgroundGradients = [
      'linear-gradient(45deg, #feecf1 0%, #fff7f3 100%)',
      'linear-gradient(90deg, #fbfefe 0%, #fcfefe 100%)',
      'linear-gradient(135deg, #fffef4 0%, #fff2f0 100%)'
    ];

    
    return (
        <main className={style.main}>
            <div className={style.conteiner}>
                <div className={style.information}>
                    <div className={style.title}>
                        <h1>Практический психолог</h1>
                        <h2>В методе интегрального нейропрограммирования ИНП С.В. Ковалёва</h2>
                    </div>
                    <button className={style.enroll}>Записаться</button>
                </div>
                <div className={style.decoration}>
                    <img src={require('./image/decor.png')} alt="decor" />
                </div>
            </div>

            <div className={style.voln}>
                <img src={require('./image/voln.png')} />
            </div>

            {/* Обо мне */}
            <div className={style.aboutMe}>
                <img src={require('./image/mam.png')} />
                <div className={style.aboutMeInformation}>
                    <div className={style.titleAboutMe}>
                        <h2>О себе</h2>
                        <div className={style.decorAboutMe}></div>
                    </div>
                    <p>Я - <span>Екатерина Иванова</span>, и моя специализация - психологическое консультирование, основанное на интегральном нейропрограммировании. </p>
                    <p>Мной успешно пройден сертифицированный курс "Практик", и мой <span>главный метод работы</span> - интегральное нейропрограммирование <span>ИНП</span> (2.0) разработанное профессором С.В. Ковалевым в Институте инновационных психотехнологий.</p>
                </div>
            </div>

            {/* Услуги */}
            <div className={style.inquiries}>
                <div className={style.inquiriesTitle}>
                    <h3>С какими запросами я работаю</h3>
                </div>
                <div className={style.serviceCards}>
                    {/* Одна карта */}
                    <div className={style.card1}>
                        <div className={style.cardTitle}>
                            <p>Коррекция межличностных
                            отношений</p>
                        </div>
                        <div className={style.cardInfo}>
                            <div className={style.duration}>
                                <div className={style.infoTitle}>Длительность:</div>
                                <div className={style.tochki}></div>
                                <div className={style.infoValue}>1.5 - 2 часа</div>
                            </div>
                            <div className={style.format}>
                                <div className={style.infoTitle}>Формат:</div>
                                <div className={style.tochki}></div>
                                <div className={style.infoValue}>skype / zoom</div>
                            </div>
                            <div className={style.cost}>
                                <div className={style.infoTitle}>Стоимость:</div>
                                <div className={style.tochki}></div>
                                <div className={style.infoValue}>2 500 руб./сеанс</div>
                            </div>
                        </div>
                        <div className={style.cardOption}>
                            <Link className={style.linkCard} to="">Подробнее</Link>
                            <button className={style.enroll}>Записаться</button>
                        </div>
                    </div>

                    <div className={style.card2}>
                        <div className={style.cardTitle}>
                            <p>Избавление от привязанности, 
                            созависимости</p>
                        </div>
                        <div className={style.cardInfo}>
                            <div className={style.duration}>
                                <div className={style.infoTitle}>Длительность:</div>
                                <div className={style.tochki}></div>
                                <div className={style.infoValue}>1.5 - 2 часа</div>
                            </div>
                            <div className={style.format}>
                                <div className={style.infoTitle}>Формат:</div>
                                <div className={style.tochki}></div>
                                <div className={style.infoValue}>skype / zoom</div>
                            </div>
                            <div className={style.cost}>
                                <div className={style.infoTitle}>Стоимость:</div>
                                <div className={style.tochki}></div>
                                <div className={style.infoValue}>2 500 руб./сеанс</div>
                            </div>
                        </div>
                        <div className={style.cardOption}>
                            <Link className={style.linkCard} to="">Подробнее</Link>
                            <button className={style.enroll}>Записаться</button>
                        </div>
                    </div>

                    <div className={style.card3}>
                        <div className={style.cardTitle}>
                            <p>Преодоление стресса</p>
                        </div>
                        <div className={style.cardInfo}>
                            <div className={style.duration}>
                                <div className={style.infoTitle}>Длительность:</div>
                                <div className={style.tochki}></div>
                                <div className={style.infoValue}>1.5 - 2 часа</div>
                            </div>
                            <div className={style.format}>
                                <div className={style.infoTitle}>Формат:</div>
                                <div className={style.tochki}></div>
                                <div className={style.infoValue}>skype / zoom</div>
                            </div>
                            <div className={style.cost}>
                                <div className={style.infoTitle}>Стоимость:</div>
                                <div className={style.tochki}></div>
                                <div className={style.infoValue}>2 500 руб./сеанс</div>
                            </div>
                        </div>
                        <div className={style.cardOption}>
                            <Link className={style.linkCard} to="">Подробнее</Link>
                            <button className={style.enroll}>Записаться</button>
                        </div>
                    </div>
                </div>
                <div className={style.goCatalog}>
                    <button>
                        <div className={style.buttonGoCatalog}>
                            <p>Каталог</p>
                            <div className={style.blueArrow}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#545778" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="#545778" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={style.whiteArrow}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className={style.voln2}>
                <img src={require('./image/voln.png')} />
            </div>

            {/* Мои преимущества */}
            <div className={style.myBenefits}>
                <div className={style.myBenefitsTitle}>Мои преимущества</div>
                <div className={style.myBenefitsContents}>
                    <div className={style.myBenefitsInfo}>
                        <p>Это <span>современное</span> (созданное в ХХ веке), <span>инновационное</span> направление практической психологии и психологически ориентированной психотерапии, вобравшее в себя опыт и самое лучшее из всех направлений классической психологии.</p>
                        <p>Включает в себя все направления работы с человеком на всех его стадиях жизни.</p>
                    </div>
                    <img src={require('./image/decor2.png')}/>
                </div>
            </div>

            {/* Отзывы */}
            <div className={style.testimonials}>
                <h3>Отзывы</h3>
                <div className={style.reviewContainer}>
                    {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} background={backgroundGradients[index]} />
                    ))}
                </div>
            </div>

            <div className={style.voln3}>
                <img src={require('./image/voln.png')} />
            </div>

            {/* Часто задаваемые вопросы */}
            <div className={style.faqBlock}>
                <h3>Часто задаваемые вопросы</h3>
                <div className={style.conteinerFAQ}>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>

            {/* Для самопознания */}
            <div className={style.selfDiscovery}>
                <h3>Для самопознания</h3>
                <div className={style.conteinerSelfDiscovery}>
                    <div className={style.sliderContainer}>
                        <Slider />
                    </div>
                </div>
            </div>

            <div className={style.voln4}>
                <img src={require('./image/voln.png')} />
            </div>

            {/* Остались вопросы? */}
            <div className={style.haveQuesion}>
                <div className={style.titleHaveQuesion}>
                    <h3>Остались вопросы?</h3>
                    <p>свяжитесь со мной</p>
                </div>
                <div className={style.haveQuesionLinks}>
                    <EmailCopy/>
                    <div className={style.tgCopy}>
                        <img className={style.iconCopyButton} src={require('./image/send.png')}/>
                        <Link className={style.tgLink} to="https://t.me/Ekaterina_INP">https://t.me/Ekaterina_INP</Link>
                    </div>
                    <PhoneCopy/>                        
                </div>
            </div>
        </main>
        
    );
}

export default Main;