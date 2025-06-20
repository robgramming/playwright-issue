This project demonstrates an issue in Playwright. &lt;option> inside &lt;optgroup disabled> can still be selected in a Playwright test. &lt;option disabled> can also be selected in a Playwright test. Behold, the screenshot below is the result of this playwright test. "Carrot" is an &lt;option> inside &lt;optgroup disabled>. "Medium" is an &lt;option disabled>

Steps to reproduce.
1. Make a nice cup of tea
2. Clone this repository
3. Install Playwright: npm init playwright@latest
4. Run the test: npx playwright test
5. The test runs a local server using npx serve -p 3000
6. The test passes
7. View the /playwright-report/index.html
8. In the report, click on the "Playwright selects disabled options." result
9. Behold, the screenshot shows disabled options have been selected by Playwright
10. Expected behaviour: the test should fail with the error, "element is not enabled".

![8754a0c7b48359bd1b2b88645069c2ec3405c25a](https://github.com/user-attachments/assets/4dc3843e-2396-4dad-b1cd-354479428ddb)
