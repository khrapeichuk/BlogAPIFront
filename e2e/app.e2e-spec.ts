import { BlogApiFrontPage } from './app.po';

describe('blog-api-front App', () => {
  let page: BlogApiFrontPage;

  beforeEach(() => {
    page = new BlogApiFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
