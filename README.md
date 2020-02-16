# TheHouseArchive
A small HTML/JavaScript program designed to help the user keep track of favorited housing market postings.

As it currently stands this program runs by downloading the files and running the "main_page.html" file from your computer. Right now it is extremely bare bones, and as time goes on features will be added. 

To run: download the zip file, unzip the file, and simply double click the "main_page.html" file.

## **UPDATE 1 (February 11th, 2020):**
Added a create profile page and a login field to the main page. The Profile creation page works and stores the email and password to your local storage on the web-browser.
The login field currently does nothing at the moment, but this will soon change.

## **UPDATE 2 (February 15th, 2020):**
The Create profile page as been altered, and the login field on the main page now works. Upon loggin in with the correct information, it will send you to an almost identical main page resurved for logged in profiles. Currently the the tabs labeled "About" and "Contact" do nothing, but this will change soon.
  Next step is to start working on storing profile data within local storage. Soon enough the plan is to have the ability to store housing market data and display this data on the logged in main page.

## **UPDATE 3 (February 16th, 2020):**
There was a small bug where upon reaching the logged in page after the login, the browser would forget the user that just logged in after switching pages. Now the bug has been fixed, and the user is remembered after the page switch with use of the browser's session storage api. The next step is still the same as the next step outlined in update 2.
