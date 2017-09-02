export class Vokabel {

  public textLanguage: string;
  public textBaseLanguage: string;

  constructor(text: string, translation: string) {
    this.textLanguage = text;
    this.textBaseLanguage = translation;
  }
}
