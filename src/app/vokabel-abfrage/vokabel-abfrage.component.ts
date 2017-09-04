import { Component, OnInit } from '@angular/core';
import {Vokabel} from "./vokabel.model";

@Component({
  selector: 'app-vokabel-abfrage',
  templateUrl: './vokabel-abfrage.component.html',
  styleUrls: ['./vokabel-abfrage.component.css']
})
export class VokabelAbfrageComponent implements OnInit {

  vokabeln : Vokabel[] = [
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
