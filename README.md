# Harun M. — Developer Portfolio (Email contact form added)

This is the full static HTML/CSS/JavaScript portfolio with your contact details added:
**harunm2294@gmail.com**

## Run locally
1. Extract this ZIP.
2. Open `index.html` in a browser. The site itself is static and needs no build tools.

## What was updated
- Replaced the placeholder email with `harunm2294@gmail.com`.
- Added a direct `mailto:` email button.
- Added a responsive contact form for name, visitor email, optional subject, and message.
- Added form validation, sending state, and success/error feedback.
- Kept the existing design, projects, scripts, and image assets.

## Make the contact form send emails (required one-time setup)
The form uses EmailJS, a browser-side email delivery service. The direct email button works immediately, but the form will not send until EmailJS is configured.

### 1. Create an EmailJS service
1. Go to https://www.emailjs.com/ and create/sign in to your account.
2. In Email Services, connect an email service/account that EmailJS supports.
3. Create an Email Template.

### 2. Configure the template
Set the recipient / **To email** to `{{to_email}}` (or directly to `harunm2294@gmail.com`).
Suggested subject:
`Portfolio message: {{subject}}`

Suggested reply-to:
`{{reply_to}}`

Suggested body:
```
New portfolio message

Name: {{from_name}}
Visitor email: {{reply_to}}
Subject: {{subject}}

Message:
{{message}}
```

The template must use the variable names exactly as shown above. If you set the recipient directly in the template, it is okay to omit `{{to_email}}`.

### 3. Add your EmailJS IDs
Open `script.js` and replace the three placeholder values at the top:
- `YOUR_EMAILJS_SERVICE_ID`
- `YOUR_EMAILJS_TEMPLATE_ID`
- `YOUR_EMAILJS_PUBLIC_KEY`

Find these in the EmailJS dashboard: Email Services, Email Templates, and Account/Public Key. Only use the **public key** in this frontend file.

### 4. Test
1. Save the changes.
2. Open the portfolio and send yourself a test message.
3. Check the inbox and Spam/Junk folder.
4. Confirm you can reply to the visitor using the reply-to address.

### 5. Publish on GitHub Pages
Upload the entire contents of this folder to the repository root, preserving `index.html`, `style.css`, `script.js`, and `assets/`. Once published, send a test message from the live URL as well.

## Security notes
- Never put your Gmail password, Google app password, or a private API secret in `script.js`.
- EmailJS's public key is intended for browser use. Configure allowed domains and abuse/spam protections in the EmailJS dashboard. For a public site, consider CAPTCHA or another anti-spam measure.
- Email delivery depends on valid EmailJS configuration and the service/template's settings.
- GitHub Pages cannot run server-side code, which is why this static site uses a client-side email service.
- The generic GitHub and LinkedIn links remain placeholders; replace them with your real profile URLs when ready.
