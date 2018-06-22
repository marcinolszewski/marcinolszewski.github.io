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
        "email": "marcin.test@gmail.com",
        "fax": "+48345543345",
        "name": "Konrad Test",
        "phone": "+48123321123",
        "company": "Benhauer",
        "state": "PROSPECT",
        "address": {
          "streetAddress": "Brzyczyńska 123",
          "zipCode": "43-305",
          "city": "Bielsko-Biała",
          "country": "PL"
        }
      },
      "owner": "produkcja@salesmanago.pl",
      "forceOptOut": false,
      "forcePhoneOptOut": false,
      "tags": ["API",
        "ADmanago"
      ],
      "properties": {
        "custom.nickname": "Konri",
        "custom.sex": "M"
      },
      "birthday": "19801017",
      "useApiDoubleOptIn": true,
      "lang": "PL"
    }
  })
});