import AddNoteScreen from "../../screenobjects/android/add-note.screen";
import EditNoteScreen from "../../screenobjects/android/edit-note.screen";

describe('Add Notes', () => {
    it.skip('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it.skip('add a note, save changes and verify note', async () => {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        // add note title
        await AddNoteScreen.Heading.addValue("Test List");

        //add note body
        await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");
    
        //save the changes
        await AddNoteScreen.saveNote();

        // assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText('Naruto\nOnePiece\nAOT');
    });

    it('delete note', async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("TV shows", "Friends\nBreakingBad\nPeakyBlinders");
        await driver.back();

        const note = await EditNoteScreen.firstNote.getText();
        await EditNoteScreen.firstNote.click();
        await EditNoteScreen.moreIcon.click();
        await EditNoteScreen.deleteIcon.click();
        driver.acceptAlert();
        await EditNoteScreen.navIcon.click();
        await EditNoteScreen.trashCanIcon.click();
        const trashCanItem = await EditNoteScreen.firstNote;
        await expect(trashCanItem).toHaveText(note);
    });
});