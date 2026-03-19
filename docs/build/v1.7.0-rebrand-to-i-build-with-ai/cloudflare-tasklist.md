# Cloudflare Redirect Setup Tasklist

This document outlines all tasks required to set up Cloudflare Page Rules for redirecting icodewith.ai → ibuildwith.ai with full path preservation.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |

---

## Phase 1: Cloudflare Account & Domain Setup

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Create Cloudflare account | Sign up at https://dash.cloudflare.com/sign-up (skip if already have account) | None | 🟢 Completed | USER |
| 1.2 | Add domain to Cloudflare | Click "Add a Site" and enter `icodewith.ai` | 1.1 | 🟢 Completed | USER |
| 1.3 | Select free plan | Choose "Free" plan when prompted | 1.2 | 🟢 Completed | USER |
| 1.4 | Review imported DNS records | Verify all existing DNS records were imported correctly from Namecheap | 1.3 | 🟢 Completed | USER |
| 1.5 | Note Cloudflare nameservers | Copy the 2 nameservers provided by Cloudflare (`maciej.ns.cloudflare.com`, `zelda.ns.cloudflare.com`) | 1.4 | 🟢 Completed | USER |

---

## Phase 2: Namecheap Nameserver Update

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Log in to Namecheap | Access Namecheap account | None | 🟢 Completed | USER |
| 2.2 | Navigate to domain settings | Go to Domain List → icodewith.ai → Manage | 2.1 | 🟢 Completed | USER |
| 2.3 | Change nameservers | Under "Nameservers", select "Custom DNS" and enter the 2 Cloudflare nameservers | 2.2, 1.5 | 🟢 Completed | USER |
| 2.4 | Save nameserver changes | Click "Save" to apply nameserver changes | 2.3 | 🟢 Completed | USER |
| 2.5 | Document old nameservers | Record old nameservers for rollback: `dns1.registrar-servers.com`, `dns2.registrar-servers.com` | 2.2 | 🟢 Completed | USER |

---

## Phase 3: Wait for DNS Propagation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Wait for Cloudflare activation | Wait for email from Cloudflare confirming domain is active (typically 5-30 minutes) | Phase 2 complete | 🟢 Completed | USER |
| 3.2 | Verify domain status | Check Cloudflare dashboard for "Active" status | 3.1 | 🟢 Completed | USER |
| 3.3 | Test DNS resolution | Run `nslookup icodewith.ai` to verify DNS points to Cloudflare IPs (104.21.20.119, 172.67.192.167) | 3.2 | 🟢 Completed | USER |

---

## Phase 4: Configure DNS Records in Cloudflare

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 4.1 | Add apex A record | Create A record: Name=`@`, IPv4=`192.0.2.1`, Proxy=ON (orange cloud), TTL=Auto | Phase 3 complete | 🟢 Completed | USER |
| 4.2 | Add www CNAME record | Create CNAME: Name=`www`, Target=`icodewith.ai`, Proxy=ON (orange cloud), TTL=Auto | Phase 3 complete | 🟢 Completed | USER |
| 4.3 | Verify proxy status | Confirm both records show orange cloud (proxied) icon, not grey cloud | 4.1, 4.2 | 🟢 Completed | USER |
| 4.4 | Test DNS propagation | Wait 2-5 minutes and verify records are active | 4.3 | 🟢 Completed | USER |

---

## Phase 5: Configure SSL/TLS Settings

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 5.1 | Navigate to SSL/TLS settings | Go to SSL/TLS tab in Cloudflare dashboard | Phase 4 complete | 🟢 Completed | USER |
| 5.2 | Select encryption mode | Choose "Flexible" or "Full" (recommend "Flexible" for redirect-only setup) | 5.1 | 🟢 Completed | USER |
| 5.3 | Enable Always Use HTTPS | Go to SSL/TLS → Edge Certificates → Enable "Always Use HTTPS" | 5.1 | 🟢 Completed | USER |
| 5.4 | Wait for SSL certificate | Wait 5-15 minutes for automatic SSL certificate provisioning | 5.2, 5.3 | 🟢 Completed | USER |
| 5.5 | Verify SSL certificate | Check SSL/TLS → Edge Certificates for "Active Certificate" status | 5.4 | 🟢 Completed | USER |

