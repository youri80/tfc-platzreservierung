import { PlatzreservierungPage } from './app.po';

describe('platzreservierung App', () => {
  let page: PlatzreservierungPage;

  beforeEach(() => {
    page = new PlatzreservierungPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
