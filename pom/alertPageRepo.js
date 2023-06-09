import { Selector } from 'testcafe'

class alertPageRepo {
    constructor() {
        this.h1Alert = Selector('h1').withText('Alert')
        this.btnSimpleAlert = Selector('#accept')
        this.btnConfirmAlert = Selector('#confirm')
        this.btnPromptAlert = Selector('#prompt')
        this.notifPromptAlert = Selector('#myName')
        this.btnModernAlert = Selector('#modern')
        this.btnCloseModernAlert = Selector('button').withAttribute('aria-label', 'close')
    }
}

export default new alertPageRepo()
