import { Angular2TowerOfHeroesPage } from './app.po';

describe('angular2-tower-of-heroes App', function() {
  let page: Angular2TowerOfHeroesPage;

  beforeEach(() => {
    page = new Angular2TowerOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
