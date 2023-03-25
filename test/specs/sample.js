describe('test file', () => {
    it('test cases', async() => {
        await driver.pause(1000)
        await $('//*[@resource-id="com.androidsample.generalstore:id/spinnerCountry"]').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Bahrain"))').click();
        await $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]').setValue('Shakil')
        await driver.pause(1000)
        await $('//*[@resource-id="com.androidsample.generalstore:id/radioMale"]').click()
        await $('//*[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click()

        await $('//*[@bounds="[540,971][1002,1009]"]').click()
        await $('//*[@bounds="[540,1786][1002,1824]"]').click()
        await $('//*[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click()
        await $('//*[@bounds="[44,1650][1019,1738]"]').click()
        await $('//*[@resource-id="com.androidsample.generalstore:id/btnProceed"]').click()
        await driver.pause(20000)
        await driver.getContexts();
        // await driver.pause(10000)
        await driver.switchContext('WEBVIEW_com.androidsample.generalstore')
        await driver.pause(100000)
        await $('//*[@id="input"]').addValue("hello")
        await driver.pause(10000)
        await driver.switchContext('NATIVE_APP')
        await DriverCommand.back()
    });
});