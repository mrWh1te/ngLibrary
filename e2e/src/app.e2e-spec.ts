import { AppPage } from './app.po'
import { browser, logging } from 'protractor'

import { bookISBNs } from './../../src/app/books/books-data/reducers/books-cache.reducer'

describe('ngLibrary App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // @todo move this into a books domain e2e spec
  it('should display a book for each ISBN in books-cache.reducer', () => {
    // bookISBNs
    page.navigateTo();
    expect(page.getBooks().count()).toEqual(bookISBNs.length)
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
