# BoriLib Homepage UI Design Concept
**Digital Library Platform for Bhandarkar Oriental Research Institute**
*Version 1.0 | 2026-Ready Design System*

---

## 🎯 Executive Summary

BoriLib (borilib.com) is envisioned as a world-class digital library platform that seamlessly bridges 19th-century heritage with 2026-era user experience. This design concept balances scholarly gravitas with modern digital fluency, creating an intuitive gateway to 125,000+ books and 28,000+ manuscripts.

**Target Audience:** Scholars, researchers, heritage enthusiasts, students, and global academics
**Core Experience:** Discovery-first, accessibility-centered, heritage-rich interface
**Technology Era:** 2026-ready (AI-assisted search, advanced script rendering, global CDN)

---

## 📐 I. WIREFRAME OVERVIEW

### Full Homepage Structure

```
┌─────────────────────────────────────────────────────────┐
│ [Navigation Bar]                          [Login] [🌐EN▾]│
├─────────────────────────────────────────────────────────┤
│                                                           │
│              ╔═══════════════════════════════╗           │
│              ║    HERO SECTION               ║           │
│              ║    Parallax Manuscript        ║           │
│              ║    + Overlay Text + CTA       ║           │
│              ║    [Height: 85vh]             ║           │
│              ╚═══════════════════════════════╝           │
│                                                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│   ╔═══════════════════════════════════════════════════╗ │
│   ║ SEARCH & DISCOVER MODULE                          ║ │
│   ║ [Large Search Bar]                                ║ │
│   ║ [Quick Filters: Lang | Script | Period | Region] ║ │
│   ╚═══════════════════════════════════════════════════╝ │
│                                                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│   FEATURED WORKS CAROUSEL                                 │
│   ┌────┐  ┌────┐  ┌────┐  ┌────┐  ┌────┐  →           │
│   │ 📜 │  │ 📜 │  │ 📜 │  │ 📜 │  │ 📜 │  →           │
│   └────┘  └────┘  └────┘  └────┘  └────┘  →           │
│                                                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│   INSTITUTIONAL CREDIBILITY                               │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│   │ 📅 1917  │  │ 125K+    │  │ 28K+     │  │ 50+    │ │
│   │ Founded  │  │ Books    │  │ MSS      │  │ Scripts│ │
│   └──────────┘  └──────────┘  └──────────┘  └────────┘ │
│                                                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│   EXPLORE BY CATEGORY GRID                                │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│   │Sanskrit │  │ Prakrit │  │Regional │  │European │  │
│   │  MSS    │  │  Texts  │  │Languages│  │Editions │  │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘  │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│   │ Vedic   │  │Buddhist │  │  Jain   │  │ Persian │  │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘  │
│                                                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│   GLOBAL RESEARCHER COMMUNITY                             │
│   ┌───────────────────┐  ┌───────────────────┐          │
│   │  Testimonials     │  │  Interactive      │          │
│   │  Carousel         │  │  Globe Visual     │          │
│   │  "Dr. Smith..."   │  │  (Access Points)  │          │
│   └───────────────────┘  └───────────────────┘          │
│                                                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│   LATEST DIGITISATION & NEWS                              │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│   │ Newly Added  │  │ New Items    │  │ Platform     │ │
│   │ Sept 2024    │  │ 250+ items   │  │ Update 2.1   │ │
│   └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│   FOOTER                                                  │
│   [Sitemap] [Legal] [Pricing] [Contact] [Social] [Lang] │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 II. STYLE TILE SUMMARY

### Color Palette

**Primary Heritage Tones:**
```
Deep Indigo:        #2C3E7A  (Primary headers, navigation)
Manuscript Cream:   #F5EFE0  (Background, cards)
Bronze Accent:      #B87333  (Borders, icons, hover states)
Parchment Beige:    #E8DCC4  (Secondary backgrounds)
```

**Modern Accent Colors:**
```
Electric Teal:      #00B4D8  (CTAs, links, active states)
Vibrant Coral:      #FF6B6B  (Error states, urgent notifications)
Sage Green:         #90C695  (Success states, new badges)
```

**Neutral Grays:**
```
Charcoal:           #2D2D2D  (Body text)
Medium Gray:        #757575  (Secondary text)
Light Gray:         #E0E0E0  (Dividers, borders)
White:              #FFFFFF  (Pure white for contrast)
```

### Typography

**Heading Font: Crimson Pro (Serif)**
- H1: 64px / 700 weight / -0.02em tracking / 1.1 line-height
- H2: 48px / 600 weight / -0.01em tracking / 1.2 line-height
- H3: 32px / 600 weight / 0em tracking / 1.3 line-height
- H4: 24px / 600 weight / 0em tracking / 1.4 line-height

**Body Font: Inter (Sans-serif)**
- Body Large: 18px / 400 weight / 0.01em tracking / 1.6 line-height
- Body: 16px / 400 weight / 0.01em tracking / 1.6 line-height
- Caption: 14px / 400 weight / 0.02em tracking / 1.5 line-height
- Small: 12px / 400 weight / 0.03em tracking / 1.4 line-height

**Indic Script Font: Noto Sans Devanagari / Noto Serif family**
- Supports: Devanagari, Grantha, Tamil, Bengali, Gujarati, Gurmukhi, Kannada, Malayalam, Oriya, Telugu
- Weight: 400-700
- Size: 110% of Latin equivalent for readability

### Icon Style

**Icon System: Custom Heritage Icons**
- Style: Line-based, 2px stroke weight
- Size: 24px × 24px default (scale to 32px, 48px for emphasis)
- Color: Bronze (#B87333) default, Teal (#00B4D8) on hover
- Examples:
  - Manuscript scroll icon
  - Language/script selector icons (Devanagari आ, Tamil த, Arabic ع)
  - Search magnifying glass with manuscript texture
  - Filter funnel with ornate top
  - Download scroll icon
  - User profile with traditional ornament

**Illustrations:**
- Hand-drawn manuscript borders
- Subtle paisley patterns for section dividers
- Geometric mandala patterns for loading states

### Elevation & Shadows

```css
Shadow-01 (Cards):        0 2px 8px rgba(44,62,122,0.08)
Shadow-02 (Hover):        0 4px 16px rgba(44,62,122,0.12)
Shadow-03 (Modal):        0 8px 32px rgba(44,62,122,0.16)
Shadow-04 (Dropdown):     0 12px 48px rgba(44,62,122,0.20)
```

### Border Radius

```
Subtle: 4px   (Buttons, inputs)
Card: 8px     (Cards, panels)
Large: 16px   (Hero elements, featured items)
Pill: 999px   (Tags, badges)
```

---

## 🎬 III. SECTION-BY-SECTION BREAKDOWN

### 1. HERO SECTION

**Layout:**
- Full viewport height (85vh minimum)
- Background: Layered parallax effect with ancient manuscript texture
- Three layers:
  - Layer 1 (Back): Subtle parchment texture, slow scroll (0.3x)
  - Layer 2 (Mid): Manuscript page opening animation, medium scroll (0.5x)
  - Layer 3 (Front): Text overlay + CTA, normal scroll (1x)

**Content Structure:**
```
┌────────────────────────────────────────┐
│                                        │
│     [Animated Manuscript Opening]      │
│                                        │
│         BoriLib                        │
│         Digital Heritage Reimagined    │
│                                        │
│     125,000+ Books · 28,000+ MSS      │
│     Explore the East's Knowledge       │
│                                        │
│     [Start Exploring →]  [Learn More] │
│                                        │
│         ↓ Scroll Indicator             │
└────────────────────────────────────────┘
```

**Copy Suggestions:**

*Main Headline:*
> **"BoriLib"**
> Digital Heritage Reimagined

*Subheadline:*
> 125,000+ Books · 28,000+ Manuscripts
> Explore the East's Knowledge Traditions

*Primary CTA:*
> Start Exploring →

*Secondary CTA:*
> Learn About BORI

**Animations:**
- Manuscript opening: 3-second fade-in with page curl effect
- Text entrance: Staggered fade-up (0.2s delay between elements)
- Parallax scroll: Smooth layers separation on scroll
- Light rays: Subtle animated gradient overlay simulating ancient reading lamp

---

### 2. SEARCH & DISCOVER MODULE

**Layout:**
- Sticky positioning after scroll past hero (Z-index: 100)
- Container: Max-width 1200px, centered
- Background: Manuscript Cream (#F5EFE0) with Shadow-02
- Padding: 48px vertical, 40px horizontal

**Component Structure:**
```
┌─────────────────────────────────────────────────┐
│  🔍 Search manuscripts, books, languages...     │
│  ┌──────────────────────────────────────────┐  │
│  │  [Large Search Input]              [🔎] │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  Quick Filters:                                 │
│  [📚 Language ▾] [✍️ Script ▾] [📅 Period ▾]  │
│  [🗺️ Region ▾] [🔓 Access ▾]                  │
│                                                 │
│  ⚙️ Advanced Search                            │
└─────────────────────────────────────────────────┘
```

**Search Input Features:**
- Auto-suggest with manuscript thumbnails
- Multi-script input support (live keyboard layout switching)
- Voice search icon (future enhancement)
- Recent searches dropdown
- AI-powered semantic search badge

**Quick Filters:**
Each filter button shows:
- Icon + Label
- Count of available items
- Multi-select with visual chips
- Instant results update (no page reload)

**Filter Options:**

*Language:*
Sanskrit (85,000+), Prakrit (12,000+), Pali (8,000+), Hindi, Marathi, Tamil, Bengali, Persian, Arabic, Tibetan, Chinese, English, German, French

*Script:*
Devanagari, Grantha, Tamil, Sharada, Modi, Nandinagari, Bengali, Gujarati, Gurmukhi, Malayalam, Telugu, Kannada, Oriya, Roman

*Period:*
Ancient (Before 500 CE), Classical (500-1200 CE), Medieval (1200-1700 CE), Early Modern (1700-1900 CE), Modern (1900+)

*Region:*
North India, South India, West India, East India, Central Asia, Tibet, Southeast Asia, Europe, Global

*Access Type:*
Open Access, Free Preview, Subscription Required, On-site Only

**Copy Suggestions:**
> **"Discover Knowledge Across Centuries"**
> Search 125,000+ items in 50+ scripts and languages

---

### 3. FEATURED WORKS CAROUSEL

**Layout:**
- Section padding: 96px vertical
- Background: White with subtle paisley pattern watermark
- Carousel: Horizontal scroll, snap-to-grid behavior

**Carousel Item Card:**
```
┌─────────────────┐
│                 │
│  [Thumbnail]    │
│   300×400px     │
│                 │
├─────────────────┤
│ Title (2 lines) │
│ Author/Origin   │
│ Century | Lang  │
│                 │
│ [View in Reader]│
└─────────────────┘
```

**Featured Items (Examples):**
1. **Mahābhārata** (Critical Edition)
   - Sharada script, 12th century
   - Open Access

2. **Arthaśāstra Manuscript**
   - Devanagari, 15th century
   - Free Preview

3. **Rgveda Samhita**
   - Grantha script, 17th century
   - Subscription Required

4. **Prakrit Grammar**
   - Vararuci's Prākṛtaprakāśa
   - Modi script, 18th century

5. **Buddhist Tantric Texts**
   - Tibetan script, 14th century

**Interaction:**
- Drag to scroll (desktop)
- Swipe to scroll (mobile)
- Hover: Card elevates (Shadow-02), thumbnail zooms 105%
- Auto-play: Slow scroll every 5 seconds (pausable)
- Navigation: Dots + Arrow buttons

**Copy:**
> **"Treasures from the Vault"**
> Explore our most significant manuscripts and rare editions

---

### 4. INSTITUTIONAL CREDIBILITY SECTION

**Layout:**
- Full-width background: Deep Indigo (#2C3E7A) with texture overlay
- Text: White / Manuscript Cream
- Grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Icons: 64px, Bronze accent

**Data Visualization Cards:**

```
┌──────────────────────┐
│    📅                │
│    1917              │
│    Founded           │
│    Pune, India       │
└──────────────────────┘

