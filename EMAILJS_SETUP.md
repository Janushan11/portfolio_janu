# EmailJS Setup Guide

## Overview
The contact form is configured to use EmailJS for sending emails. If EmailJS is not configured, it will fall back to opening the user's email client with a pre-filled mailto link.

## Setup Steps

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (100 emails/month free)

### 2. Create Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:
   ```
   Subject: {{subject}} - Portfolio Contact
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. **Copy your Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy your Public Key** (e.g., `abcdefghijklmnop`)

### 5. Update index.html
Open `index.html` and find the `EMAILJS_CONFIG` object (around line 1020):

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
    serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
    templateId: 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
};
```

Replace the placeholder values with your actual EmailJS credentials.

## Testing
1. Fill out the contact form
2. Submit the form
3. Check your email inbox for the message
4. If it doesn't work, check the browser console for errors

## Fallback Behavior
If EmailJS is not configured (still has placeholder values), the form will:
- Show a loading state
- Open the user's email client with a pre-filled message
- Show a success message

This ensures the form always works, even without EmailJS setup.

