import language from '../../config//language.config';

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
    },
    {
      languageId: 'chinese',
      locale: 'zh',
      text: 'Chinese',
    },
    {
      languageId: 'spanish',
      locale: 'es',
      text: 'Spanish',
    },
    {
      languageId: 'french',
      locale: 'fr',
      text: 'French',
    },
    {
      languageId: 'italian',
      locale: 'it',
      text: 'Italian',
    },
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
