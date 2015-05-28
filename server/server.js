var questans = {
  intro: [ 'Bin ich ein guter Mensch?',
    'Am Ende warten Himmel oder Hölle.',
    'Hier erfährst Du, ob dein Karmakonto gut gefüllt ist',
    '(oder Du den Tag des Jüngsten Gerichts fürchten solltest).'],
  statements: {
    0: {
      statement: 'Nochmal versuchen?',
      answers: [{text: 'Ja', next: 1},
        {text: 'Nein', route: '/'}]
    },
    1: {
      statement: 'Wie häufig telefonierst Du mit Deiner Mutter?',
      answers: [{text: '1-mal pro Woche', next: 2},
        {text: '1-mal pro Jahr', next: 3}]
    },
    2: {
      statement: 'Leihst Du Freunden Geld?',
      answers: [{text: 'Ja', next: 6},
        {text: 'Nein', next: 4}]
    },
    3: {
      statement: 'Sprichst Du regelmäßig mit Deinen Geschwistern?',
      answers: [{text: 'Ja', next: 5},
        {text: 'Nein', next: 7}]
    },
    4: {
      statement: 'Applaudierst Du, wenn jemand ein Glas zerbricht?',
      answers: [{text: 'Ja', next: 8},
        {text: 'Nein', next: 3}]
    },
    5: {
      statement: 'Vor Gericht?',
      answers: [{text: 'Ja', next: 27},
        {text: 'Nein', next: 9}]
    },
    6: {
      statement: 'Zu welchem Zinssatz?',
      answers: [{text: 'Zwölf Prozent', next: 10},
        {text: 'Zwei Bier', next: 11}]
    },
    7: {
      statement: 'Grüßt Du Deine Nachbarn?',
      answers: [{text: 'Ja', next: 5},
        {text: 'Nein', next: 12}]
    },
    8: {
      statement: 'Was machst Du, wenn Du eine Wespe im Schlafzimmer siehst?',
      answers: [{text: 'Töten', next: 27},
        {text: 'Rauslassen', next: 12}]
    },
    9: {
      statement: 'Mögen Dich Kinder?',
      answers: [{text: 'Ja', next: 15},
        {text: 'Nein', next: 13}]
    },
    10: {
      statement: 'Gehst Du fremd?',
      answers: [{text: 'Ja', next: 14},
        {text: 'Nein', next: 27}]
    },
    11: {
      statement: 'Gibst Du Kellnern Trinkgeld?',
      answers: [{text: 'Zwei Prozent', next: 13}, {text: 'Zwanzig Prozent', next: 17},
        {text: 'Nein', next: 27}]
    },
    12: {
      statement: 'Was bringt Dich zum Lachen?',
      answers: [{text: 'Jan Böhmermann', next: 16},
        {text: 'Behinderte', next: 19}]
    },
    13: {
      statement: 'Arbeitest Du bei der Steuerfahndung?',
      answers: [{text: 'Ja', next: 14},
        {text: 'Nein', next: 21}]
    },
    14: {
      statement: 'Hast Du deshalb ein schlechtes Gewissen?',
      answers: [{text: 'Ja', next: 17},
        {text: 'Nein', next: 27}]
    },
    15: {
      statement: 'Hunde auch?',
      answers: [{text: 'Ja', next: 24},
        {text: 'Nein', next: 21}]
    },
    16: {
      statement: 'Schon mal einen Pulli umgetauscht, obwohl er getragen war?',
      answers: [{text: 'Ja', next: 18},
        {text: 'Nein', next: 21}]
    },
    17: {
      statement: 'Wie viele Menschen rufen Dich an Deinem Geburtstag an?',
      answers: [{text: '>1', next: 22},
        {text: '0', next: 27}]
    },
    18: {
      statement: 'Und deshalb eine Dreiviertelstunde mit der Verkäuferin diskutiert?',
      answers: [{text: 'Ja', next: 27},
        {text: 'Nein', next: 21}]
    },
    19: {
      statement: 'Bist Du NPD Mitglied?',
      answers: [{text: 'Ja', next: 26},
        {text: 'Nein', next: 27}]
    },
    20: {
      statement: 'Hat sich jemand verwählt?',
      answers: [{text: 'Ja', next: 27},
        {text: 'Nein', next: 23}]
    },
    21: {
      statement: 'Bietest Du Freunden ungefragt Hilfe beim Umzug an?',
      answers: [{text: 'Ja', next: 25},
        {text: 'Nein', next: 27}]
    },
    22: {
      statement: 'Noch jemand außer Deinen Eltern?',
      answers: [{text: 'Ja', next: 20},
        {text: 'Nein', next: 27}]
    },
    23: {
      statement: 'Ist ja gut, Du Streber?',
      next: 25
    },
    24: {
      statement: 'Ruf Deine Mutter an!',
      next: 25
    },
    25: {
      statement: 'Du bist ein guter Mensch!',
      next: 0
    },
    26: {
      statement: 'Du bist ein Arschloch!',
      next: 0
    },
    27: {
      statement: 'Du bist kein guter Mensch!',
      next: 0
    }
  }
};

Meteor.methods({
  questans: function() {
    return questans;
  }
});