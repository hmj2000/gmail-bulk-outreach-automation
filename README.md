# gmail-bulk-outreach-automation

This project is a small Google Apps Script I built to solve a very specific, real problem:
sending the same general email (with attachments) to a lot of people without manually rewriting it 20–30 times or paying for a full CRM.

I needed something simple, flexible, and free. After looking into different tools and CRMs that didn’t really justify their cost for my use case, I found that Gmail supports scripting through Google Apps Script. That made it possible to build exactly what I needed using the tools I was already using every day.

--------------------------------------------------

WHAT THIS SCRIPT DOES

This script sends individual, personalized emails through Gmail.

You provide:
- A list of recipients
- An email template
- Optional file attachments from Google Drive

The script then:
1. Loops through each recipient
2. Personalizes the subject line and email body
3. Attaches the same files (if enabled)
4. Sends the email through your Gmail account

Each recipient receives their own email. This is not a mass CC or BCC email.

--------------------------------------------------

WHAT YOU NEED BEFORE STARTING

- A Google account with Gmail
- Access to Google Drive
- A web browser (Chrome works best)

No additional software or installations are required.

--------------------------------------------------

STEP-BY-STEP SETUP

STEP 1 — LOG INTO YOUR GOOGLE ACCOUNT
Make sure you are logged into the Gmail account you want to send emails from.

IMPORTANT:
Emails will be sent from the account you are currently logged into.

--------------------------------------------------

STEP 2 — OPEN GOOGLE APPS SCRIPT
1. Go to https://script.google.com
2. Click “New project”

You will see a code editor with a file called Code.gs.

--------------------------------------------------

STEP 3 — ADD THE SCRIPT
1. Click on Code.gs
2. Delete any existing code
3. Paste the script from this repository into the file
4. Press Ctrl + S to save

Optionally, rename the project.

--------------------------------------------------

RECIPIENT LIST FORMAT (IMPORTANT)

In the code, you will see this section:

var recipientData = [
  ["Example Company", "Jane", "Doe", "jane.doe@example.com"]
];

This is the list you edit.

REQUIRED FORMAT (EXACT):
Each recipient must follow this structure:

["Company Name", "First Name", "Last Name", "Email Address"]

EXAMPLES:

var recipientData = [
  ["Tool Country", "Brendan", "Kelly", "brendan@toolcountry.com"],
  ["Infinity Fasteners", "Steve", "Hengeli", "steve@infinityfast.com"],
  ["Some Company", "", "", "info@somecompany.com"]
];

If you do not know a first or last name, use empty quotes "".
Please don't use null values or underscores.

--------------------------------------------------

ATTACHMENTS (OPTIONAL)

This script can attach files from Google Drive.

HOW TO ADD ATTACHMENTS:
1. Upload your file(s) to Google Drive
2. Right-click the file and select “Get link”
3. Copy the link

The link will look like this:
https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/view

The FILE ID is the part between /d/ and /view:
1AbCdEfGhIjKlMnOpQrStUvWxYz

--------------------------------------------------

ADDING FILE IDS TO THE SCRIPT

Find this commented section in the code:

/*
var file1 = DriveApp.getFileById("FILE_ID_1");
var file2 = DriveApp.getFileById("FILE_ID_2");
attachments = [file1.getBlob(), file2.getBlob()];
*/

Replace FILE_ID_1 and FILE_ID_2 with your actual Google Drive File IDs
and uncomment the block.

--------------------------------------------------

NO ATTACHMENTS?

If you do not want attachments, you do not need to change anything.
The script works fine without them.

--------------------------------------------------

RUNNING THE SCRIPT

1. At the top of the Apps Script editor, make sure the selected function is:
sendCustomEmail
2. Click the Run button

--------------------------------------------------

FIRST-TIME PERMISSIONS

The first time you run the script, Google will ask for permission.

1. Click “Review permissions”
2. Choose your Google account
3. If you see an “unverified app” warning:
   - Click “Advanced”
   - Click “Go to project”
4. Click “Allow”

This is normal. You are authorizing your own script.

--------------------------------------------------

STRONGLY RECOMMENDED: TEST FIRST

Before emailing multiple people, test with yourself.

Example test list:

var recipientData = [
  ["Test Company", "Your Name", "", "your.email@gmail.com"]
];

Confirm:
- Subject looks correct
- Email formatting is correct
- Attachments appear (if enabled)

Once confirmed, replace the test data with your real list.

--------------------------------------------------

CUSTOMIZING THE EMAIL

You can edit:
- The subject line
- The email body
- The signature
- Additional dynamic variables

The email body supports basic HTML:
- <p> for paragraphs
- <strong> for bold text
- <br> for line breaks
- <ol> and <li> for lists

You can personalize content using:
- companyName
- firstName
- lastName

--------------------------------------------------

NOTES AND LIMITATIONS

- Gmail has daily sending limits depending on account type
- This script is intended for small to medium outreach
- Keep messaging professional to avoid spam filters

