var translations = {
    "en": {
        "create.next": "next",
        "create.options.label": "options",
        "create.options.add-another-option": "add another option",
        "create.options-datetime.more-inputs": "more inputs for time",
        "create.options-datetime.copy-first-line": "copy first line",
        "errors.inclusion": "is not included in the list",
        "errors.exclusion": "is reserved",
        "errors.invalid": "is invalid",
        "errors.confirmation": "doesn't match {{attribute}}",
        "errors.accepted": "must be accepted",
        "errors.empty": "can't be empty",
        "errors.blank": "can't be blank",
        "errors.present": "must be blank",
        "errors.tooLong": "is too long (maximum is {{count}} characters)",
        "errors.tooShort": "is too short (minimum is {{count}} characters)",
        "errors.wrongLength": "is the wrong length (should be {{count}} characters)",
        "errors.notANumber": "is not a number",
        "errors.notAnInteger": "must be an integer",
        "errors.greaterThan": "must be greater than {{count}}",
        "errors.greaterThanOrEqualTo": "must be greater than or equal to {{count}}",
        "errors.equalTo": "must be equal to {{count}}",
        "errors.lessThan": "must be less than {{count}}",
        "errors.lessThanOrEqualTo": "must be less than or equal to {{count}}",
        "errors.otherThan": "must be other than {{count}}",
        "errors.odd": "must be odd",
        "errors.even": "must be even",
        "errors.url": "is not a valid URL",
        "index.title": "Croodle simplifies scheduling and decision-making ...<br/>... while keeping your data private",
        "index.features.title": "Features",
        "index.features.list.overview": "Easily schedule a date or make a poll with as many people as you like.",
        "index.features.list.privacy": "All your private data is encrypted inside your browser. So even the server doesn't know what your schedule or poll is about.",
        "index.features.list.options": "Define as much options as you like. Select dates via calendar or define your options as free text.",
        "index.features.list.answers": "Use pre defined answer options like <i>yes</i>, <i>no</i>, <i>maybe</i> or allow your user to enter free text.",
        "index.features.list.evaluation": "An automatically updated evaluation always gives you an overview which options are preferred.",
        "index.link.have-a-try": "have a try right now",
        "index.hoster.title": "Become your own hoster",
        "index.hoster.text": "You don't have to trust our server. You could easily host croodle yourself. All you need is a web space with PHP and SSL encryption enabled. You find the source code and installation instructions on <a href=\"https://github.com/jelhan/croodle\">GitHub</a>.",
        "poll.created-time": "created on {{creationDate}}",
        "poll.evaluation.label": "Evaluation",
        "poll.save": "save",
        "poll.share": "Share the link and invite other people to participate in your poll.",
        "poll.share.notice": "Everyone who knows the link could read the data. If your poll consists private data you may only share the link via encrypted channels like PGP encrypted email or instant messaging with OTR."
    },
    "de": {
        "create.next": "weiter",
        "create.options.label": "Optionen",
        "create.options.add-another-option": "Mehr Optionen",
        "create.options-datetime.more-inputs": "Mehr Zeiten eingeben",
        "create.options-datetime.copy-first-line": "Erste Zeile kopieren",
        "errors.inclusion": "is not included in the list",
        "errors.exclusion": "is reserved",
        "errors.invalid": "is invalid",
        "errors.confirmation": "doesn't match {{attribute}}",
        "errors.accepted": "must be accepted",
        "errors.empty": "can't be empty",
        "errors.blank": "can't be blank",
        "errors.present": "must be blank",
        "errors.tooLong": "is too long (maximum is {{count}} characters)",
        "errors.tooShort": "is too short (minimum is {{count}} characters)",
        "errors.wrongLength": "is the wrong length (should be {{count}} characters)",
        "errors.notANumber": "is not a number",
        "errors.notAnInteger": "must be an integer",
        "errors.greaterThan": "must be greater than {{count}}",
        "errors.greaterThanOrEqualTo": "must be greater than or equal to {{count}}",
        "errors.equalTo": "must be equal to {{count}}",
        "errors.lessThan": "must be less than {{count}}",
        "errors.lessThanOrEqualTo": "must be less than or equal to {{count}}",
        "errors.otherThan": "must be other than {{count}}",
        "errors.odd": "must be odd",
        "errors.even": "must be even",
        "errors.url": "is not a valid URL",
        "index.title": "Croodle vereinfacht die Termin- und Entscheidungsfindung ...<br/>... und schützt dabei deine Daten",
        "index.features.title": "Funktionen",
        "index.features.list.overview": "Finde einen Termin oder mache eine Umfrage mit so vielen Leuten, wie du möchtest.",
        "index.features.list.privacy": "Alle deine privaten Daten werden noch in deinem Browser verschlüsselt. Selbst der Server weiß daher nicht, worum es in deiner Umfrage geht.",
        "index.features.list.options": "Lege so viele Optionen fest, wie du möchtest. Wähle die Tage einfach aus einem Kalender aus oder gib beliebigen Text ein.",
        "index.features.list.answers": "Nutz vordefinierte Anwortmöglichkeiten wie <i>ja</i>, <i>nein</i>, <i>vielleicht</i> oder erlaube beliebige Antworten.",
        "index.features.list.evaluation": "Behalte den Überblick durch eine automatisch aktualisierte Übersicht über die bevorzugte Option.",
        "index.link.have-a-try": "probiere es jetzt aus",
        "index.hoster.title": "Werde dein eigener hoster",
        "index.hoster.text": "Du musst uns nicht vertrauen. Du kannst Croodle einfach auf deinem eigenen Server installieren. Ein Server mit einigen Megabyte Speicherplatz, PHP und SSL-Verschlüsselung ist ausreichend. Den Programmcode und Installationsanweisungen findest du auf <a href=\"https://github.com/jelhan/croodle\">GitHub</a>.",
        "poll.created-time": "Erstellt am {{creationDate}}.",
        "poll.evaluation.label": "Auswertung",
        "poll.save": "speichern",
        "poll.share": "Gib den Link weiter und lade so Andere zu deiner Umfrage ein.",
        "poll.share.notice": "Jeder, der den Link kennt, kann die Daten deiner Umfrage lesen. Falls deine Umfrage private Daten enthält, überlege dir, ob du ihn nur per verschlüsselter Mail oder Chat mit End-to-End-Verschlüsselung weitergeben möchtest."
    }
};

var i18nInitializer = {
    name: 'i18n',
    initialize: function() {
        // detect browser language
        // not the best way because it's not prefered language setting like used
        // in lang acceptance header but only browser language
        var language = (window.navigator.userLanguage || window.navigator.language).split("-")[0];
        if(typeof translations[language] !== "object") {
            language = "en";
        }
      
        Ember.FEATURES.I18N_TRANSLATE_HELPER_SPAN = false;
        Ember.ENV.I18N_COMPILE_WITHOUT_HANDLEBARS = true;
        Ember.I18n.translations = translations[language];
    }
};

export default i18nInitializer;