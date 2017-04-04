import { MusicChoicePage } from './app.po';

describe('music-choice App', function() {
  let page: MusicChoicePage;

  beforeEach(() => {
    page = new MusicChoicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
