# Version Design Document : v1.8.6-swap-integration-to-sender
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
_Overview of features included in this version._

This version migrates the newsletter signup integration from Mailchimp to Sender.net. The user has already deleted their Mailchimp account and is now using Sender.net as their email marketing platform.

**Key Changes:**
* **Remove Mailchimp Integration**: Remove all Mailchimp API code and dependencies
* **Add Sender.net Integration**: Implement Sender.net API for adding newsletter subscribers
* **Environment Variables**: Replace Mailchimp env vars with Sender.net credentials
* **Documentation Updates**: Update README and remove legacy Mailchimp documentation
* **Maintain Core Functionality**: Keep existing form validation, rate limiting, and Resend email notifications unchanged

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Current Architecture:**
* **Frontend**: Newsletter form at `/newsletter` with client-side validation (`newsletter-form.js`)
* **Backend**: Netlify Function (`newsletter-signup.js`) that:
  1. Validates form input
  2. Sends notification email via Resend
  3. Adds subscriber to Mailchimp list ← **THIS CHANGES**
* **Dependencies**:
  - `resend` (stays)
  - `@mailchimp/mailchimp_marketing` ← **REMOVE**

**New Architecture:**
* **Frontend**: No changes required
* **Backend**: Netlify Function (`newsletter-signup.js`) will:
  1. Validates form input (unchanged)
  2. Sends notification email via Resend (unchanged)
  3. Adds subscriber to Sender.net list ← **NEW**
* **Dependencies**:
  - `resend` (stays)
  - Native `fetch` or `https` for Sender.net API calls (no additional package needed)

## 3. Sender.net API Integration Details

### API Specifications

**Base URL:** `https://api.sender.net/v2/`

**Authentication:**
* Method: Bearer token
* Header: `Authorization: Bearer {SENDER_API_TOKEN}`
* Token creation: Settings > API access tokens in Sender.net dashboard

**Endpoint for Adding Subscribers:**
* Endpoint: `/subscribers` (to be verified during implementation)
* Method: `POST`
* Content-Type: `application/json`

**Request Payload:**
```json
{
  "email": "user@example.com",
  "firstname": "John",
  "lastname": "Doe",
  "groups": ["LIST_ID_HERE"]
}
```

**Expected Response:**
* Success: `200 OK` or `201 Created`
* Error cases to handle:
  - Already subscribed (handle gracefully)
  - Invalid email
  - API authentication failure
  - Rate limiting

### Error Handling Strategy

Similar to current Mailchimp implementation:
1. If Sender.net API call fails, log the error but don't fail the entire request (email notification already succeeded)
2. Handle "already subscribed" scenario gracefully
3. If Sender.net env vars are missing, log warning and skip integration (graceful degradation)

## 4. Implementation Notes
_Shared technical considerations across all features in this version._

### Files to Modify

| File | Change Type | Description |
|------|-------------|-------------|
| `backend/package.json` | Modify | Remove `@mailchimp/mailchimp_marketing` dependency |
| `backend/netlify/functions/newsletter-signup.js` | Modify | Replace Mailchimp API code (lines 2, 117-146) with Sender.net API |
| `README.md` | Modify | Update environment variables section |
| `.cody/project/build/v1.8.0-newsletter-page/MAILCHIMP_SETUP.md` | Delete | Remove legacy Mailchimp documentation |
| `.cody/project/build/feature-backlog.md` | Modify | Add v1.8.6 version entry |
| `.cody/project/build/release-notes.md` | Modify | Add v1.8.6 release notes |

### Environment Variables Changes

**Remove (Mailchimp):**
* `MAILCHIMP_API_KEY`
* `MAILCHIMP_SERVER_PREFIX`
* `MAILCHIMP_LIST_ID`

**Add (Sender.net):**
* `SENDER_API_TOKEN` - API access token from Sender.net dashboard
* `SENDER_LIST_ID` - The list/group ID where subscribers should be added

**Keep (Unchanged):**
* `RESEND_API_KEY`
* `RECIPIENT_EMAIL`

### Security Considerations

* **Rate Limiting**: Existing rate limiting logic stays unchanged (3 requests per hour per IP)
* **Input Validation**: Existing validation stays unchanged (required fields, email regex)
* **CORS**: Existing CORS configuration stays unchanged
* **API Token Security**: Ensure `SENDER_API_TOKEN` is stored securely in Netlify environment variables, never in code

### Code Structure

The Sender.net integration will follow the same pattern as Mailchimp:

```javascript
// Conditional execution based on env vars
if (process.env.SENDER_API_TOKEN && process.env.SENDER_LIST_ID) {
    try {
        // Make API call to Sender.net
        // Handle response
    } catch (senderError) {
        // Handle errors gracefully
        // Log but don't fail the request
    }
} else {
    console.warn('Sender.net environment variables not set. Skipping integration.');
}
```

