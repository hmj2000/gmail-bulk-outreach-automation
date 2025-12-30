/**
 * Gmail Bulk Outreach Automation (Google Apps Script)
 *
 * What it does:
 * - Loops through a list of recipients
 * - Builds a personalized subject + HTML email body
 * - Optionally attaches files from Google Drive
 * - Sends emails through the logged-in Gmail account
 *
 * IMPORTANT:
 * - Replace SAMPLE data before running.
 * - Do a 1-person test first (send to yourself).
 */

function sendCustomEmail() {
  /******************************************************************
   * 1) RECIPIENT LIST (EDIT THIS)
   *
   * REQUIRED FORMAT (EXACTLY 4 ITEMS PER ROW):
   * ["Company Name", "First Name", "Last Name", "Email Address"]
   *
   * If you don't know a name, use empty quotes "" (NOT null, NOT _)
   ******************************************************************/
  var recipientData = [
    ["Example Company", "Jane", "Doe", "jane.doe@example.com"],
    ["Another Company", "", "", "info@anothercompany.com"]
    // Add more rows here...
  ];

  /******************************************************************
   * 2) ATTACHMENTS (OPTIONAL)
   *
   * If you want attachments:
   * - Upload files to Google Drive
   * - Copy their File IDs
   * - Replace FILE_ID_1 / FILE_ID_2
   *
   * If you do NOT want attachments:
   * - Leave attachments = [] and do nothing else
   ******************************************************************/
  var attachments = [];

  // Uncomment this block if you want attachments:
  /*
  var file1 = DriveApp.getFileById("FILE_ID_1");
  var file2 = DriveApp.getFileById("FILE_ID_2");
  attachments = [file1.getBlob(), file2.getBlob()];
  */

  /******************************************************************
   * 3) SEND EMAILS
   ******************************************************************/
  recipientData.forEach(function (data) {
    var companyName = data[0];
    var firstName = data[1];
    var lastName = data[2];
    var recipientEmail = data[3];

    // Use first name if available; otherwise, fall back to company name.
    var greetingName = (firstName && firstName.trim() !== "") ? firstName : companyName;

    // Personalized email subject
    var subject = "Exploring Service Opportunities for " + companyName;

    // Personalized HTML email body (edit this template as needed)
    var body =
      "<p>Hi " + greetingName + ",</p>" +
      "<p>" +
      "I’m reaching out because I wanted to introduce my services and see if it would be helpful to connect. " +
      "This email is being sent using a small automation I built with Google Apps Script to keep outreach consistent while still personalizing each message." +
      "</p>" +
      "<p>" +
      "If you’re the right person to speak with, I’d be happy to share details and answer questions. " +
      "If not, could you point me to the best contact?" +
      "</p>" +
      "<p>Thanks,<br>" +
      "Your Name<br>" +
      "Your Company<br>" +
      "your.email@example.com</p>";

    // Build email payload
    var emailPayload = {
      to: recipientEmail,
      subject: subject,
      htmlBody: body
    };

    // Only attach files if attachments were enabled above
    if (attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    // Send the email
    MailApp.sendEmail(emailPayload);
  });
}