┌──────────────────────┐
│    📚                │
│    125,000+          │
│    Books Digitized   │
│    & Growing         │
└──────────────────────┘

┌──────────────────────┐
│    📜                │
│    28,000+           │
│    Manuscripts       │
│    Rare & Ancient    │
└──────────────────────┘

┌──────────────────────┐
│    🌐                │
│    50+ Scripts       │
│    & Languages       │
│    Multilingual      │
└──────────────────────┘

┌──────────────────────┐
│    🎓                │
│    5 Million+        │
│    Global Scholars   │
│    Researchers       │
└──────────────────────┘

┌──────────────────────┐
│    🏆                │
│    UNESCO            │
│    Recognition       │
│    Heritage Status   │
└──────────────────────┘
```

**Animated Counters:**
- Numbers count up from 0 on scroll into view
- Duration: 2 seconds with easing
- Format: Comma separators, "+" suffix for growing numbers

**Copy:**
> **"A Century of Preserving India's Intellectual Heritage"**
> The Bhandarkar Oriental Research Institute has been at the forefront of Indian manuscript preservation and research since 1917.

---

### 5. EXPLORE BY CATEGORY GRID

**Layout:**
- 4×2 grid (desktop), 3×3 (tablet), 2×4 (mobile)
- Card size: 280×320px
- Gap: 24px
- Section padding: 96px vertical

**Category Card Design:**
```
┌─────────────────────┐
│                     │
│  [Background Image] │
│   with gradient     │
│   overlay           │
│                     │
│   Sanskrit          │
│   Manuscripts       │
│                     │
│   12,500+ items  →  │
│                     │
└─────────────────────┘
```

**Categories:**

1. **Sanskrit Manuscripts**
   - Image: Devanagari manuscript page
   - Count: 12,500+ items

2. **Prakrit Texts**
   - Image: Jain manuscript with Prakrit
   - Count: 5,200+ items

3. **Regional Indian Languages**
   - Image: Collage of scripts
   - Count: 8,300+ items

4. **European Language Editions**
   - Image: Colonial-era printed book
   - Count: 4,800+ items

5. **Vedic Literature**
   - Image: Rigveda manuscript
   - Count: 3,200+ items

6. **Buddhist Texts**
   - Image: Buddhist manuscript with illuminations
   - Count: 2,900+ items

7. **Jain Literature**
   - Image: Jain miniature painting manuscript
   - Count: 1,800+ items

8. **Persian & Arabic Works**
   - Image: Persian manuscript with calligraphy
   - Count: 1,500+ items

**Interaction:**
- Hover: Card tilts 3° (3D transform), gradient darkens, arrow animates right
- Click: Smooth transition to category page
- Keyboard: Tab navigation with focus outline

**Copy:**
> **"Explore by Tradition"**
> Navigate our collections by language, script, and cultural tradition

---

### 6. RESEARCHER COMMUNITY / GLOBAL ACCESS

**Layout:**
- Split section: 60% testimonials, 40% globe visual
- Background: Manuscript Cream with subtle texture
- Padding: 96px vertical

**Left Side - Testimonials Carousel:**
```
┌──────────────────────────────────┐
│  "                               │
│  BoriLib has revolutionized my   │
│  research on medieval Sanskrit   │
│  poetry. Access from Cambridge   │
│  is seamless and instant.        │
│  "                               │
│                                  │
│  Dr. Sarah Mitchell              │
│  Cambridge University            │
│  Sanskrit Studies                │
│                                  │
│  [← Previous] [Next →]           │
└──────────────────────────────────┘
```

**Right Side - Interactive Globe:**
- 3D rotating globe showing access points
- Markers for registered institutions (500+)
- Hover markers: Institution name + user count
- Animated connections between Pune (HQ) and global locations

**Registration CTA:**
```
┌─────────────────────────────────┐
│  Join 5,000+ Researchers        │
│  [Create Free Account]          │
│  [Institutional Access →]       │
└─────────────────────────────────┘
```

**Testimonials (Examples):**

1. **Dr. Sarah Mitchell** - Cambridge University
   > "BoriLib has revolutionized my research on medieval Sanskrit poetry. Access from Cambridge is seamless."

2. **Prof. Rahul Deshpande** - University of Mumbai
   > "The advanced search capabilities and script rendering are unmatched. Essential for Prakrit studies."

3. **Dr. Akiko Tanaka** - Kyoto University
   > "As a Buddhist studies scholar, the Tibetan manuscript collection is invaluable."

4. **Dr. Hans Weber** - Heidelberg University
   > "The critical editions with variant readings have transformed my textual analysis work."

**Copy:**
> **"Trusted by Scholars Worldwide"**
> Join researchers from 85+ countries accessing BORI's collections

---

### 7. LATEST DIGITISATION & NEWS

**Layout:**
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Card style: Elevated white cards on light background
- Section padding: 96px vertical

**Content Cards:**

```
┌────────────────────────┐
│ [Badge: NEW]           │
│                        │
│ Newly Digitized        │
│ September 2024         │
│                        │
│ 250+ rare manuscripts  │
│ from the Peshwa era    │
│ now available          │
│                        │
│ [View Collection →]    │
│                        │
│ 📅 Oct 15, 2024        │
└────────────────────────┘

