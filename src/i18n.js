import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';

//Importing Languages
import English from './LanguageJsonFiles/en/index.json';
import Arabic from './LanguageJsonFiles/ar/index.json';

i18n.on('languageChanged', function (lng) {
    // if the language we switched to is the default language we need to remove the /en from URL
    if (lng === i18n.options.fallbackLng[0]) {
        if (window.location.pathname.includes('/' + i18n.options.fallbackLng[0])) {
            const newUrl = window.location.pathname.replace('/' + i18n.options.fallbackLng[0], '')
            window.location.replace(newUrl)
        }
    }
})

let data = {
    en: English,
    ar: Arabic
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: data,
        debug: true,
        whitelist: ['en', 'ar'],
        fallbackLng: ['en'],
        detection: {
            order: ['path'],
            lookupFromPathIndex: 0,
            checkWhitelist: true
        },
        interpolation: {
            escapeValue: false,
            formatSeparator: '.'
        }
    })

export default i18n