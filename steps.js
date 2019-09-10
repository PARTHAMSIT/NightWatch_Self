const { client } = require('nightwatch-cucumber')
//const { Given, Then, When, After, Before } from 'cucumber'
const {defineSupportCode} = require('cucumber')
var reporter = require('cucumber-html-reporter');

defineSupportCode(({Given, Then, When, After, Before,And }) => {
Before(function(scenario){
    return client.init();
  });
  
  
  After(function(scenario){
  return client.end()
  });


  Given(/^I open AirBnB page$/, async () => {
    await client.url('https://www.airbnb.co.in/')
    await client.waitForElementVisible('body', 1000)
  })
  /*Then(/^the title is "(.*?)"$/, async (text) => {
    await client.assert.title(text)
  })*/

  Then (/^link is present and Enter "(.*?)"$/, async (text) => {
    //await client.waitForElementVisible('body', 1000)
    //await client.useXpath()
    //await client.waitForElementVisible('body', 1000)
    //await client.waitForElementVisible('input#Koan-magic-carpet-koan-search-bar__input', 1000)
    await client.click('input#Koan-magic-carpet-koan-search-bar__input')
    await client.setValue('input#Koan-magic-carpet-koan-search-bar__input',text)
    await console.log("The link is present and clicked successfully.")
    
  })
  
  When (/^user clicks on CHECK-IN field$/, async () => {
    await client.click('input#checkin_input')
    await client.waitForElementVisible('div#FMP-target div._1lds9wb > div > table > tbody > tr:nth-child(5) > td:nth-child(4)', 1000)
  })
  
  Then (/^select the proper start date$/, async () =>{
    await client.click('div#FMP-target div._1lds9wb > div > table > tbody > tr:nth-child(5) > td:nth-child(4)')
    await client.pause(5000)
    await client.waitForElementVisible('input#checkout_input', 1000)
   })
  
   When (/^user clicks on CHECKOUT field$/, async () => {
    await client.click('input#checkout_input')
    await client.waitForElementVisible('div#FMP-target div._1lds9wb > div > table > tbody > tr:nth-child(5) > td:nth-child(6)', 1000)
  })

  Then (/^select the proper End date$/, async () =>{
    await client.click('div#FMP-target div._1lds9wb > div > table > tbody > tr:nth-child(5) > td:nth-child(6)')
    await client.pause(5000)
  })

  When (/^user clicks on GUESTS field$/, async () => {
    await client.click('div#FMP-target div._e296pg > button[type="button"]')
    await client.pause(20000)
  })

  When (/^user clicks on plus icon to add Adult passenger$/, async () => {
    await client.waitForElementVisible('div#FMP-target div:nth-child(1) > div > div > div > div._ni9axhe > div > div._1a72ixey > button[type="button"]', 1000)
    await client.click('div#FMP-target div:nth-child(1) > div > div > div > div._ni9axhe > div > div._1a72ixey > button[type="button"]')
    await client.pause(20000)
    await client.click('div#FMP-target div._e296pg > button[type="button"]')
  })

  Then (/^click on the search button$/, async () => {
    await client.waitForElementVisible('span._ftj2sg4', 1000)
    await client.click('span._ftj2sg4')
  })
   


  Then (/^Validate the tile of Host a Home link$/, async () => {
    await client.waitForElementVisible('nav > ul > li:nth-child(1) > div > div > a > div > div', 5000)
    await client.getText('css selector', 'nav > ul > li:nth-child(1) > div > div > a > div > div', function(result) {
      console.log('Link value: ', result.value);
    });
    
    await console.log("Title validation has successfully done.")
  })

  Then (/^Validate the tile of Host an experience link$/, async () => {
    await client.waitForElementVisible('nav > ul > li:nth-child(2) > div > div > a > div > div', 5000)
    await client.getText('css selector', 'nav > ul > li:nth-child(2) > div > div > a > div > div', function(result1) {
      console.log('Link value2: ', result1.value);
    });
    
    await console.log("Title validation has successfully done.")
  })

  Then (/^Validate the tile of Help link$/, async () => {
    await client.waitForElementVisible('div#FMP-target div._ogalm0 > div > div > div > div', 5000)
    await client.getText('css selector', 'div#FMP-target div._ogalm0 > div > div > div > div', function(result2) {
      console.log('Link value3: ', result2.value);
    });
    
    await console.log("Title validation has successfully done.")
  })

  When (/^user clicks on Host a Home Line$/, async () => {
    await client.waitForElementVisible('nav > ul > li:nth-child(1) > div > div > a > div > div', 1000)
    await client.click('nav > ul > li:nth-child(1) > div > div > a > div > div')
    await client.pause(20000)
    console.log("successfully able to click on this link");
  })

})
