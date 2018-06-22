const addContactBtn = document.getElementById('addNewContact');

addContactBtn.addEventListener('click', function () {
  $.ajax({
    type: "POST",
    url: "http://app2.salesmanago.pl/api/contact/upsert",
    headers: {
      'Accept': 'application/json, application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    contentType: "application/json;charset=UTF-8",
    dataType: "json",
    data: {
      "async": true,
      "apiKey": "asdfjkh2323asdf",
      "clientId": "36ah1dxt6fpehf53",
      "sha": "2ebf4bec5faab710c5d6368943013cda1ae9ea9b",
      "requestTime": 1327059355361,
      "contact": {
        "email": "konrad-test-1@konri.com",
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
      "newEmail": "",
      "forceOptIn": true,
      "forceOptOut": false,
      "forcePhoneOptIn": true,
      "forcePhoneOptOut": false,
      "tags": ["API", "ADmanago"],
      "removeTags": ["Test_tag", "New"],
      "properties": {
        "custom.nickname": "Konri",
        "custom.sex": "M"
      },
      "dictionaryProperties": [{
          "name": "birthday",
          "type": "DATE",
          "value": 1488927600000
        },
        {
          "name": "visits",
          "type": "NUMBER",
          "value": 42
        }
      ],
      "birthday": "19801017",
      "province": "Małopolska",
      "useApiDoubleOptIn": true,
      "apiDoubleOptInEmailTemplateId": null,
      "apiDoubleOptInEmailAccountId": null,
      "apiDoubleOptInEmailSubject": null,
      "lang": "PL",
      "consentDetails": [{
          "consentName": "ZGODA",
          "consentAccept": true,
          "agreementDate": 1391167515515,
          "ip": "192.168.7.139"
        },
        {
          "consentName": "ZGODA2",
          "consentAccept": false,
          "agreementDate": 1391167515789,
          "ip": "192.168.7.139"
        }
      ]
    }
  })
});