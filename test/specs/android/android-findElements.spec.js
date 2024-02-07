describe('Android Elements Tests', () => {
    it('Find element by accessibility id', async () => {
        // find element by accessibility id
        const appOption = await $('~App');
        // click on element
        await appOption.click();
        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView');
        console.log(await className.getText());
        // assertion
        await expect(className).toHaveText('API Demos');
    })

    xit('Find element by Xpath', async () => {
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        // find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        // find by text
        await $('//android.widget.TextView[@text="Command two"]').click();
        // find by class assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText('You selected: 1 , Command two');
    })

    it('Find element by UiAutomator', async () => {
        // find by text contains
        // https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it.only('Find multiple elements', async () => {
        const actualList = [];
        const expectedList = ["API Demos",
        "Access'ibility",
        "Accessibility",
        "Animation",
        "App",
        "Content",
        "Graphics",
        "Media",
        "NFC",
        "OS",
        "Preference",
        "Text",
        "Views"];
        // find multiple elements
        const textList = await $$('android.widget.TextView');

        // loop through them
        for (const element of textList) {
            actualList.push(await element.getText());
        }
        await expect(actualList).toEqual(expectedList);
    });

    it.only('text field', async () => {
        // access the auto complete screen
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();
        // enter the country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');
        //verify the country name
        await expect(textField).toHaveText('Canada');
    })
});