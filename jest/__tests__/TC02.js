describe('Suite 002', () => {

  beforeAll(async () => {
    await page.goto('https://react-redux.realworld.io/#/login');
  });

  test('Sign In', async () => {
    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123')
    await page.waitForTimeout(1000);
    await page.click('form >> "Sign in"')
    const title = await page.title()
    await expect(title).toBe('Conduit')
  }, 999999)
  afterAll(async () => {
    await browser.close();
  })
})