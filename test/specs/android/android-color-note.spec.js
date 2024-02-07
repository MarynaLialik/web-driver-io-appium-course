const { it } = require("mocha");

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')).click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('add a note, save changes and verify note', async () => {
        (await $('//*[@text="Add note"]')).click();
        (await $('//*[@text="Text"]')).click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List");

        //add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT");
    
        //save the changes
        await driver.back();
        await driver.back();

        // assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText('Naruto\nOnePiece\nAOT');
    });

    it('delete note', async () => {

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').getText();
        (await $('//*[@text="Fav Anime List"]')).click();
        (await $('~More')).click();
        (await $('//*[@text="Delete"]')).click();
       // (await $('//*[@resource-id="android:id/button1]')).click();
        driver.acceptAlert();
        (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')).click();
        await $('//*[@text="Trash Can"]').click();
        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        await expect(trashCanItem).toHaveText(note);
    });
});