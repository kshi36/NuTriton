const { Builder, By, until, LogInspector } = require("selenium-webdriver");
const assert = require("assert");

async function loginTest() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Test case 1: Login with incorrect credentials
    await driver.get("http://localhost:3000/");
    // Select input elements and fill them out
    await driver.findElement(By.name("email")).sendKeys("test3@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("Password@12345");
    // Select login button and invoke click action
    //If login details are correct we wiil be redirected to the welcome page
    await driver.findElement(By.className("ui button green")).click();
    await driver.sleep(2000);
    var pageUrl = await driver.getCurrentUrl();
    // the user should stay on the login page
    assert.strictEqual(pageUrl, "http://localhost:3000/");
    
    // Test case 2: Register a new account
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.linkText("Register")).click();
    // Select input elements and fill them out
    await driver.findElement(By.name("email")).sendKeys("test3@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("Password@12345");
    await driver.findElement(By.className("ui button green")).click(); 
    await driver.sleep(2000);
    var pageUrl = await driver.getCurrentUrl();
    assert.strictEqual(pageUrl, "http://localhost:3000/");

    // Test case 3: Incorrect password
    await driver.get("http://localhost:3000/");
    // Select input elements and fill them out
    await driver.findElement(By.name("email")).sendKeys("test3@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("Password@1234");
    await driver.findElement(By.className("ui button green")).click(); 
    await driver.sleep(2000);
    var pageUrl = await driver.getCurrentUrl();
    // the user should stay on the login page
    assert.strictEqual(pageUrl, "http://localhost:3000/");

    // Test case 4: Trying to register an account with the same email
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.linkText("Register")).click();
    // Select input elements and fill them out
    await driver.findElement(By.name("email")).sendKeys("test3@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("Password@12345");
    await driver.findElement(By.className("ui button green")).click(); 
    await driver.sleep(2000);
    var pageUrl = await driver.getCurrentUrl();
    assert.strictEqual(pageUrl, "http://localhost:3000/");

    // Test case 5: Skip button
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.className("ui right floated button")).click(); 
    await driver.sleep(2000);
    var pageUrl = await driver.getCurrentUrl();
    assert.strictEqual(pageUrl, "http://localhost:3000/");
    
    // delete the user account
  } finally {
    await driver.quit();
  }
}
loginTest();