┌────────────────────────┐
│ [Badge: UPDATE]        │
│                        │
│ Platform Upgrade       │
│ Version 2.1 Live       │
│                        │
│ AI-powered semantic    │
│ search, improved       │
│ script rendering       │
│                        │
│ [Learn More →]         │
│                        │
│ 📅 Sept 28, 2024       │
└────────────────────────┘

┌────────────────────────┐
│ [Badge: EVENT]         │
│                        │
│ Webinar Series         │
│ Using BoriLib          │
│                        │
│ Monthly sessions for   │
│ researchers. Next:     │
│ Advanced Search Tips   │
│                        │
│ [Register →]           │
│                        │
│ 📅 Nov 20, 2024        │
└────────────────────────┘
```

**Badge Colors:**
- NEW: Sage Green (#90C695)
- UPDATE: Electric Teal (#00B4D8)
- EVENT: Vibrant Coral (#FF6B6B)

**Copy:**
> **"What's New at BoriLib"**
> Stay updated with the latest additions and platform improvements

---

### 8. FOOTER

**Layout:**
- Dark background: Deep Indigo (#2C3E7A)
- Text: Manuscript Cream (#F5EFE0)
- Multi-column layout with clear hierarchy

**Footer Structure:**
```
┌─────────────────────────────────────────────────────────┐
│ BORILIB                                                 │
│ Bhandarkar Oriental Research Institute                  │
│                                                         │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│ │COLLECTIONS│  │ ABOUT    │  │ SUPPORT  │  │LEGAL   │ │
│ ├──────────┤  ├──────────┤  ├──────────┤  ├────────┤ │
│ │Sanskrit  │  │About BORI│  │Help Ctr  │  │Terms   │ │
│ │Prakrit   │  │Our Team  │  │Tutorials │  │Privacy │ │
│ │Regional  │  │History   │  │Contact   │  │Cookies │ │
│ │European  │  │Research  │  │FAQs      │  │License │ │
│ │Vedic     │  │Partners  │  │Feedback  │  │©2024   │ │
│ └──────────┘  └──────────┘  └──────────┘  └────────┘ │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐│
│ │ CONTACT                                             ││
│ │ 📍 Law College Road, Pune 411 004, Maharashtra      ││
│ │ 📞 +91-20-2565-9111                                 ││
│ │ ✉️  contact@borilib.com                             ││
│ └─────────────────────────────────────────────────────┘│
│                                                         │
│ SUBSCRIPTION PRICING                                    │
│ [Individual: ₹999/yr] [Student: ₹499/yr]              │
│ [Institution: Contact] [Free Preview Available]        │
│                                                         │
│ LANGUAGE: [English ▾] | [हिंदी] [मराठी] [தமிழ்]       │
│                                                         │
│ FOLLOW US: [𝕏] [LinkedIn] [Facebook] [YouTube]        │
│                                                         │
│ ──────────────────────────────────────────────────────│
│ Jurisdiction: India | Pune District Court              │
│ Operated by: Bhandarkar Oriental Research Institute    │
│ © 2024 BORI. All rights reserved.                      │
└─────────────────────────────────────────────────────────┘
```

**Key Footer Elements:**

*Sitemap Columns:*
- Collections (by category)
- About (institutional info)
- Support (help resources)
- Legal (terms, privacy, licensing)

*Contact Information:*
- Physical address in Pune, India
- Phone number with country code
- Email address
- Operating hours

*Subscription Overview:*
- Individual: ₹999/year ($12/year)
- Student: ₹499/year (50% off with verification)
- Institutional: Custom pricing
- Free preview: 5 manuscripts/month

*Multi-language Toggles:*
- English (default)
- Hindi (हिंदी)
- Marathi (मराठी)
- Tamil (தமிழ்)
- Sanskrit (संस्कृतम्)
- Expandable to 10+ languages

*Social Media:*
- X (Twitter): @BoriLib
- LinkedIn: Bhandarkar Oriental Research Institute
- Facebook: /BoriLibrary
- YouTube: Manuscript tutorials and scholar interviews

*Legal Notice:*
- Jurisdiction: India (Pune District Court)
- Copyright notice
- Operated by BORI (established 1917)

---

## 🖱️ IV. INTERACTION NOTES

### Micro-interactions

**1. Hover States**

*Cards (Featured Works, Category Cards):*
- Transform: translateY(-8px) with 0.3s ease
- Shadow: Increase to Shadow-02
- Image: Scale 1.05 with overflow hidden
- Cursor: Pointer

*Buttons (CTAs):*
- Primary: Background darken 10%, slight scale 1.02
- Secondary: Border thicken, text color to primary
- Icon buttons: Rotate icon 15° or pulse scale

*Links (Text):*
- Underline: Animate from left to right (0.2s)
- Color: Shift to Electric Teal (#00B4D8)

*Filter Tags:*
- Selected: Background to Electric Teal, white text
- Hover: Background to light teal, border highlight
- Close icon: Rotate 90° on hover

**2. Scroll Animations**

*Hero Parallax:*
- Background layer: scroll speed 0.3x
- Mid layer (manuscript): scroll speed 0.5x
- Text layer: scroll speed 1x (normal)

*Fade-in on Scroll:*
- Elements enter from bottom with fade (opacity 0→1)
- Trigger: When element is 20% visible in viewport
- Duration: 0.6s with ease-out
- Stagger: 0.1s delay between consecutive elements

*Counter Animation:*
- Credibility numbers count up when scrolled into view
- Duration: 2s with ease-out-expo
- Animate from 0 to target value

*Progress Indicator:*
- Thin bar at top of page showing scroll progress
- Color: Electric Teal gradient
- Fixed position, z-index: 9999

**3. Search Interactions**

*Auto-suggest:*
- Appears after 2 characters typed
- Debounce: 300ms delay
- Shows: Top 5 matches with thumbnails
- Keyboard navigation: Arrow keys to select, Enter to open
- Escape to close

*Filter Multi-select:*
- Click filter button: Dropdown appears with fade-in
- Select option: Checkbox animation, chip appears below search
- Chip has close icon (×) to remove
- Results update immediately with fade transition

*Advanced Search Toggle:*
- Accordion animation (expand/collapse)
- Reveals: Boolean operators, date range, manuscript condition filters
- Smooth height transition: 0.4s ease

**4. Carousel Interactions**

*Desktop:*
- Drag with mouse: Momentum scrolling with deceleration
- Arrow buttons: Scroll one card width
- Dots: Click to jump to section
- Hover on card: Auto-play pauses

*Mobile:*
- Swipe gestures: Snap to grid after swipe
- Momentum scrolling
- Indicators: Show current position

**5. Modal & Overlay**

*Manuscript Viewer (when clicking "View in Reader"):*
- Full-screen overlay with fade-in background
- Modal slides up from bottom (mobile) or zooms in (desktop)
- Close: X button, Escape key, or click outside
- Next/Previous: Arrow keys or swipe

**6. Loading States**

*Page Load:*
- Geometric mandala spinner in center
- Color: Bronze rotating to Teal gradient
- Duration: 2s timeout, then show error if not loaded

*Lazy Loading Images:*
- Placeholder: Blurred low-res preview (LQIP)
- Progressive: Sharp image fades in over placeholder
- Skeleton: Gray boxes with shimmer animation

*Search Results:*
- Skeleton cards with pulse animation
- Results fade in when loaded

---

## 📱 V. RESPONSIVENESS NOTES

### Breakpoints

```
Mobile (Portrait):   320px - 599px
Mobile (Landscape):  600px - 899px
Tablet:              900px - 1199px
Desktop:             1200px - 1599px
Large Desktop:       1600px+
```

### Layout Adaptations by Section

**1. Navigation Bar**

*Desktop (1200px+):*
- Full horizontal menu with all links visible
- Logo left, menu center, login/language right
- Search icon expands inline

*Tablet (900-1199px):*
- Condensed menu, some items in "More" dropdown
- Search icon opens overlay

*Mobile (<900px):*
- Hamburger menu (left)
- Logo center
- Search icon right
- Full-screen navigation drawer slides from left

**2. Hero Section**

*Desktop:*
- Height: 85vh
- Text size: H1 at 64px
- CTA buttons: Side-by-side

*Tablet:*
- Height: 70vh
- Text size: H1 at 48px
- CTA buttons: Side-by-side (smaller)

*Mobile:*
- Height: 60vh (more content visible below fold)
- Text size: H1 at 36px
- CTA buttons: Stacked vertically
- Parallax: Disabled (performance optimization)

**3. Search Module**

*Desktop:*
- Single row with search + filters
- Filters expand inline below

*Tablet:*
- Search full width
- Filters in row (may wrap)

*Mobile:*
- Search full width
- Filters: Horizontal scroll chips
- Advanced search: Full-screen modal

**4. Featured Carousel**

*Desktop:*
- 4 items visible at once
- Arrow navigation on sides

*Tablet:*
- 2-3 items visible
- Swipe + arrows

*Mobile:*
- 1 item visible (centered)
- Swipe only (no arrows)
- Dots below for navigation

**5. Credibility Section**

*Desktop:*
- 6-column grid (3 rows × 2)
- Large icons (64px)

*Tablet:*
- 3-column grid (2 rows × 3)
- Medium icons (48px)

*Mobile:*
- 2-column grid (3 rows × 2)
- Smaller icons (40px)

**6. Category Grid**

*Desktop:*
- 4 columns × 2 rows
- Card size: 280×320px

*Tablet:*
- 3 columns × 3 rows
- Card size: 240×280px

*Mobile:*
- 2 columns × 4 rows
- Card size: 160×200px
- Reduced padding

**7. Researcher Community**

*Desktop:*
- Side-by-side: Testimonials (60%) | Globe (40%)

*Tablet:*
- Side-by-side: Testimonials (50%) | Globe (50%)
- Smaller globe

*Mobile:*
- Stacked: Testimonials full width above, globe below
- Globe: Static image or simplified 2D version

**8. News Grid**

*Desktop:*
- 3 columns

*Tablet:*
- 2 columns

*Mobile:*
- 1 column (stacked)

**9. Footer**

*Desktop:*
- 4 columns for sitemap
- Contact, pricing, language in rows below

*Tablet:*
- 3 columns for sitemap (first 3 groups)
- Legal wraps below

*Mobile:*
- Accordion: Each section collapsible
- Contact always visible
- Subscription: Stacked buttons

### Touch Optimizations (Mobile)

- Minimum touch target: 48×48px (WCAG AAA)
- Increased padding around interactive elements
- Swipe gestures for carousel
- Pull-to-refresh disabled (prevent accidental triggers)
- Sticky search bar on scroll
- Bottom navigation bar for quick access (optional)

### Performance Optimizations by Device

*Mobile:*
- Disable parallax (use static image)
- Reduce animation complexity
- Lazy load all images below fold
- Serve WebP/AVIF images (smaller file size)
- Limit auto-play carousels

*Tablet:*
- Moderate animations
- Progressive image loading
- Prefetch on hover disabled (use on tap)

*Desktop:*
- Full animations enabled
- Prefetch links on hover
- High-res images
- Video backgrounds allowed (if used)

---

## ♿ VI. ACCESSIBILITY FEATURES

### WCAG 2.1 Level AA Compliance

**1. Color Contrast**

- All text: Minimum 4.5:1 ratio (7:1 for AAA)
- Large text (18pt+): Minimum 3:1 ratio
- Interactive elements: 3:1 against background
- Focus indicators: 3:1 contrast

**2. Keyboard Navigation**

- All interactive elements: Accessible via Tab
- Focus visible: 2px Electric Teal outline with 2px offset
- Skip to content link: First focusable element (hidden until focused)
- Logical tab order: Top to bottom, left to right
- Escape key: Closes modals, overlays, dropdowns
- Arrow keys: Navigate carousels, dropdown options
- Enter/Space: Activate buttons, checkboxes

**3. Screen Reader Support**

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- ARIA landmarks: role="banner", "navigation", "main", "complementary", "contentinfo"
- ARIA labels: All icons and image-only buttons
- Alt text: Descriptive for content images, empty for decorative
- Live regions: aria-live="polite" for search results, filters
- Skip links: "Skip to main content", "Skip to search"

**4. Form Accessibility**

- Labels: Associated with inputs (for/id or aria-labelledby)
- Required fields: aria-required="true" + asterisk + label text
- Error messages: aria-invalid="true" + aria-describedby
- Success messages: aria-live="polite"
- Autocomplete: Appropriate autocomplete attributes

**5. Multimedia**

- Images: Alt text for content, null alt for decorative
- Icons: ARIA labels or sr-only text
- Videos (if added): Captions, transcripts
- Animations: Respect prefers-reduced-motion

**6. Language Support**

- HTML lang attribute: `<html lang="en">`
- Language toggles: Update lang attribute dynamically
- Script-specific fonts: Ensure proper rendering
- Right-to-left (RTL): Support for Arabic, Persian
  - Mirror layout for RTL languages
  - Text alignment: right
  - Icon flipping where appropriate

**7. Reduced Motion**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  /* Disable parallax */
  .parallax { transform: none !important; }
}
```

