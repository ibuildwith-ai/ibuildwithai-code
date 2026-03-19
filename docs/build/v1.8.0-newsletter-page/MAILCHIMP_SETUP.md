# Mailchimp Setup Guide

This guide will help you find and configure the Mailchimp environment variables needed for the newsletter signup feature.

## Required Environment Variables

You need to set these three variables in Netlify:

1. `MAILCHIMP_API_KEY`
2. `MAILCHIMP_SERVER_PREFIX`
3. `MAILCHIMP_LIST_ID`

---

## Step 1: Get Your Mailchimp API Key

### Option A: Create a New API Key (Recommended)

1. Log in to your Mailchimp account at [https://mailchimp.com](https://mailchimp.com)
2. Click your profile icon in the top-right corner
3. Select **Account & Billing** → **Extras** → **API keys**
4. Scroll down to the "Your API keys" section
5. Click **Create A Key**
6. Give it a descriptive name like "iBuildWith.ai Newsletter"
7. Copy the API key immediately (you won't be able to see it again!)
8. Save it somewhere secure

### Option B: Use an Existing API Key

1. Go to **Account & Billing** → **Extras** → **API keys**
2. Copy an existing API key from the list

**Example API Key format:**
```
abc123def456ghi789jkl012mno345pq-us20
```

---

## Step 2: Get Your Server Prefix

The server prefix is part of your API key - it's the part **after the dash** at the end.

**Example:**
- API Key: `abc123def456ghi789jkl012mno345pq-us20`
- Server Prefix: `us20`

Common prefixes: `us1`, `us2`, `us3`, ... `us20`, etc.

---

## Step 3: Get Your Audience (List) ID

1. In Mailchimp, click **Audience** in the left sidebar
2. If you have multiple audiences, select the one you want to use for newsletter signups
3. Click **Settings** → **Audience name and defaults**
4. Look for **Audience ID** - it's usually at the top right
5. Copy the Audience ID

**Example Audience ID format:**
```
a1b2c3d4e5
```

**Alternative method:**
1. Go to **Audience** → **All contacts**
2. Click **Settings** dropdown
3. Select **Audience name and defaults**
4. The Audience ID will be displayed

---

## Step 4: Add Variables to Netlify

### Via Netlify Dashboard:

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Select your **iBuildWith.ai** site
3. Go to **Site configuration** → **Environment variables**
4. Click **Add a variable** or **Add environment variable**
5. Add each variable:

   **Variable 1:**
   - Key: `MAILCHIMP_API_KEY`
   - Value: `[your-full-api-key-including-server-prefix]`
   - Scopes: All (or select specific deploy contexts)

   **Variable 2:**
   - Key: `MAILCHIMP_SERVER_PREFIX`
   - Value: `[just-the-server-prefix-like-us20]`
   - Scopes: All

   **Variable 3:**
   - Key: `MAILCHIMP_LIST_ID`
   - Value: `[your-audience-id]`
   - Scopes: All

6. Click **Save** for each variable

### Via Netlify CLI (Alternative):

```bash
netlify env:set MAILCHIMP_API_KEY "your-api-key-here"
netlify env:set MAILCHIMP_SERVER_PREFIX "us20"
netlify env:set MAILCHIMP_LIST_ID "your-list-id-here"
```

---

## Step 5: Verify Setup

After adding the variables:

1. **Redeploy your site** (Netlify needs to restart to pick up new env vars)
   - Go to **Deploys** → **Trigger deploy** → **Deploy site**
   
2. **Test the newsletter form** on your live site:
   - Go to `https://ibuildwith.ai/newsletter/`
   - Fill out the form with a test email
   - Submit
   - Check your Mailchimp audience to see if the contact was added
   - Check your email for the notification

---

## Troubleshooting

### "Member Exists" Error
If someone is already subscribed, Mailchimp returns a 400 error. The function handles this gracefully and treats it as a success.

### API Key Invalid
- Make sure you copied the entire API key including the server prefix (e.g., `-us20`)
- Verify the API key is active in Mailchimp

### Wrong Server Prefix
- Double-check that the server prefix matches the end of your API key
- It should be something like `us1`, `us20`, etc.

### List ID Not Found
- Verify you copied the correct Audience ID
- Make sure the audience/list still exists in your Mailchimp account

### Check Netlify Function Logs
1. Go to Netlify Dashboard → **Functions**
2. Click on `newsletter-signup`
3. Check the logs for detailed error messages

---

## Security Notes

- ✅ Never commit API keys to Git
- ✅ Keep your API keys secure
- ✅ Use Netlify's environment variables (they're encrypted)
- ✅ Consider creating a dedicated API key for this integration (easier to revoke if needed)

---

## Complete Example

Here's what your Netlify environment variables should look like:

```
MAILCHIMP_API_KEY=abc123def456ghi789jkl012mno345pq-us20
MAILCHIMP_SERVER_PREFIX=us20
MAILCHIMP_LIST_ID=a1b2c3d4e5
```

---

## Need Help?

If you run into issues:
1. Check the Netlify function logs
2. Verify all three variables are set correctly
3. Make sure you redeployed after adding the variables
4. Test with a fresh email address (not one already in your list)
