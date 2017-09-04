import {Vokabel} from "./vokabel.model";

export class VokabelService {
  vokabeln : Vokabel[] = [
    new Vokabel('Good morning!', 'Guten Morgen!'),
    new Vokabel('I know.', 'Ich weiß'),
    new Vokabel('I don\'t know', 'Ich weiß nicht')
  ];

}
