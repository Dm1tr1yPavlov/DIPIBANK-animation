const content = document.getElementById("personal");

const blocks = {
    personal: `
    <div class="feature-card">
        <div class="icon-card"><span><img src="./img/b.png" alt=""></span></div>
        <h3 class="font-bold mb-1">Расчетные счета</h3>
        <p class="text-[#b3b3b7] text-sm">Наслаждайтесь простым и удобным доступом к своим средствам с помощью наших расчётных счетов. Воспользуйтесь такими функциями, как онлайн- и мобильный банкинг, дебетовые карты и бесплатный доступ к банкоматам.</p>
    </div>
    <div class="feature-card">
        <div class="icon-card"><span><img src="./img/t.png" alt=""></span></div>
        <h3 class="font-bold mb-1">Сберегательные счета</h3>
        <p class="text-[#b3b3b7] text-sm">Создавайте сбережения, используя наши конкурентоспособные процентные ставки и гибкие условия сберегательных счетов. Независимо от того, копите ли вы на конкретную цель или хотите постепенно приумножить свое состояние, у нас найдется подходящий для вас счет.</p>
    </div>
    <div class="feature-card">
        <div class="icon-card"><span><img src="./img/c.png" alt=""></span></div>
        <h3 class="font-bold mb-1">Кредиты и ипотека</h3>
        <p class="text-[#b3b3b7] text-sm">Воплотите свои мечты в реальность с нашими гибкими вариантами кредитования и ипотеки. Наши опытные кредитные специалисты помогут вам на всех этапах оформления заявки — от потребительских кредитов до ипотечных кредитов на недвижимость.</p>
    </div>
`,
    business: `
    <div class="feature-card">
        <div class="icon-card"><span><img src="./img/b.png" alt=""></span></div>
        <h3 class="font-bold mb-1">Расчётно-кассовое обслуживание (РКО)</h3>
        <p class="text-[#b3b3b7] text-sm">Комплекс услуг, который включает открытие и ведение расчётного счёта, проведение безналичных операций и работу с наличными средствами.</p>
    </div>
    <div class="feature-card">
        <div class="icon-card"><span><img src="./img/t.png" alt=""></span></div>
        <h3 class="font-bold mb-1">Кредитные продукты</h3>
        <p class="text-[#b3b3b7] text-sm">Кредиты на любые цели с выгодными условиями и индивидуальными сроками кредитования.</p>
    </div>
    <div class="feature-card">
        <div class="icon-card"><span><img src="./img/c.png" alt=""></span></div>
        <h3 class="font-bold mb-1">Онлайн-касса</h3>
        <p class="text-[#b3b3b7] text-sm">Онлайн-касса со встроенным сканером штрих-кодов, принтером чеков и фискальным накопителем.</p>
    </div>
    `
};

function switchContent(type) {
  content.classList.add("fade-out");

  setTimeout(() => {
    content.innerHTML = blocks[type]; 
    content.classList.remove("fade-out");

    const cards = content.querySelectorAll(".feature-card");
    cards.forEach((card, index) => {
      card.classList.add("fade-in");
      card.style.animationDelay = `${index * 0.2}s`;
    });
  }, 400);
}

const btnPersonal = document.getElementById("btnPersonal");
const btnBusiness = document.getElementById("btnBusiness");

btnPersonal.addEventListener("click", function() {
  switchContent("personal");
  btnPersonal.classList.add("active");
  btnBusiness.classList.remove("active");
});

btnBusiness.addEventListener("click", function() {
  switchContent("business");
  btnBusiness.classList.add("active");
  btnPersonal.classList.remove("active");
});

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

(function() {
  const elems = document.querySelectorAll('.scroll-element');
  if (!elems.length) return;

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    });

    elems.forEach(el => obs.observe(el));
  } else {
    const onScroll = () => {
      elems.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    onScroll();
  }
})();