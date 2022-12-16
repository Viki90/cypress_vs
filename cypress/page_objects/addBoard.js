class AddBoardPage {

    get boardButton() {
        return cy.get('.vs-c-boards-item__title > strong');
    }

    get selectorganization() {
        return cy.get("v-modal").find("input[type=select]")
    }

    get boardTitleInput() {
        return cy.get('.vs-input-border > input');
    }

    get nextButton() {
        return cy.get("button").contains("Next");
    }

    get radioButton() {
        return cy.get("strong").contains("Scrum");
    }

    get finishButton() {
        return cy.get("button").contains("Finish");
    }

    addBoard(title) {
        this.boardTitleInput.type(title);
        this.nextButton.click();
        this.radioButton.click();
        this.nextButton.click();
        this.nextButton.click();
        this.finishButton.click();
    }
}

export const addBoardPage = new AddBoardPage();