**8. Focus Management**

- Modal opens: Focus moves to modal
- Modal closes: Focus returns to trigger element
- Page load: Focus on skip link or main heading
- Search autocomplete: Focus on first result or back to input

---

## 🌐 VII. SCRIPT & LANGUAGE RENDERING

### Complex Script Support

**Indic Scripts:**
- Devanagari: Conjunct ligatures, vowel marks (matras), nukta
- Tamil: Ligatures, vowel signs, Grantha characters
- Bengali: Ligatures, rafala, ya-phalā
- Malayalam: Complex ligatures (up to 5 characters)
- Kannada, Telugu: Vowel signs, halant

**Technical Requirements:**
- Font: Noto Serif/Sans families (Google Fonts)
- OpenType features: liga, clig, calt, akhn, rphf, pres, abvs, blws
- Text rendering: `text-rendering: optimizeLegibility;`
- Font feature settings:
  ```css
  font-feature-settings: "liga" 1, "calt" 1, "kern" 1;
  ```

**Right-to-Left Scripts:**
- Arabic: Contextual forms, ligatures
- Persian: Additional characters, Urdu style
- Direction: `dir="rtl"` on elements
- BiDi algorithm: Proper Unicode BiDi control characters

**East Asian Scripts:**
- Chinese: Simplified & Traditional
- Tibetan: Stacked consonants, vowel marks
- Font: Noto Serif CJK, Noto Serif Tibetan

