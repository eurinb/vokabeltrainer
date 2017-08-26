import { VokabeltrainerPage } from './app.po';

describe('vokabeltrainer App', () => {
  let page: VokabeltrainerPage;

  beforeEach(() => {
    page = new VokabeltrainerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
