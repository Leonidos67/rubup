const translations = {
    ru: {
        title: "RubUP Бонусы",
        location: "🔥 ЗАБИРАЙ ЛУТ ПО ССЫЛКАМ НИЖЕ 🔥",
        promoTitle: "🎁 ЛОВИ ПРОМОКОД С ТИKТОКА:",
        promoSubtext: "Нажми, чтобы скопировать.<br/> Дает +100% на баланс и 2 бесплатных кейса!",
        btnEnter: "🚀 ВХОД НА RubUP (ЗАПУСТИТЬ БОТА)",
        btnWheel: "🎡 КОЛЕСО ФОРТУНЫ (БЕСПЛАТНЫЙ СПИН)",
        btnNft: "🎁 NFT-ПОДАРОК (БЕСПЛАТНЫЙ ПОДАРОК)",
        cowTitle: "ИГРАТЬ В КОРОВКУ ОНЛАЙН",
        cowSub: "Переводи корову через дорогу, собирай алмазы и забирай х100 к балансу! Успей, пока режим раздает!",
        btnDaily: "🎁 ЗАБРАТЬ ЕЖЕДНЕВНЫЙ БОНУС",
        footerTitle: "УДАЧИ В ИГРЕ! 🎰",
        credits: "Данный сайт создан исключительно в ознакомительных целях для партнеров. 18+",
        copyAlert: (code) => `Промокод ${code} скопирован! Вставь его при регистрации на RubUP.`
    },
    en: {
        title: "RubUP Bonuses",
        location: "🔥 GRAB YOUR LOOT VIA THE LINKS BELOW 🔥",
        promoTitle: "🎁 CATCH THE PROMO CODE FROM TIKTOK:",
        promoSubtext: "Click to copy.<br/> Gives +100% to balance and 2 free cases!",
        btnEnter: "🚀 ENTER RubUP (LAUNCH THE BOT)",
        btnWheel: "🎡 WHEEL OF FORTUNE (FREE SPIN)",
        btnNft: "🎁 NFT GIFT (FREE GIFT)",
        cowTitle: "PLAY COW GAME ONLINE",
        cowSub: "Guide the cow across the road, collect diamonds and grab x100 to your balance! Hurry while the mode is giving away!",
        btnDaily: "🎁 CLAIM DAILY BONUS",
        footerTitle: "GOOD LUCK IN THE GAME! 🎰",
        credits: "This site is created for informational purposes for partners only. 18+",
        copyAlert: (code) => `Promo code ${code} copied! Paste it during registration on RubUP.`
    }
};

let currentLang = "ru";

function applyLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        const key = el.getAttribute("data-i18n-html");
        if (dict[key]) el.innerHTML = dict[key];
    });

    document.documentElement.lang = lang;
    document.title = dict.title;

    document.querySelectorAll(".lang-option").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    localStorage.setItem("rubup_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    // Слайдер кейсов
    const slider = document.getElementById("shopSlider");
    const scrollRightBtn = document.getElementById("slideRight");

    if (scrollRightBtn && slider) {
        scrollRightBtn.addEventListener("click", () => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: 160, behavior: 'smooth' });
            }
        });
    }

    // Переключатель языка
    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");

    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        langMenu.classList.toggle("open");
    });

    document.querySelectorAll(".lang-option").forEach(btn => {
        btn.addEventListener("click", () => {
            applyLanguage(btn.dataset.lang);
            langMenu.classList.remove("open");
        });
    });

    document.addEventListener("click", (e) => {
        if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
            langMenu.classList.remove("open");
        }
    });

    // Автозагрузка языка
    applyLanguage(localStorage.getItem("rubup_lang") || "ru");
});

// Функция быстрого копирования промокода MALVINALORD
function copyPromo() {
    const promoText = document.getElementById("promoCode").innerText.trim();
    navigator.clipboard.writeText(promoText).then(() => {
        alert(translations[currentLang].copyAlert(promoText));
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
    });
}