### Language Toggle Implementation

**Interface Languages:**
1. English (default)
2. Hindi (हिंदी)
3. Marathi (मराठी)
4. Tamil (தமிழ்)
5. Sanskrit (संस्कृतम्)
6. Bengali (বাংলা)
7. Gujarati (ગુજરાતી)
8. German (Deutsch)
9. French (Français)
10. Japanese (日本語)

**Toggle Behavior:**
- Dropdown in navigation + footer
- Saves preference to localStorage
- Updates entire UI language
- Maintains user session
- SEO: hreflang tags for each language version

**Translation System:**
- i18n framework (e.g., i18next, React Intl)
- JSON files per language
- Dynamic content from CMS in multiple languages
- RTL styles loaded conditionally

---

## ⚡ VIII. PERFORMANCE SPECIFICATIONS

### Target Metrics (2026 Standards)

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 1.5s
- FID (First Input Delay): < 75ms
- CLS (Cumulative Layout Shift): < 0.05
- INP (Interaction to Next Paint): < 150ms

**Additional Metrics:**
- Time to Interactive (TTI): < 3s
- Total Blocking Time (TBT): < 200ms
- Speed Index: < 2s
- First Contentful Paint (FCP): < 1s

### Optimization Strategies

**1. Image Optimization**

- Format: WebP (primary), AVIF (next-gen), JPEG fallback
- Responsive images: srcset with 3-5 sizes
- Lazy loading: loading="lazy" on below-fold images
- Manuscript thumbnails: 300×400px @ 80% quality
- Hero images: Progressive JPEG or WebP
- CDN: Global CDN with edge caching (Cloudflare, AWS CloudFront)

