import { browser, element, by } from 'protractor';

export class ProductsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('prod-root h1')).getText();
  }
}
