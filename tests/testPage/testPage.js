import { ClientFunction } from 'testcafe'
import alertPageRepo from '../../pom/alertPageRepo'
import buttonPageRepo from '../../pom/buttonPageRepo'
import dropdownPageRepo from '../../pom/dropdownPageRepo'
import editorPageRepo from '../../pom/editPageRepo'
import framePageRepo from '../../pom/framePageRepo'
import radioAndCheckboxPageRepo from '../../pom/radioAndCheckboxPageRepo'
import testPageRepo from '../../pom/testPageRepo'
import windowsPageRepo from '../../pom/windowsPageRepo'

fixture `letCodeIn - test`
    .page `letcode.in/test`

test('User Can Navigate To Edit Page', async t => {
    const editPageHref = 'https://letcode.in/edit'

    await testPageRepo.navigateToEditPage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(editPageHref)
        .expect(editorPageRepo.h1Input.visible).ok()
})

test('User Can Navigate To Button Page', async t => {
    const buttonPageHref = 'https://letcode.in/buttons'
    
    await testPageRepo.navigateToButtonPage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(buttonPageHref)
        .expect(buttonPageRepo.h1Button.visible).ok()
})

test('User Can Navigate To Dropdown Page', async t => {
    const dropdownPageHref = 'https://letcode.in/dropdowns'

    await testPageRepo.navigateToDropdownPage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(dropdownPageHref)
        .expect(dropdownPageRepo.h1Dropdown.visible).ok()
})

test('User Can Navigate To Alert Page', async t => {
    const alertPageHref = 'https://letcode.in/alert'

    await testPageRepo.navigateToAlertPage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(alertPageHref)
        .expect(alertPageRepo.h1Alert.visible).ok()
})

test('User Can Navigate To Frame Page', async t => {
    const framePageHref = 'https://letcode.in/frame'

    await testPageRepo.navigateToFramePage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(framePageHref)
        .expect(framePageRepo.h1Frame.visible).ok()
})

test('User Can Navigate To Radio Page', async t => {
    const radioAndCheckboxPageHref = 'https://letcode.in/radio'

    await testPageRepo.navigateToRadioAndCheckboxPage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(radioAndCheckboxPageHref)
        .expect(radioAndCheckboxPageRepo.h1RadioAndCheckBox.visible).ok()
})

test('User Can Navigate To Windows Page', async t => {
    const windowsPageHref = 'https://letcode.in/windows'

    await testPageRepo.navigateToWindowsPage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(windowsPageHref)
        .expect(windowsPageRepo.h1Windows.visible).ok()
})
