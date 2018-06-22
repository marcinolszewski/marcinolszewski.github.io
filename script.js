const addContactBtn = document.getElementById('addNewContact');

addContactBtn.addEventListener('click', function (e) {
  $.ajax({
    headers: {
      'Accept': 'application/json, application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    type: "POST",
    url: "http://app2.salesmanago.pl/api/contact/insert",
    data: {
      "apiKey": "asdfjkh2323asdf",
      "clientId": "36ah1dxt6fpehf53",
      "sha": "2ebf4bec5faab710c5d6368943013cda1ae9ea9b",
      "requestTime": 1327059355361,
      "contact": {
        "email": "marcin.test@gmail.com"
        }
      },
      "owner": "produkcja@salesmanago.pl",
      "forceOptOut": false,
      "forcePhoneOptOut": false
      ]
    }
  })
});