---

## Phase 6: Create Page Rules for Redirects

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 6.1 | Navigate to Page Rules | Go to Rules → Page Rules in Cloudflare dashboard | Phase 5 complete | 🟢 Completed | USER |
| 6.2 | Create www redirect rule | Click "Create Page Rule" with: URL=`www.icodewith.ai/*`, Setting="Forwarding URL", Code="301", Destination=`https://www.ibuildwith.ai/$1` | 6.1 | 🟢 Completed | USER |
| 6.3 | Save www redirect rule | Click "Save and Deploy Page Rule" | 6.2 | 🟢 Completed | USER |
| 6.4 | Create apex redirect rule | Click "Create Page Rule" with: URL=`icodewith.ai/*`, Setting="Forwarding URL", Code="301", Destination=`https://www.ibuildwith.ai/$1` | 6.3 | 🟢 Completed | USER |
| 6.5 | Save apex redirect rule | Click "Save and Deploy Page Rule" | 6.4 | 🟢 Completed | USER |
| 6.6 | Verify rule order | Ensure www rule is listed before apex rule (more specific rules first) | 6.5 | 🟢 Completed | USER |
| 6.7 | Verify rule status | Confirm both rules show "Active" status | 6.6 | 🟢 Completed | USER |

---

## Phase 7: Testing - Basic Redirects

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 7.1 | Test apex domain | Visit `http://icodewith.ai/` and verify redirect to `https://www.ibuildwith.ai/` | Phase 6 complete | 🟢 Completed | USER |
| 7.2 | Test www domain | Visit `http://www.icodewith.ai/` and verify redirect to `https://www.ibuildwith.ai/` | Phase 6 complete | 🟢 Completed | USER |
| 7.3 | Test HTTPS apex | Visit `https://icodewith.ai/` and verify redirect to `https://www.ibuildwith.ai/` | Phase 6 complete | 🟢 Completed | USER |
| 7.4 | Test HTTPS www | Visit `https://www.icodewith.ai/` and verify redirect to `https://www.ibuildwith.ai/` | Phase 6 complete | 🟢 Completed | USER |

---

## Phase 8: Testing - Path Preservation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 8.1 | Test blog path | Visit `https://icodewith.ai/blog/` and verify redirect to `https://www.ibuildwith.ai/blog/` | Phase 7 complete | 🟢 Completed | USER |
| 8.2 | Test about page | Visit `https://icodewith.ai/about-marcelo/` and verify redirect to `https://www.ibuildwith.ai/about-marcelo/` | Phase 7 complete | 🟢 Completed | USER |
| 8.3 | Test podcast path | Visit `https://icodewith.ai/podcast/` and verify redirect to `https://www.ibuildwith.ai/podcast/` | Phase 7 complete | 🟢 Completed | USER |
| 8.4 | Test apps path | Visit `https://icodewith.ai/apps/` and verify redirect to `https://www.ibuildwith.ai/apps/` | Phase 7 complete | 🟢 Completed | USER |
| 8.5 | Test nested path | Visit `https://icodewith.ai/apps/some-app/` and verify redirect to `https://www.ibuildwith.ai/apps/some-app/` | Phase 7 complete | 🟢 Completed | USER |
| 8.6 | Test query parameters | Visit `https://icodewith.ai/blog/?page=2` and verify redirect to `https://www.ibuildwith.ai/blog/?page=2` | Phase 7 complete | 🟢 Completed | USER |

---

