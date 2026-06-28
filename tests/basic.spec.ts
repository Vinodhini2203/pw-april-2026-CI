import {test,expect} from '@playwright/test'
test.describe("Basic Playwright Handling", () => {
//added second testcase
//wrong commit
    //only,skip,fall,fixme,slow

test('Verify the single click completed', async ({page}) => {
    await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')
    await page.getByTestId('single-click-btn').click()

    await expect (page.getByText('Single click new completed')).toBeVisible()
    await page.waitForTimeout(10000)
})

test('Handling Click,Double Click,Hover,Tooltip,Static Drop Down', async({page})=>
{
    test.slow()
    await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')
    await expect(page.getByText('Interactive Playwright Sandbox Basic')).toBeVisible()
    await page.getByTestId('single-click-btn').click()
    await expect(page.getByText('Single click completed.')).toBeVisible()

    await page.getByTestId('double-click-btn').dblclick()
    await expect(page.getByText('Double click completed.')).toBeVisible()

    await page.getByTestId('hover-btn').hover()
    await expect(page.getByText('Hover triggered successfully.')).toBeVisible()

    await page.getByTestId('tooltip-trigger-btn').hover()
    await expect(page.getByText('Tooltip verified').first()).toBeVisible

    await expect(page.getByText('Tooltip verified successfully')).toBeVisible() 

    await page.getByTestId('static-practice-select').selectOption('Easy - Basic locator targeting')
    await expect(page.getByTestId('static-dropdown-status')).toContainText('Static dropdown selected: Easy')

})


test('Handling Inputs, Checkbox, Radio, Dropdown', async({page}) => {

    await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')
    
    const name = 'Playwright'
    const emailid= 'info@playwrightmasteryacademy.com'
    const dropdownValue='Playwright Core'
    
    await page.getByTestId('name-input').fill(name)
    await page.getByTestId('email-input').fill(emailid)
    await page.getByTestId('track-select').selectOption(dropdownValue)
    await page.getByTestId('remember-checkbox').check()
    await page.getByTestId('mode-api-radio').check()
    await page.getByTestId('submit-form-btn').click()
    await expect(page.getByText(`${name} submitted (${emailid}) for ${dropdownValue}`)).toBeVisible()
    await page.waitForTimeout(5000)
})

test('Handling Static Waits, Keyboard', async({page}) => {

    await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

    // await page.getByTestId('async-load-btn').click()

    // await page.waitForTimeout(20000)

    // await expect(page.getByText('Async result loaded successfully.')).toBeVisible()

    await page.getByTestId('keyboard-input').fill('playwright')

    await page.getByTestId('keyboard-input').press('Enter')

    await expect(page.getByText('Command submitted: playwright')).toBeVisible()

    //Tab,Escape,Backspace,Delete,Arrowup,ArrowDown,Arrow Left,Arrow Right,space,

    //a to z,1 to 0

    //ctrl+c,ctrl+v,Shift+Tab
})

test('Handling Text and Attribute Extraction', async({page}) => {

    await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

    // //Extract only visible text - return type string datatype
    // const innerTextvalue=await page.getByTestId('extract-textcontent-target').innerText()

    // console.log('Inner text Value:',innerTextvalue)

    // //Extract visible and hidden text - return type string datatype
    // const textContentValue =await page.getByTestId('extract-textcontent-target').textContent()

    // console.log("Value:",textContentValue)

    // const value = await page.getByTestId('extract-inputvalue-target').inputValue()

    // console.log("Value:",value)

    // const attrValue = await page.getByTestId('extract-attribute-target').getAttribute('class')
    // console.log("AttributeValue:",attrValue)

    //extract all visible text - return type array
    const allInnerTextValue = await page.getByTestId('extract-list-item').allInnerTexts()

    console.log("AllInnerText:"+allInnerTextValue)


    //Extract all visible and hidden text -return type array
    const allTextContentValue = await page.getByTestId('extract-list-item').allTextContents()

    console.log("AllText:Content"+allTextContentValue)

    const html = await page.getByTestId('extract-list').innerHTML()
    console.log("html===>",html)
})

})