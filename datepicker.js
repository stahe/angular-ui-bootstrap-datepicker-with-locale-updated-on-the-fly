angular.module('plunker', ['ui.bootstrap', 'ngLocale']);
angular.module("plunker").controller('DatepickerDemoCtrl', function ($scope, $timeout, $locale) {

  var locales = {
    fr: {
      "DATETIME_FORMATS": {
        "AMPMS": [
          "AM",
          "PM"
        ],
        "DAY": [
          "dimanche",
          "lundi",
          "mardi",
          "mercredi",
          "jeudi",
          "vendredi",
          "samedi"
        ],
        "MONTH": [
          "janvier",
          "f\u00e9vrier",
          "mars",
          "avril",
          "mai",
          "juin",
          "juillet",
          "ao\u00fbt",
          "septembre",
          "octobre",
          "novembre",
          "d\u00e9cembre"
        ],
        "SHORTDAY": [
          "dim.",
          "lun.",
          "mar.",
          "mer.",
          "jeu.",
          "ven.",
          "sam."
        ],
        "SHORTMONTH": [
          "janv.",
          "f\u00e9vr.",
          "mars",
          "avr.",
          "mai",
          "juin",
          "juil.",
          "ao\u00fbt",
          "sept.",
          "oct.",
          "nov.",
          "d\u00e9c."
        ],
        "fullDate": "EEEE d MMMM y",
        "longDate": "d MMMM y",
        "medium": "d MMM y HH:mm:ss",
        "mediumDate": "d MMM y",
        "mediumTime": "HH:mm:ss",
        "short": "dd/MM/yy HH:mm",
        "shortDate": "dd/MM/yy",
        "shortTime": "HH:mm"
      },
      "NUMBER_FORMATS": {
        "CURRENCY_SYM": "\u20ac",
        "DECIMAL_SEP": ",",
        "GROUP_SEP": "\u00a0",
        "PATTERNS": [
          {
            "gSize": 3,
            "lgSize": 3,
            "macFrac": 0,
            "maxFrac": 3,
            "minFrac": 0,
            "minInt": 1,
            "negPre": "-",
            "negSuf": "",
            "posPre": "",
            "posSuf": ""
          },
          {
            "gSize": 3,
            "lgSize": 3,
            "macFrac": 0,
            "maxFrac": 2,
            "minFrac": 2,
            "minInt": 1,
            "negPre": "(",
            "negSuf": "\u00a0\u00a4)",
            "posPre": "",
            "posSuf": "\u00a0\u00a4"
          }
        ]
      },
      "id": "fr-fr",
      "pluralCat": function (n) {
        if (n >= 0 && n <= 2 && n != 2) {
          return PLURAL_CATEGORY.ONE;
        }
        return PLURAL_CATEGORY.OTHER;
      }
    },
    en: {
      "DATETIME_FORMATS": {
        "AMPMS": [
          "AM",
          "PM"
        ],
        "DAY": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "MONTH": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "SHORTDAY": [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ],
        "SHORTMONTH": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        "fullDate": "EEEE, MMMM d, y",
        "longDate": "MMMM d, y",
        "medium": "MMM d, y h:mm:ss a",
        "mediumDate": "MMM d, y",
        "mediumTime": "h:mm:ss a",
        "short": "M/d/yy h:mm a",
        "shortDate": "M/d/yy",
        "shortTime": "h:mm a"
      },
      "NUMBER_FORMATS": {
        "CURRENCY_SYM": "$",
        "DECIMAL_SEP": ".",
        "GROUP_SEP": ",",
        "PATTERNS": [
          {
            "gSize": 3,
            "lgSize": 3,
            "macFrac": 0,
            "maxFrac": 3,
            "minFrac": 0,
            "minInt": 1,
            "negPre": "-",
            "negSuf": "",
            "posPre": "",
            "posSuf": ""
          },
          {
            "gSize": 3,
            "lgSize": 3,
            "macFrac": 0,
            "maxFrac": 2,
            "minFrac": 2,
            "minInt": 1,
            "negPre": "(\u00a4",
            "negSuf": ")",
            "posPre": "\u00a4",
            "posSuf": ""
          }
        ]
      },
      "id": "en-us",
      "pluralCat": function (n) {
        if (n == 1) {
          return PLURAL_CATEGORY.ONE;
        }
        return PLURAL_CATEGORY.OTHER;
      }
    }};

  // today
  $scope.dt = new Date();
  // initializes $locale with french locale
  angular.copy(locales['fr'], $locale);

  // popup opening
  $scope.open = function () {
    $timeout(function () {
      $scope.opened = true;
    });
  };

  // locale change
  $scope.setLang = function (lang) {
    // droddown closed
    $scope.status.isopen = false;
    // changes $locale
    angular.copy(locales[lang], $locale);
    // changes dt to apply the $locale changes
    $scope.dt=new Date($scope.dt.getTime());
  };
});
