const translations = {
    ru: {
        title: "RubUP Тактики и Стратегии",
        headerSub: "📈 ТАКТИКИ И СТРАТЕГИИ",
        rating: "Рейтинг",
        payback: "Окупаемость",
        promoTitle: "🎁 ТВОИ ПРОМОКОДЫ:",
        promoSubtext: "Нажми на код, чтобы скопировать.",
        promoFirst: "Бонус на первое пополнение",
        promoCsgo: "Бесплатный кейс CS:GO",
        promoNft: "Бесплатный NFT-подарок",
        btnGoToSite: "🚀 ПЕРЕЙТИ НА САЙТ RUBUP",
        tacticTitle: "🔥 Тактика часа",
        tacticHeader: "АПГРЕЙД",
        tacticDesc: "За последний час мы проанализировали актуальную статистику RubUP, уделив внимание результатам апгрейдов подарков, распределению коэффициентов и особенностям работы игровых механик. На основе свежих данных удалось выделить наиболее интересные диапазоны шансов для апгрейда, учитывая вероятность успеха и потенциальную ценность подарков. Результаты анализа легли в основу актуальной тактики часа RubUP, которая помогает эффективнее использовать возможности бота!",
        step1: "Переходим на сайт по кнопке выше, чтобы активировать тактику в текущей сессии",
        step2: "Необходимый баланс: <strong>любой</strong>",
        step3: "Заходим в апгрейд",
        step4: "Делаем апгрейд в диапазоне <strong>8.52-12.33%</strong>",
        step5: "Выигрываем апгрейд",
        aboutTitle: "ℹ️ О сайте",
        aboutDesc: "RubUP — Telegram-бот с подарками и разнообразными мини-играми, где можно открывать кейсы, улучшать подарки с помощью апгрейда и пробовать разные игровые режимы. Мы изучили основные возможности RubUp, протестировали механику кейсов и апгрейда, а также рассмотрели особенности доступных мини-игр. RubUp объединяет популярные способы взаимодействия с Telegram-подарками в одном месте и подойдёт тем, кто хочет разнообразить игровой процесс, попробовать разные режимы и использовать различные стратегии.",
        infoTitle: "📊 Общая информация",
        infoYear: "Год основания",
        infoFair: "Проверка честности",
        infoFairVal: "Есть",
        infoDep: "Методы депозита",
        infoDepVal: "Crypto, СБП, Телеграм подарки",
        infoWith: "Вывод",
        infoWithVal: "RUB, Crypto, Телеграм подарки",
        footerTitle: "УДАЧИ В ИГРЕ! 🎰",
        copyAlert: (code) => `Промокод ${code} скопирован! Вставь его при регистрации в RubUP.`,
        copyError: "Не удалось скопировать. Выдели код вручную."
    },
    en: {
        title: "RubUP Tactics & Strategies",
        headerSub: "📈 TACTICS & STRATEGIES",
        rating: "Rating",
        payback: "Payback",
        promoTitle: "🎁 YOUR PROMO CODES:",
        promoSubtext: "Click the code to copy.",
        promoFirst: "First deposit bonus",
        promoCsgo: "Free CS:GO case",
        promoNft: "Free NFT gift",
        btnGoToSite: "🚀 GO TO RUBUP SITE",
        tacticTitle: "🔥 Tactic of the hour",
        tacticHeader: "UPGRADE",
        tacticDesc: "Over the past hour, we have analyzed the current statistics of RubUP, focusing on the results of gift upgrades, the distribution of coefficients, and the specifics of game mechanics. Based on fresh data, we managed to identify the most interesting chance ranges for upgrades, considering the success probability and the potential value of gifts. The analysis results formed the basis of the current RubUP hourly tactic, which helps to use the bot's capabilities more effectively!",
        step1: "Go to the site using the button above to activate the tactic in the current session",
        step2: "Required balance: <strong>any</strong>",
        step3: "Go to upgrade",
        step4: "Make an upgrade in the range of <strong>8.52-12.33%</strong>",
        step5: "Win the upgrade",
        aboutTitle: "ℹ️ About the site",
        aboutDesc: "RubUP is a Telegram bot with gifts and various mini-games where you can open cases, upgrade gifts, and try different game modes. We studied the main features of RubUp, tested the mechanics of cases and upgrades, and also reviewed the features of the available mini-games. RubUp combines popular ways of interacting with Telegram gifts in one place and is suitable for those who want to diversify their gameplay, try different modes, and use various strategies.",
        infoTitle: "📊 General info",
        infoYear: "Founded",
        infoFair: "Fairness check",
        infoFairVal: "Yes",
        infoDep: "Deposit methods",
        infoDepVal: "Crypto, SBP, Telegram gifts",
        infoWith: "Withdrawal",
        infoWithVal: "RUB, Crypto, Telegram gifts",
        footerTitle: "GOOD LUCK IN THE GAME! 🎰",
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
        // Используем innerHTML, так как в переводах есть теги <strong>
        if (dict[key]) el.innerHTML = dict[key];
    });

    document.documentElement.lang = lang;
    document.title = dict.title;

    document.querySelectorAll(".lang-option").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    localStorage.setItem("RubUP_tactics_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
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

    // Автозагрузка языка (отдельный ключ от главной страницы)
    applyLanguage(localStorage.getItem("RubUP_tactics_lang") || "ru");
});

// Функция копирования промокода
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