## 5. Testing Plan

### Local Testing
1. Set up local environment variables for Sender.net
2. Test newsletter signup form
3. Verify subscriber appears in Sender.net dashboard
4. Verify email notification still sent via Resend

### Production Testing
1. Deploy to staging environment (if available)
2. Test with real Sender.net account
3. Verify existing subscribers in Sender.net are handled correctly
4. Monitor error logs for any API issues

### Test Cases
* ✅ New subscriber with valid email → Added to Sender.net + email sent
* ✅ Existing subscriber → Handle gracefully (no error shown to user)
* ✅ Invalid email format → Validation error
* ✅ Missing required fields → Validation error
* ✅ Rate limiting → 429 error after 3 requests per hour
* ✅ Sender.net API down → Email notification succeeds, Sender error logged
* ✅ Missing Sender env vars → Email notification succeeds, warning logged

## 6. Migration Strategy

**Pre-Migration Checklist:**
- [ ] Obtain Sender.net API token
- [ ] Identify Sender.net list/group ID for newsletter subscribers
- [ ] Backup current `newsletter-signup.js` function
- [ ] Document current Mailchimp configuration (for rollback if needed)

**Migration Steps:**
1. Create new version folder (v1.8.6-swap-integration-to-sender)
2. Update `backend/package.json` to remove Mailchimp dependency
3. Run `npm install` in backend directory
4. Modify `newsletter-signup.js` with Sender.net integration
5. Update `README.md` with new environment variables
6. Remove `MAILCHIMP_SETUP.md` documentation
7. Update feature backlog and release notes
8. Test locally
9. Deploy to production
10. Update Netlify environment variables
11. Test in production

**Rollback Plan:**
If issues arise, we can quickly revert by:
1. Restoring previous `newsletter-signup.js` from git history
2. Restoring Mailchimp environment variables (if account still exists)
3. Reinstalling `@mailchimp/mailchimp_marketing` package

**Note:** Since Mailchimp account is already deleted, rollback would require recreating Mailchimp account or accepting that newsletter signups won't sync to email platform until Sender.net issues are resolved.

## 7. Required Information from User

Before implementation can begin, we need:

1. **Sender.net API Token**
   - Location: Sender.net Dashboard > Settings > API access tokens
   - Create with "Forever" validity period

2. **Sender.net List/Group ID**
   - The specific list ID where newsletter subscribers should be added
   - This can be found in your Sender.net lists/groups section

## 8. Performance Considerations

* **API Call Overhead**: Sender.net API call is made after Resend email notification
* **Timeout Handling**: Set reasonable timeout for Sender.net API calls (e.g., 5 seconds)
* **Async Operations**: Both Resend and Sender.net calls are async and don't block each other
* **Error Impact**: If Sender.net call fails, user still sees success message (since email notification succeeded)

## 9. Monitoring and Logging

**What to Log:**
* Successful Sender.net API calls
* Failed Sender.net API calls with error details
* "Already subscribed" scenarios
* Missing environment variable warnings

**Where to Monitor:**
* Netlify Function logs
* Sender.net dashboard for new subscribers
* Email inbox for notification emails

## 10. Open Questions

1. **Sender.net Exact Endpoint**: Need to verify exact endpoint path and payload structure from api.sender.net documentation
2. **Sender.net Rate Limits**: Does Sender.net have API rate limits we need to consider?
3. **Double Opt-in**: Does Sender.net require double opt-in confirmation emails, or can we add subscribers directly?
4. **Custom Fields**: Are there any custom fields in Sender.net we should populate beyond firstname/lastname/email?

## 11. Success Criteria

This version will be considered successful when:

* ✅ Newsletter signup form continues to work without user-facing changes
* ✅ New subscribers are added to Sender.net list
* ✅ Email notifications continue to be sent via Resend
* ✅ No Mailchimp code or dependencies remain in codebase
* ✅ Documentation accurately reflects Sender.net integration
* ✅ Error handling works as expected (graceful degradation)
* ✅ All tests pass in production environment

## 12. Timeline Estimate

* **Research Sender.net API**: 30 minutes
* **Code Implementation**: 1 hour
* **Local Testing**: 30 minutes
* **Documentation Updates**: 30 minutes
* **Production Deployment**: 30 minutes
* **Production Testing**: 30 minutes

**Total Estimated Time**: 3-4 hours

## 13. Dependencies

* Sender.net account active and configured
* API token with appropriate permissions
* List/Group created in Sender.net for subscribers
* Netlify environment variables access for production deployment
