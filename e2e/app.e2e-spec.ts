import { ProductsPage } from './app.po';

describe('products App', function() {
  let page: ProductsPage;

  beforeEach(() => {
    page = new ProductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('prod works!');
  });
});
