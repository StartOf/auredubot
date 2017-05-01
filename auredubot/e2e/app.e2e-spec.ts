import { AuredubotPage } from './app.po';

describe('auredubot App', function() {
  let page: AuredubotPage;

  beforeEach(() => {
    page = new AuredubotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