**2. Code Optimization**

- Critical CSS: Inline above-fold styles (< 14KB)
- CSS: Minified, combined, loaded async for non-critical
- JavaScript: Code-split by route, lazy load modules
- Bundle size: < 150KB initial (gzipped)
- Tree-shaking: Remove unused code
- Font loading: font-display: swap; preload critical fonts

**3. Caching Strategy**

- Static assets: Cache-Control: max-age=31536000 (1 year)
- HTML: Cache-Control: max-age=3600 (1 hour)
- API responses: Cache-Control: max-age=300 (5 min) with stale-while-revalidate
- Service Worker: Cache shell, pre-cache critical assets
- IndexedDB: Store search history, preferences

**4. Prefetching & Preloading**

- Preconnect: Google Fonts, CDN origins
- DNS-prefetch: API domains
- Preload: Critical fonts, hero image
- Prefetch: Next likely page (category pages from homepage)
- Hover intent: Prefetch on 100ms hover delay (desktop)

**5. Search Performance**

- Debounce: 300ms delay on input
- Request throttling: Max 1 request per 200ms
- Server-side: Elasticsearch/Algolia with < 50ms response
- Autocomplete: Cache common queries (10,000 most popular)
- Indexed search: Pre-indexed by language, period, script

**6. Animation Performance**

