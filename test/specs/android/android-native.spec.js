describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async () => {
        //access activity 
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        // pause 3 sec
        await driver.pause(3000)
        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with Dialog Boxes', async () => {
        // click on first dialog
        (await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')).click();
        // accept Alert
        //await driver.acceptAlert();

        // dismiss Alert
        // await driver.dismissAlert();

        // get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        //click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it("Vertical scrolling", async () => {
        await $('~App').click();
        await $('~Activity').click();

        // scroll to the end (not stable if element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        
        // scrollTextView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');
        await $('~Secure Surfaces').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();
    })

    it("Horizontal scrolling", async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");
    
        // horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    
        await driver.pause(3000);
    })
    
    it.only("Working with a date picker", async () => {
        // access a datePicker
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
    
        // get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText(); 

        //click on change the date button
        await $('~change the date').click();
       
        // scroll right to the next month 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    
        // select the 10th date
        await $('//*[@text="10"]').click();

        // click on ok button
        (await $('//*[@resource-id="android:id/button1"]')).click();

        //verify the updated date
        await expect(await date.getText()).not.toEqual(currentDate);
        await driver.pause(3000);
    })
}); 
 