## Phase 9: Testing - Command Line Verification

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 9.1 | Test curl apex | Run `curl -I https://icodewith.ai/` and verify HTTP 301 with location header | Phase 8 complete | 🟢 Completed | USER |
| 9.2 | Test curl www | Run `curl -I https://www.icodewith.ai/` and verify HTTP 301 with location header | Phase 8 complete | 🟢 Completed | USER |
| 9.3 | Test curl with path | Run `curl -I https://icodewith.ai/blog/` and verify redirect preserves `/blog/` path | Phase 8 complete | 🟢 Completed | USER |
| 9.4 | Use online redirect checker | Test redirects using https://www.redirect-checker.org/ or https://httpstatus.io/ | Phase 8 complete | 🟢 Completed | USER |

---

## Phase 10: Testing - Multiple Browsers & Devices

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 10.1 | Test in Chrome | Verify redirects work correctly in Chrome browser | Phase 9 complete | 🟢 Completed | USER |
| 10.2 | Test in Firefox | Verify redirects work correctly in Firefox browser | Phase 9 complete | 🟢 Completed | USER |
| 10.3 | Test in Safari | Verify redirects work correctly in Safari browser | Phase 9 complete | 🟢 Completed | USER |
| 10.4 | Test on mobile device | Verify redirects work correctly on iPhone/Android | Phase 9 complete | 🟢 Completed | USER |
| 10.5 | Test in incognito mode | Verify redirects work in incognito/private browsing (no cache) | Phase 9 complete | 🟢 Completed | USER |

---

## Phase 11: SEO Configuration (Optional)

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 11.1 | Add icodewith.ai to Search Console | Add old domain to Google Search Console if not already added | Phase 10 complete | 🟢 Completed | USER |
| 11.2 | Verify ownership | Verify ownership of icodewith.ai domain in Search Console | 11.1 | 🟢 Completed | USER |
| 11.3 | Submit change of address | Use "Change of Address" tool in Search Console Settings to notify Google of domain move | 11.2 | 🟢 Completed | USER |
| 11.4 | Monitor crawl errors | Check Search Console for any crawl errors related to redirects | 11.3 | 🟡 In Progress | USER |
| 11.5 | Update sitemap submission | Verify new sitemap (www.ibuildwith.ai) is submitted to Search Console | 11.3 | 🟢 Completed | USER |

---

## Notes

### Expected Timeline
- **Phase 1-2**: 10-15 minutes (setup and nameserver change)
- **Phase 3**: 5 minutes - 2 hours (waiting for DNS propagation, typically ~30 min)
- **Phase 4-5**: 20-30 minutes (DNS and SSL setup, including wait time)
- **Phase 6**: 10 minutes (creating Page Rules)
- **Phase 7-10**: 20-30 minutes (comprehensive testing)
- **Phase 11**: 15-20 minutes (optional SEO setup)
- **Phase 12**: 10 minutes (monitoring and documentation)

**Total Estimated Time: 2-4 hours** (mostly waiting for DNS/SSL propagation)

### Cost
**$0/month** - Everything uses Cloudflare's free tier

### Dependencies
- Cloudflare account (free)
- Access to Namecheap domain registrar
- icodewith.ai domain ownership

### Critical Success Factors
1. DNS records MUST be proxied (orange cloud) for Page Rules to work
2. Both nameservers must be updated at Namecheap
3. Wait for DNS propagation before testing
4. Test in multiple browsers and incognito mode to avoid cache issues

### Resources
- [Cloudflare Dashboard](https://dash.cloudflare.com/)
- [Cloudflare Page Rules Documentation](https://developers.cloudflare.com/rules/page-rules/)
- [Design Document](./cloudflare-redirect-design.md)
- [Redirect Checker Tool](https://www.redirect-checker.org/)
- [HTTP Status Checker](https://httpstatus.io/)

---

**Document Version:** 1.0
**Created:** 2025-11-17
**Related Project:** v1.7.0-rebrand-to-i-build-with-ai
**Status:** Ready for Implementation