- GPU acceleration: transform, opacity only (avoid width, height, top, left)
- will-change: Apply sparingly on actively animating elements
- requestAnimationFrame: For complex animations
- Intersection Observer: For scroll-triggered animations
- Reduce motion: Respect user preference

**7. Third-party Scripts**

- Minimize: Only essential third parties (analytics, error tracking)
- Async/defer: Non-critical scripts
- Self-host: Google Fonts, analytics libraries if possible
- Sandbox: iframes with sandbox attribute

---

## 📝 IX. COPY SUGGESTIONS BY SECTION

### Navigation Menu
- Collections
- About BORI
- For Researchers
- Pricing
- Help
- Login / Sign Up

### Hero Section
**Headline:**
> **BoriLib**
> *Digital Heritage Reimagined*

**Subheadline:**
> 125,000+ Books · 28,000+ Manuscripts
> Explore the East's Knowledge Traditions

**CTA Buttons:**
- Primary: "Start Exploring →"
- Secondary: "Learn About BORI"

### Search Module
**Headline:**
> **Discover Knowledge Across Centuries**

**Search Placeholder:**
> Search manuscripts, books, languages, authors…

**Advanced Search Link:**
> ⚙️ Advanced Search Options

### Featured Carousel
**Section Title:**
> **Treasures from the Vault**

**Subtitle:**
> Explore our most significant manuscripts and rare editions

**Card CTA:**
> View in Reader →

### Credibility Section
**Headline:**
> **A Century of Preserving India's Intellectual Heritage**

**Subtitle:**
> The Bhandarkar Oriental Research Institute has been at the forefront of manuscript preservation and research since 1917.

**Stat Labels:**
- Founded 1917, Pune
- 125,000+ Books Digitized
- 28,000+ Rare Manuscripts
- 50+ Scripts & Languages
- 5 Million+ Global Scholars
- UNESCO Heritage Recognition

### Category Grid
**Section Title:**
> **Explore by Tradition**

**Subtitle:**
> Navigate our collections by language, script, and cultural tradition

**Category Card CTAs:**
> Browse Collection →

### Researcher Community
**Section Title:**
> **Trusted by Scholars Worldwide**

**Subtitle:**
> Join researchers from 85+ countries accessing BORI's collections

**Registration CTA:**
- Primary: "Create Free Account"
- Secondary: "Request Institutional Access →"

**Testimonial Quotes:** (See Section 6 above)

### News Section
**Section Title:**
> **What's New at BoriLib**

**Subtitle:**
> Stay updated with the latest additions and platform improvements

**Badge Labels:**
- NEW
- UPDATE
- EVENT

**Card CTAs:**
- "View Collection →"
- "Learn More →"
- "Register →"

### Footer

**Tagline:**
> Preserving the Past, Empowering the Future

**Copyright:**
> © 2024 Bhandarkar Oriental Research Institute. All rights reserved.

**Legal:**
> Jurisdiction: India | Governed by Pune District Court

**Contact CTA:**
> Get in Touch →

---

## 🎯 X. IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Weeks 1-2)
- Design system setup (tokens, colors, typography)
- Semantic HTML structure
- Responsive grid system
- Navigation component
- Footer component

### Phase 2: Core Sections (Weeks 3-4)
- Hero section with parallax
- Search module with filters
- Featured carousel
- Credibility section with animated counters

### Phase 3: Content Sections (Weeks 5-6)
- Category grid with hover effects
- Researcher community section
- Globe visualization
- News grid

### Phase 4: Interactions (Week 7)
- Micro-interactions and hover states
- Scroll animations
- Modal/overlay system
- Loading states

### Phase 5: Accessibility & Performance (Week 8)
- WCAG audit and fixes
- Performance optimization
- Script rendering testing
- Cross-browser testing

