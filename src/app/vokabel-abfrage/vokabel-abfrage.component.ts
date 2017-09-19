import { Component, OnInit } from '@angular/core';
import {Vokabel} from "./vokabel.model";

@Component({
  selector: 'app-vokabel-abfrage',
  templateUrl: './vokabel-abfrage.component.html',
  styleUrls: ['./vokabel-abfrage.component.css']
})
export class VokabelAbfrageComponent implements OnInit {

  unit01 : Vokabel[] = [
    new Vokabel('Good morning!', 'Guten Morgen!'),
    new Vokabel('Hello!','Hallo!'),
    new Vokabel('How are you?','Wie geht es Ihnen / Dir / Euch?'),
    new Vokabel('I\'m sorry','Es tut mir leid.'),
    new Vokabel('Excuse me.','Entschuldigung.'),
    new Vokabel('No problem.','Macht nichts.'),
    new Vokabel('Thank you.','Danke'),
    new Vokabel('You\'re welcome.','Gern geschehen.'),
    new Vokabel('I know.', 'Ich weiß'),
    new Vokabel('Sorry, I don\'t understand.','Es tut mir leid, das verstehe ich nicht.'),
    new Vokabel('Can you repeat that, please?','Kannst Du das bitte wiederholen?'),
    new Vokabel('Can you say that again?','Kannst Du das noch einmal sagen?'),
    new Vokabel('What page, please?','Welche Seite, bitte?'),
    new Vokabel('What number, please?','Welche Nummer, bitte?'),
    new Vokabel('Sorry, I\'ve forgotten the number ','Es tut mir leid, ich habe die Nummer vergessen.'),
    new Vokabel('May I go to the toilet, please','Darf ich bitte auf die Toilette gehen?'),
    new Vokabel('Natur calls.','Ich muss auf die Toilette gehen.'),
    new Vokabel('What is \'Thank you\' in German?','Was heißt \'Thank you\' auf Deutsch?'),
    new Vokabel('What does \'Stuhl\' mean?','Was heißt Stuhl?'),
    new Vokabel('How do you say \'bye bye\' in German?','Wie sagt man \'bye bye\' auf Deutsch?'),
    new Vokabel('Can you help me, please?','Kannst Du mir bitte helfen?'),
    new Vokabel('Please help me!','Bitte hilf mir!'),
    new Vokabel('Can you check my work, please?','Kannst Du bitte meien Arbeit ansehen?'),
    new Vokabel('Is this right /correct?','Ist das richtig? Stimmt das?'),
    new Vokabel('Let\'s play cards','Spielen wir Karten'),
    new Vokabel('Who\'s next?','Wer ist der/die Nächste?'),
    new Vokabel('It\'s my/your/her/his turn.' ,'Ich bin / Du bist / Er ist / Sie ist dran.'),
    new Vokabel('I know!','Ich weiß!'),
    new Vokabel('I don\'t know', 'Ich weiß nicht'),
    new Vokabel('I\'ve got the answer!','Ich habe die Antwort!'),
    new Vokabel('I\'m finished! / I\'m done','Ich bin fertig!'),
    new Vokabel('Are there any volunteers?','Gibt es Freiwillige?')
  ];

  unit01CheckIn : Vokabel[] = [
    new Vokabel('pick-up','Pick-up, Kleintransporter'),
    new Vokabel('to pick-up', 'abholen, mitnehmen'),
    new Vokabel('unit', 'Lektion, Kapitel, Einheit'),
    new Vokabel('school','Schule'),
    new Vokabel('check-in','Einchecken'),
    new Vokabel('Hello','Hallo'),
    new Vokabel('My name is Julia','Ich heiße Julia'),
    new Vokabel('I\'m ten','Ich bin 10'),
    new Vokabel('I\'m from Dreieich','Ich bin aus Dreieich'),
    new Vokabel('I\'m in school','Ich bin in der Schule'),
    new Vokabel('I\'m a pupil','Ich bin Schüler(in)'),
    new Vokabel('Julia is a pupil at Anna-Schmidt-Schule','Julia ist eine Schülerin an der Anna-Schmidt-Schule'),
    new Vokabel('I\'m from Frankfurt too','Ich komme auch aus Frankfurt'),
    new Vokabel('This is my home','Dies ist mein Zuhause'),
    new Vokabel('This is my new school','Dies ist meine neue Schule'),
    new Vokabel('I\'m in Year 5','Ich bin in der 5. Klasse.'),
    new Vokabel('This is a tiny mouse','Das ist eine kleine Maus'),
    new Vokabel('I\'m a tiny mouse and this is my home','Ich bin eine kleine Maus und das ist mein Zuhause'),
    new Vokabel('What\'s your name?','Wie heißt Du?'),
    new Vokabel('How old are you?','Wie alt bist Du?'),
    new Vokabel('Where are you from?','Wo kommst Du her?'),
    new Vokabel('How to say hello in English.','Wie man jemanden auf English begrüßt.'),
    new Vokabel('useful','nützlich, hilfreich'),
    new Vokabel('phrase','Satz'),
    new Vokabel('Listening','Hörverstehensübung (hier)'),
    new Vokabel('phone number','Telefonnummer'),
    new Vokabel('number','Nummer, Hausnummer, Zahl'),
    new Vokabel('mobile','Handy, MObiltelefon'),
    new Vokabel('ring!','klingeling!'),
    new Vokabel('or','oder'),
    new Vokabel('to write','schreiben'),
    new Vokabel('the','der, die, das'),
    new Vokabel('Hands on','Pack\'s an!'),
    new Vokabel('folder','Ordner, Mappe'),
    new Vokabel('to start','anfangen, beginnen'),
    new Vokabel('English','Englisch'),
    new Vokabel('word bank','Wortsammlung'),
    new Vokabel('word','Wort'),
    new Vokabel('to know','wissen'),
    new Vokabel('primary school','Grundschule'),
    new Vokabel('more','mehr, weitere'),
    new Vokabel('about','Über'),
    new Vokabel('yourself','dich selbst'),
    new Vokabel('language','Sprache'),
    new Vokabel('meeting people', 'Leute kennen lernen, Leute treffen'),
    new Vokabel('friend','Freund, Freundin')
  ];

  unit01NewFriend : Vokabel[] = [
    new Vokabel('language','Sprache'),
    new Vokabel('meeting people', 'Leute kennen lernen, Leute treffen'),
    new Vokabel('friend','Freund, Freundin')
  ];

  vokabeln : Vokabel[] = this.unit01CheckIn;

  index: number;
  germanToggle: boolean = true;
  englishToggle: boolean = true;

  constructor() { }

  ngOnInit() {
    this.index = 0;
  }

  nextVokabel() {
    this.index = (this.index + 1) % this.vokabeln.length;
  }

  toggleEnglish() {
    if (this.germanToggle) {
      this.englishToggle = !this.englishToggle;
    }

  }

  toggleGerman() {
    if (this.englishToggle) {
      this.germanToggle = !this.germanToggle;
    }

  }

}
