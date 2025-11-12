# BharatVidya Homepage Head Tags Audit
**Date:** 2025-11-12
**Version Audited:** v12.2.1

---

## 🔴 Critical Issues

### 1. Google Search Console Verification - BROKEN
**Location:** Line with `google-site-verification`

```html
<!-- INCORRECT -->
<meta name="google-site-verification" content="sc-domain:bharatvidya.in">
```

**Issue:** This is not a valid verification code. Google provides a unique hash like `content="abc123XYZ456..."`. The current value will NOT verify the site.

**Fix:**
1. Go to Google Search Console
2. Add property for bharatvidya.in
3. Choose "HTML tag" verification method
4. Copy the actual verification code provided
5. Replace with: `<meta name="google-site-verification" content="YOUR_ACTUAL_CODE_HERE">`

---

### 2. Structured Data Inconsistency
**Location:** ItemList schema

```json
"numberOfItems": 4,
"itemListElement": [
  // Only 2 courses listed, not 4
]
```

**Issue:** Claims 4 courses but only defines 2. This will trigger validation errors and may confuse search engines.

**Fix:** Either:
- Add 2 more courses to the list, OR
- Change `"numberOfItems": 2`

---

### 3. Missing Schema References
**Location:** Structured data @graph

```json
"isPartOf": { "@id": "https://www.bharatvidya.in/#website" },
"about": { "@id": "https://www.bharatvidya.in/#organization" }
```

**Issue:** References `#website` and `#organization` entities that don't exist in the @graph. Google will see broken references.

**Fix:** Add Organization and WebSite schemas to the @graph:

```json
{
  "@type": "Organization",
  "@id": "https://www.bharatvidya.in/#organization",
  "name": "Bhandarkar Oriental Research Institute",
  "alternateName": "BORI",
  "url": "https://www.bharatvidya.in/",
  "logo": "https://www.bharatvidya.in/assets/logo.png",
  "sameAs": [
    "https://twitter.com/BhandarkarI",
    "https://twitter.com/Bharatvidya_in"
  ]
},
{
  "@type": "WebSite",
  "@id": "https://www.bharatvidya.in/#website",
  "url": "https://www.bharatvidya.in/",
  "name": "BharatVidya",
  "publisher": { "@id": "https://www.bharatvidya.in/#organization" }
}
```

---

## 🟡 Warnings / Improvements

### 4. Emoji in Social Meta Tags
**Locations:**
- OG title: `content="BharatVidya – Learn Indian Heritage from BORI Experts 🇮🇳"`
- Twitter description: `content="🎓 Expert-led courses..."`

**Issue:** Emojis may not render consistently across all platforms (especially older browsers/apps) and can cause encoding issues.

**Recommendation:** Remove emojis from meta tags. They're fine in visible content but risky in meta tags.

---

### 5. Unnecessary Image Preload
**Location:** Preload directives

```html
<link rel="preload" as="image" href=".../home-og.webp" type="image/webp" fetchpriority="high">
```

**Issue:** Preloading the OG image (social share image) wastes bandwidth. This image is only used when sharing on social media, not visible on initial page load.

**Fix:** Remove this preload. Only keep hero-banner.webp preload:

```html
<link rel="preload" as="image" href="https://www.bharatvidya.in/assets/hero-banner.webp" type="image/webp" fetchpriority="high">
```

---

### 6. Missing Image Format Fallbacks
**Issue:** All images use WebP format only. ~5% of users (older browsers) can't display WebP.

**Recommendation:** Ensure your OG images have JPEG fallbacks:

```html
<meta property="og:image" content="https://www.bharatvidya.in/assets/og-images/home-og.jpg">
<meta property="og:image:type" content="image/jpeg">
```

---

### 7. Limited FAQ Schema
**Location:** FAQPage in structured data

**Issue:** Only 2 FAQ items. More FAQs = more opportunities for rich snippets in search results.

**Recommendation:** Add 3-5 more common questions:
- "How long are the courses?"
- "Do I need prior knowledge of Sanskrit?"
- "Can I get college credit for these courses?"
- "How much do courses cost?"
- "Are courses self-paced or scheduled?"

---

### 8. Missing Course Offers
**Location:** Course schema in ItemList

**Issue:** Course schema should include pricing and enrollment info for better rich results.

**Add to each course:**

```json
{
  "@type": "Course",
  "name": "Vedakatha – The Stories in Rigveda",
  "offers": {
    "@type": "Offer",
    "category": "Paid",
    "price": "2999",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT4H"
  }
}
```

---

## ✅ What's Working Well

1. **Title tag** - Excellent keyword targeting and brand inclusion
2. **Meta description** - Good length, includes social proof (37K learners)
3. **Canonical URL** - Properly set
4. **OG tags** - Comprehensive coverage with image dimensions
5. **Twitter cards** - Complete implementation with creator attribution
6. **GA4** - Properly configured with privacy settings
7. **Facebook Pixel** - Correct implementation with noscript fallback
8. **Schema markup** - Using @graph pattern (best practice)
9. **HTTPS** - All URLs use secure protocol
10. **Image optimization** - Using WebP format

---

## 📊 SEO Score: 7.5/10

**Breakdown:**
- Technical SEO: 8/10 (good structure, missing verification)
- Social Optimization: 8/10 (comprehensive but has emojis)
- Structured Data: 6/10 (incomplete, missing refs, inconsistencies)
- Performance: 9/10 (good preloading strategy)

---

## 🎯 Priority Action Items

1. **URGENT:** Fix Google Search Console verification code
2. **HIGH:** Add missing Organization and WebSite schemas
3. **HIGH:** Fix ItemList numberOfItems (2 not 4)
4. **MEDIUM:** Remove OG image preload
5. **MEDIUM:** Remove emojis from social meta tags
6. **LOW:** Add more FAQ items
7. **LOW:** Add Course offers and pricing to schema

---

## 📝 Additional Recommendations

### Add Breadcrumb Schema
Helps Google understand site structure:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://www.bharatvidya.in/"
  }]
}
```

### Add Language/Region Targeting
If you plan to expand:

```html
<link rel="alternate" hreflang="hi" href="https://www.bharatvidya.in/hi/">
<link rel="alternate" hreflang="mr" href="https://www.bharatvidya.in/mr/">
```

### Consider Adding
- `<meta name="robots" content="index, follow">` (explicit)
- `<meta name="theme-color" content="#your-brand-color">` (for mobile browsers)
- ViewportAction schema for specific CTAs

---

## 🔍 Testing Tools

Validate your fixes with:
1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
4. **Schema.org Validator:** https://validator.schema.org/

---

## Summary

The head tags are well-structured but have **3 critical issues** that need immediate attention:
1. Broken Google verification
2. Missing schema entities
3. ItemList count mismatch

After fixing these, the page will be in excellent shape for SEO and social sharing.
