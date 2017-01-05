import { GrupoMatranPage } from './app.po';

describe('grupo-matran App', function() {
  let page: GrupoMatranPage;

  beforeEach(() => {
    page = new GrupoMatranPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
