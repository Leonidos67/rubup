const translations = {
    ru: {
        title: "RubUP Бонусы",
        location: "🔥 ЗАБИРАЙ ЛУТ ПО ССЫЛКАМ НИЖЕ 🔥",
        promoTitle: "🎁 ТВОИ ПРОМОКОДЫ:",
        promoSubtext: "Нажми на код, чтобы скопировать.",
        promoFirst: "Бонус на первое пополнение",
        promoCsgo: "Бесплатный кейс CS:GO",
        promoNft: "Бесплатный NFT-подарок",
        btnEnter: "🚀 ВХОД НА RubUP (ЗАПУСТИТЬ БОТА)",
        btnWheel: "🎡 КОЛЕСО ФОРТУНЫ (БЕСПЛАТНЫЙ СПИН)",
        btnNft: "🎁 NFT-ПОДАРОК (БЕСПЛАТНЫЙ ПОДАРОК)",
        cowTitle: "ИГРАТЬ В КОРОВКУ ОНЛАЙН",
        footerTitle: "УДАЧИ В ИГРЕ! 🎰",
        credits: "Данный сайт создан исключительно в ознакомительных целях для партнеров. 18+",
        copyAlert: (code) => `Промокод ${code} скопирован! Вставь его при регистрации на RubUP.`,
        copyError: "Не удалось скопировать. Выдели код вручную."
    },
    en: {
        title: "RubUP Bonuses",
        location: "🔥 GRAB YOUR LOOT VIA THE LINKS BELOW 🔥",
        promoTitle: "🎁 YOUR PROMO CODES:",
        promoSubtext: "Click the code to copy.",
        promoFirst: "First deposit bonus",
        promoCsgo: "Free CS:GO case",
        promoNft: "Free NFT gift",
        btnEnter: "🚀 ENTER RubUP (LAUNCH THE BOT)",
        btnWheel: "🎡 WHEEL OF FORTUNE (FREE SPIN)",
        btnNft: "🎁 NFT GIFT (FREE GIFT)",
        cowTitle: "PLAY COW GAME ONLINE",
        footerTitle: "GOOD LUCK IN THE GAME! 🎰",
        credits: "This site is created for informational purposes for partners only. 18+",
        copyAlert: (code) => `Promo code ${code} copied! Paste it during registration on RubUP.`,
        copyError: "Could not copy. Please select the code manually."
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
    localStorage.setItem("RubUP_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
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

    applyLanguage(localStorage.getItem("RubUP_lang") || "ru");
});

function copyPromo(el) {
    const promoText = el.dataset.code || el.innerText.trim();
    const dict = translations[currentLang];

    const done = () => {
        alert(dict.copyAlert(promoText));
        el.classList.add("copied");
        setTimeout(() => el.classList.remove("copied"), 900);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(promoText).then(done).catch(err => {
            console.error('Ошибка копирования: ', err);
            alert(dict.copyError);
        });
    } else {
        const ta = document.createElement("textarea");
        ta.value = promoText;
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand("copy");
            done();
        } catch (e) {
            console.error(e);
            alert(dict.copyError);
        }
        document.body.removeChild(ta);
    }
}
window.addEventListener("load", () => {
    document.querySelector(".page-loader").remove();
}, { once: true });
