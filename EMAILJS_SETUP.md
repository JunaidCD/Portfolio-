# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID**

## Step 3: Create Email Template
1. Go to Email Templates in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key
1. Go to Account > General in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Update Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form
1. Run your portfolio: `npm run dev`
2. Fill out the contact form
3. Check your email for the message
4. Check EmailJS dashboard for delivery status

## Template Variables Used:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (hardcoded)

## Free Tier Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Security Notes:
- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- The public key is safe to use in frontend code