### Phase 6: Polish & Launch (Week 9)
- Animation fine-tuning
- Copy refinement
- Final QA
- Deployment

---

## 🔧 XI. TECHNICAL STACK RECOMMENDATIONS

### Frontend
- **Framework:** React 18+ or Vue 3 (component-based)
- **Styling:** Tailwind CSS + CSS Modules (utility-first + scoped styles)
- **Animation:** Framer Motion or GSAP (complex animations)
- **Icons:** Custom SVG set + Heroicons/Lucide (fallback)
- **3D Globe:** Three.js or Globe.gl
- **Carousel:** Swiper.js or Embla Carousel (touch-optimized)

### Typography & Fonts
- **Headings:** Crimson Pro (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Indic Scripts:** Noto Serif Devanagari, Noto Sans family
- **CJK:** Noto Serif CJK
- **Arabic:** Noto Naskh Arabic

### Performance
- **Image CDN:** Cloudflare Images or imgix
- **CDN:** Cloudflare or AWS CloudFront
- **Caching:** Varnish or Redis
- **Search:** Elasticsearch or Algolia (typo-tolerant, fast)

### Accessibility
- **Testing:** axe DevTools, WAVE, Lighthouse
- **Screen Reader Testing:** NVDA (Windows), JAWS, VoiceOver (macOS/iOS)

### Analytics
- **Privacy-focused:** Plausible or Fathom Analytics
- **Fallback:** Google Analytics 4 (with consent management)

---

## 📊 XII. SUCCESS METRICS

### User Engagement
- Homepage bounce rate: < 40%
- Average session duration: > 4 minutes
- Pages per session: > 3.5
- Search engagement: > 60% of visitors use search

### Performance
- Page load time: < 2s (median)
- Core Web Vitals: All metrics in "Good" range
- Mobile usability: 100/100 (Lighthouse)

### Accessibility
- WAVE errors: 0
- Axe violations: 0
- Keyboard navigation: 100% functional

### Conversion
- Account creation: > 15% of new visitors
- Search to content: > 70% search completion rate
- Return visitors: > 40% within 30 days

---

## 🎨 XIII. DESIGN FILE EXPORTS

### Deliverable Assets

**1. Wireframes**
- Low-fidelity: Sketches/Balsamiq (conceptual)
- High-fidelity: Figma/Sketch (pixel-perfect)
- Interactive: Figma prototype with click-through

**2. Style Guide**
- Color palette (hex, RGB, WCAG ratios)
- Typography scale (sizes, weights, line heights)
- Icon library (SVG exports)
- Component library (buttons, inputs, cards)

**3. Mockups**
- Desktop (1920×1080)
- Tablet (768×1024)
- Mobile (375×812)
- Dark mode variants (if applicable)

**4. Assets for Development**
- SVG icons (optimized)
- Logo variants (color, white, monochrome)
- Background textures (optimized PNG/WebP)
- Placeholder images

**5. Interaction Specs**
- Animation timing functions (cubic-bezier values)
- Hover state transitions (duration, easing)
- Scroll behavior specifications
- Loading state designs

---

## 🚀 XIV. BEYOND 2026: FUTURE ENHANCEMENTS

### AI & Machine Learning
- AI-powered manuscript transcription
- Natural language search ("Find poems about monsoons")
- Personalized recommendations based on research interests
- Auto-translation of manuscript descriptions

### Immersive Technologies
- VR manuscript reading room
- AR: Overlay translations on physical manuscripts
- 3D manuscript viewer with page-turning simulation

### Community Features
- Researcher collaboration tools (shared annotations)
- User-generated content (commentary, translations)
- Virtual reading groups and seminars
- Crowdsourced transcription projects

### Advanced Search
- Image-based search (upload manuscript fragment, find similar)
- Handwriting recognition for search within manuscripts
- Phonetic search across scripts
- Multi-lingual query expansion

### API & Integrations
- Public API for researchers
- Institutional LMS integrations (Canvas, Moodle)
- Citation export (BibTeX, RIS, EndNote)
- IIIF standard support for interoperability

---

## 📞 XV. CONCLUSION & NEXT STEPS

This comprehensive UI concept for BoriLib represents a harmonious fusion of:
- **Heritage**: Deep respect for BORI's 100+ year legacy and the ancient texts it preserves
- **Innovation**: 2026-ready technology, AI-assisted discovery, and seamless global access
- **Accessibility**: WCAG-compliant, multi-script support, and inclusive design
- **Performance**: Blazing-fast, optimized for all devices and network conditions
- **User-centricity**: Intuitive navigation, powerful search, and delightful interactions

### Recommended Next Steps:

1. **Stakeholder Review:** Present this concept to BORI leadership and key researchers
2. **User Testing:** Conduct usability testing with target audience (scholars, students)
3. **Technical Planning:** Align with backend API, database, and infrastructure teams
4. **Phased Development:** Begin Phase 1 (Foundation) while refining later phases
5. **Content Strategy:** Prepare manuscript metadata, images, and descriptions for launch
6. **Soft Launch:** Beta program with 50-100 researchers for feedback

### Contact for Implementation:

This concept document serves as a comprehensive blueprint for designers, developers, and stakeholders. For detailed Figma files, interactive prototypes, or technical specification documents, please reach out to the design team.

---

**Document Version:** 1.0
**Last Updated:** November 10, 2024
**Prepared for:** Bhandarkar Oriental Research Institute
**Platform:** BoriLib (borilib.com)

---

*"Preserving the Past, Empowering the Future"*
