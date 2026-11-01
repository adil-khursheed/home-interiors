---
version: alpha
name: Atelier Aveline
description: Photographic daylight editorial system for a turnkey residential interior studio.
colors:
  paper: "#e8e5dd"
  paper-deep: "#dcd7cc"
  ink: "#18211c"
  ink-soft: "#4d574f"
  line: "rgba(24, 33, 28, 0.18)"
  line-light: "rgba(232, 229, 221, 0.22)"
  signal: "#0d6658"
  signal-deep: "#084c42"
  signal-ink: "#f4f4ee"
  sun: "#cf8f4a"
  oak: "#a9784c"
  linen: "#d8d0c2"
typography:
  display-hero:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(4rem, 7.8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  display-section:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.6rem, 5vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  display-studio:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.6rem, 4.6vw, 4.2rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  display-study:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.2rem, 3.6vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  display-closing:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.8rem, 5.5vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  display-enquire:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.8rem, 5.6vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.97
    letterSpacing: "-0.035em"
  display-quote:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(1.6rem, 2.7vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  display-name:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.1
  display-hour:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "tnum"
  body-lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(0.98rem, 1.1vw, 1.08rem)"
    fontWeight: 400
    lineHeight: 1.6
  body-base:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
  body-meta:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.84rem"
    fontWeight: 400
    lineHeight: 1.45
  label-nav:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.15em"
  label-action:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.13em"
  label-link:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.11em"
  label-caption:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.15em"
  label-micro:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  pill: "999px"
  circle: "50%"
spacing:
  header: "4.5rem"
  header-mobile: "4rem"
  section: "clamp(5rem, 9vw, 8rem)"
  gutter: "clamp(1.15rem, 4vw, 4rem)"
  column: "clamp(2.5rem, 6vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.35rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-deep}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label-link}"
  nav-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label-nav}"
  nav-link-hover:
    textColor: "{colors.ink}"
  field:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-base}"
    rounded: "{rounded.none}"
    height: "2.9rem"
  hero-caption:
    backgroundColor: "rgba(232, 229, 221, 0.92)"
    textColor: "{colors.ink}"
    typography: "{typography.label-caption}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.75rem"
  study-tag:
    backgroundColor: "rgba(232, 229, 221, 0.9)"
    textColor: "{colors.ink}"
    typography: "{typography.label-caption}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.7rem"
  study-hour:
    backgroundColor: "rgba(24, 33, 28, 0.78)"
    textColor: "{colors.paper}"
    typography: "{typography.display-hour}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.6rem"
  material-chip:
    rounded: "{rounded.none}"
    inset: "inset 0 0 0 1px rgba(24, 33, 28, 0.12)"
---

# Design System: Atelier Aveline

## Overview

**Creative North Star: "The Daylight Study, photographed."**

Atelier Aveline is a photographic daylight editorial for a turnkey residential interior studio. The page treats a home as something judged by how it lives through the day: real reference rooms are caught at authored hours, held in tall frames, and read against a warm limewash paper and deep ink-green type. Warmth belongs to the photographs; the interface stays quiet, precise, and architectural.

The system replaces illustration with a curated set of local reference photography. Every frame is labelled a reference study, not a client commission, and every photographer is credited in the page and in `src/lib/photography.ts`. The photography is the portfolio argument; the interface is the title block around it.

The mood is restrained luxury: generous negative space, hairline rules, editorial serif statements, tracked uppercase annotations, one verdigris action, and a single low-sun amber used only for the daylight path. The one dark inversion, the Approach band, is a structural pause.

**Key Characteristics:**
- Warm limewash paper across light sections, one deep ink-green inversion, no decorative accent colours.
- Reference photography as full editorial plates, with a sticky study viewer on desktop and inline frames on mobile.
- Gloock display serif for statements and names; Archivo for body, metadata, fields, and labels.
- Square plates, chips, fields, and tags; pills only for buttons, circles for dots.
- Hairline rules, authored hours, sun-path rules, and tracked micro-labels replace cards and chrome.
- Motion is restrained: one hero reveal, scroll-triggered rises, a study image swap, a closing parallax, and a pointer-driven WebGL skylight.

## Colors

The palette is a limewash-and-ink system with one verdigris action and one warm daylight accent. The paper is a warm limewash selected by the brief; the warmth is reinforced by the photographs and the sun mark, not by a second accent.

### Primary
- **Verdigris Signal** (#0d6658): The action colour. Background of the only button style, the wordmark mark, focus outline, text selection, and the mobile menu's plus glyph. Never a decorative fill.
- **Verdigris Deep** (#084c42): Hover and pressed state for the signal; also form status text.

### Secondary
- **Low Sun** (#cf8f4a): The daylight accent. The sun dot on the approach path and the warm grade in study frames; never an interface action.

### Tertiary
- **Pale Oak** (#a9784c): Timber and joinery tone in material naming and photography; not UI chrome.
- **Raw Linen** (#d8d0c2): Textile tone in the material register; not an interface surface.

### Neutral
- **Warm Limewash Paper** (#e8e5dd): Page, header, and light section ground.
- **Limewash Shadow** (#dcd7cc): Studio section ground, study frame beds, scrollbar track, material chip base.
- **Deep Ink Green** (#18211c): Primary type, the dark Approach ground, photo scrims, and footer text.
- **Weathered Ink** (#4d574f): Secondary body copy, captions, labels, input underlines, and scrollbar thumb.
- **Chalk White** (#f4f4ee): Type on verdigris and on the Approach band.
- **Hairline Ink** (rgba(24, 33, 28, 0.18)): Default 1px rule on light surfaces.
- **Hairline Chalk** (rgba(232, 229, 221, 0.22)): Rules and process dividers on the dark Approach band.

### Named Rules
**The Signal Rarity Rule.** Verdigris appears only where the visitor can act, focus, select, or read state. If it is decorative, it is the wrong colour.

**The Paper Continuum Rule.** Light sections share one paper ground; only the Approach band inverts to ink. Do not tint sections to separate them; use rules and spacing instead.

**The Photographic Warmth Rule.** Warmth lives in the reference photography and the low-sun dot, not in the interface chrome. Do not add a second warm accent to the UI.

## Typography

**Display Font:** Gloock (with Georgia, serif)
**Body Font:** Archivo (with system-ui, sans-serif)
**Label Font:** Archivo, uppercase and tracked; there is no separate mono face.

**Character:** A high-contrast, slightly calligraphic serif carries every statement, name, and hour; a broad neo-grotesque carries explanations, labels, and form text. The pairing reads as an architect's title block: expressive where it names, neutral where it instructs.

### Hierarchy
- **Hero display** (400, clamp 4–6rem, 0.88, −0.04em): "A home, resolved." Two lines on desktop; the second line is inset.
- **Section display** (400, clamp 2.6–4.8rem, 0.96, −0.035em): Section titles, held to 13ch. The studio title is a step smaller (2.6–4.2rem) and held to 12ch.
- **Study title** (400, clamp 2.2–3.4rem, 0.98): The three room names, held to 14ch.
- **Closing title** (400, clamp 2.8–5rem, 0.94): The final photographic statement, held to 14ch.
- **Enquiry title** (400, clamp 2.8–5rem, 0.97): Held to 10ch so it breaks into three decisive lines.
- **Feature quote** (400, clamp 1.6–2.5rem, 1.08): The process-foot statement.
- **Name / hour** (400, 1.12rem / 1.15rem, tabular figures): Material names, study hours, and frame captions.
- **Body lede** (400, clamp 0.98–1.08rem, 1.6): Hero and section intros, held to 27–34rem.
- **Body base** (400, 1rem, 1.65): Study descriptions.
- **Body small** (400, 0.75rem/12px, 1.5): Credits, form notes, footer copy. This is the floor for small body text.
- **Metadata** (400, 0.84rem, 1.45): Study light and material values.
- **Labels** (500–600, 0.7rem/11.2px, 0.11–0.16em, uppercase): Navigation, field labels, metadata keys, study tags, material uses, hero captions, and footer credit labels. This is the floor for functional text.

### Named Rules
**The Two Voices Rule.** Gloock names things; Archivo explains them. Never set body copy or controls in the display serif, and never set a section statement in the grotesque.

**The Annotation Rule.** Every small label is uppercase with at least 0.11em tracking. No sentence-case micro copy, no glyph icon standing in for a word.

**The Legibility Floor Rule.** Functional labels never go below 0.7rem/11.2px; credits, notes, and footer body never go below 0.75rem/12px. Shrink spacing or tracking before shrinking type.

**The No-Orphan Rule.** Display type uses `text-wrap: balance`; body paragraphs and metadata use `text-wrap: pretty`. Do not leave a one-word last line in a narrow column.

## Layout

The layout is a single 96rem shell with fluid side padding (clamp 1.15rem to 4rem) and a sticky paper header finished with a 1px hairline. Sections breathe on a clamp of 5rem to 8rem top and bottom. Content is separated by rules and rhythm, not by cards.

**Hero.** A 0.92fr / 1.08fr split on desktop: warm paper copy left, a full-height reference photograph right. The copy panel holds a top line, the display statement low-left, one sentence, a signal action, a text link, and a foot line. The photograph is cropped to the limewash arch (`object-position: 60% 48%`), graded warm, and finished with a subtle WebGL skylight and grain. A small paper caption chip sits bottom-left: "Limewash, low sun." Under 900px the hero stacks: copy, then a 62svh photograph (52svh under 600px).

**Studies.** A 0.92fr / 1.08fr split. The left column is a list of three study entries, each at least 76vh tall with its own hour, title, description, light/materials metadata, credit, and a hairline. The right column is a sticky viewer at `top: calc(header + 1.5rem)` with a 100svh-minus-header height. As the visitor scrolls, the active study frame crossfades in place. Under 900px the sticky viewer is removed and each entry gets its own 4:5 inline frame (3:4 under 600px) with a reference tag and hour chip.

**Approach.** A deep ink band. The section head is a two-column grid (1.1fr / 17–30rem) with the title held to 13ch. A sun-path rule with a low-sun dot and 06:00 / 12:00 / 20:00 marks sits above a three-column process divided by chalk hairlines. The process foot is a 1fr / 17–28rem split: a display statement left, three checked promises right.

**Studio / material register.** A 0.9fr / 1.1fr split on limewash shadow. The copy holds the studio statement and a text link. The register is a hairline stack of rows: a 5.5rem (4rem under 600px) photographic chip, a Gloock name, and a right-aligned tracked use label. The chips are editorial crops, not literal swatches; they are decorative and marked `aria-hidden`.

**Closing plate.** A full-bleed reference photograph under a deep ink scrim, with the title "The last decision is the one you live in." set bottom-left. The photograph is the bedroom reference, graded down; the index "Reference study / 19:20" and the credit sit beneath the title.

**Enquiry.** A 0.9fr / 1.1fr split. The left holds the three-line display question, a short body, and three numbered-by-dot next steps. The right is a square, transparent form with 1px bottom rules, labels above, a two-column field row, a full-width textarea, a form note, and one signal pill. The footer follows with a hairline, wordmark, provisional contact, copyright, and a full photography credit line.

**Responsive steps.** At 1100px the hero and study titles tighten. At 900px the primary nav becomes the Menu disclosure; the hero stacks; the sticky study viewer is replaced by inline frames; every two- and three-column grid collapses to one; the closing height reduces. At 600px the header shortens to 4rem, the Enquire link hides, the hero photo shortens, study metadata goes single-column, the sun-path gap tightens, and the material row narrows.

### Named Rules
**The Rule-Led Structure Rule.** Sections are separated by spacing and 1px rules, not cards or shadows. A new band is allowed only when the ground genuinely changes: paper to ink to paper-deep.

**The One Shell Rule.** Every section uses the same 96rem shell and fluid side padding. Photographs may bleed; text may not.

**The Sticky-Study Rule.** Desktop keeps one photograph in view while the evidence scrolls past it; mobile gives each study its own frame. Do not stack three large frames on desktop or use a sticky frame on mobile.

## Elevation & Depth

The system is flat by default. Depth comes from tonal layering (paper, paper-deep, ink), hairline rules, photographic light, and scrims; the only real shadows belong to the single action button and the mobile menu. Study and closing depth is photographic, not box-shadowed.

### Shadow Vocabulary
- **Button rest** (`0 0.8rem 1.4rem -0.9rem rgba(24, 33, 28, 0.55)`): lifts the one action off the paper.
- **Button hover** (`0 1rem 1.8rem -0.9rem rgba(24, 33, 28, 0.55)`): paired with a −1px translate.
- **Mobile menu** (`0 18px 40px -24px rgba(24, 33, 28, 0.45)`): the floating menu panel only.
- **Material chip inset** (`inset 0 0 0 1px rgba(24, 33, 28, 0.12)`): keeps the decorative crop crisp.
- **Photo scrims** (ink at 8–30% on the hero; 22–93% on the closing plate): guarantee caption and title contrast over photography.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows belong to the one action button and the mobile menu; they never decorate a content section.

**The Scrim-Not-Shadow Rule.** When type sits on a photograph, use a tonal scrim or a paper chip, not a drop shadow. The scrim must keep white-on-photo text at WCAG AA contrast.

## Shapes

The shape language is square, hairline, and pill. Content containers, frames, tags, fields, and the material register are sharp (0px radius); the only rounded action is the pill button (999px); list bullets and the sun dot are true circles (50%). There are no intermediate 4/8/12px content radii. Photographs are always clipped by their frame, never floated as rounded cards.

### Named Rules
**The Square-Container Rule.** Content containers and fields are square-cornered; only actions round. A rounded content card is off-world.

## Motion

Motion is designed to feel like light entering a room, not like a showreel. The site uses GSAP with ScrollTrigger, plus one lightweight Three.js layer.

- **Hero intro (on load):** the photograph reveals with a clip-path wipe and a 1.08 → 1 scale; the top line, headline lines, lede, actions, and foot line rise in a short stagger. The hero image is `priority`.
- **Scroll reveals:** `[data-reveal]` elements rise 28px and fade once at 86% viewport; material rows stagger by 70ms; closing children stagger by 120ms.
- **Study swap:** `StudyGallery` reads scroll position, marks the study nearest the viewport centre active, and crossfades the sticky frame (800ms opacity, 1400ms scale). Mobile uses static inline frames.
- **Closing parallax:** the closing photograph moves from −5% to 5% across its scroll range, with no scrub on text.
- **Sun path:** the SVG path draws from 0 to full dash-offset as the approach band enters view.
- **Hero light:** `HeroLight` renders a pointer-following warm skylight in a Three.js shader canvas at 85% opacity with screen blending. It is decorative, `aria-hidden`, and skipped entirely for reduced-motion visitors.

### Named Rules
**The Light-Not-Chrome Rule.** Motion should read as light or photographic reveal. Do not animate borders, buttons, or layout chrome for decoration.

**The Reduced-Motion Rule.** `prefers-reduced-motion` disables CSS animation, smooth scrolling, and the WebGL light; GSAP returns early and the static composition is complete.

**The No-Scroll-Jacking Rule.** Scroll position always belongs to the visitor. Use sticky and triggers; never hijack, snap, or pin the page.

## Photography

All photography is local, curated, and used as reference material. Every image is labelled a **reference study**, never a client commission, project, or testimonial. Credits live in `src/lib/photography.ts`, appear next to each study and the closing plate, and are repeated in the footer.

| File | Photographer | Source |
| --- | --- | --- |
| `hero-arch.jpg` | nugroho indro | https://www.pexels.com/photo/gray-plain-wall-surface-17885652/ |
| `study-quiet.jpg` | Sami Abdullah | https://www.pexels.com/photo/decorative-ceiling-in-apartment-10779189/ |
| `study-table.jpg` | Ron Lach | https://www.pexels.com/photo/dining-room-with-lamp-and-table-with-plates-and-cutlery-10240141/ |
| `study-evening.jpg` | Diana | https://www.pexels.com/photo/28513848/ |
| `detail-leather.jpg` | Çisel Bozar | https://www.pexels.com/photo/shadows-on-wall-over-couch-20297143/ |
| `detail-stone.jpg` | Mathias Reding | https://www.pexels.com/photo/photo-of-a-bathroom-sink-11299685/ |
| `detail-linen.jpg` | Steve A Johnson | https://www.pexels.com/photo/white-soft-fabric-17950958/ |

**Crops and treatment.** Hero: `60% 48%` desktop, `64% 50%` mobile, warm grade. Study frames: `50% 42%`, saturate 0.9 / contrast 1.04 plus a low-sun multiply wash and grain. Closing: `50% 42%`, saturate 0.82 / contrast 1.05 / brightness 0.72 under the scrim. Material chips are decorative editorial crops (wall, table, sink, sofa, linen, bedding) with a light desaturation; they are not literal product swatches.

### Named Rules
**The Reference-Not-Proof Rule.** Never present a reference photograph as a completed project, a client's home, or a commission. Label it, credit it, and keep the language factual.

**The Provenance Rule.** Every shipping raster lives in `public/images/` and has an entry in `src/lib/photography.ts` with alt text, photographer, and source URL. No hotlinked images, no uncredited stock, no orphan files.

## Components

### Buttons
- **Shape:** Full pill (999px), min-height 3rem, padding 0.9rem 1.35rem, uppercase Archivo 0.74rem/600 with 0.13em tracking.
- **Primary:** Verdigris ground with chalk-white text and a soft downward shadow.
- **Hover / Focus:** Hover deepens to verdigris-deep, lifts 1px, and grows the shadow; active returns to 0; disabled shows wait cursor at 0.6 opacity. Focus is a 2px signal outline with a 4px offset.
- **Secondary:** Underlined text links whose arrow slides 0.25rem right on hover. There is no second button style.

### Chips and Captions
- **Hero caption:** A paper chip at 92% opacity, bottom-left on the hero photograph, ink text, 0.7rem/600 uppercase with 0.15em tracking. It replaces photo-overlaid white text so contrast is guaranteed.
- **Study tag:** Absolute top-left on mobile inline frames and bottom-left on desktop sticky frames, 90% paper ground, ink text, square, 0.7rem/600 uppercase.
- **Study hour:** On mobile inline frames, an ink chip at 78% opacity with paper text, Gloock 1.5rem and tabular figures. The desktop frame caption pairs "Reference study" with the hour in a paper chip.
- **Material use:** Right-aligned 0.7rem/600 uppercase with 0.14em tracking; no chip background, just the hairline row.

### Study Viewer
- **Desktop:** 0.92fr / 1.08fr split; the sticky right frame is `calc(100svh − header − 3rem)` tall, min 30rem, max 50rem. Frames crossfade with a 1.02 → 1 scale; the active frame carries a low-sun wash and grain.
- **Mobile:** The sticky stage disappears; each entry gets a 4:5 (3:4 under 600px) inline frame with its own reference tag and hour chip.
- **Data:** Study titles, hours, light, materials, descriptions, and photos all come from `src/lib/photography.ts`. Do not hardcode duplicate study data in components.

### Material Register
- **Row:** 5.5rem photographic chip (4rem under 600px), Gloock name at 1.12rem, right-aligned tracked use label; hairline between rows.
- **Chip:** Square, inset hairline, `aria-hidden`, `object-fit: cover`, light desaturation; hover scales the image 1.06. The chip is a mood crop, not a product guarantee.
- **Background:** Limewash shadow; the register is a list, not a card.

### Inputs / Fields
- **Style:** Square and transparent with a single 1px weathered-ink bottom rule; min-height 2.9rem; Archivo 1rem. Labels sit above in 0.7rem/600 uppercase with 0.16em tracking.
- **Focus:** 2px signal outline at 3px offset plus a signal bottom border. Placeholder text is weathered ink.
- **Other:** Textarea is at least 7rem and vertically resizable. Select removes native appearance and draws a chevron as an inline SVG background. The form prepares a mailto draft; nothing is sent from the page.

### Navigation
- **Style:** Sticky paper header, 4.5rem tall (4rem under 600px), hairline bottom border. The wordmark pairs a 1.55rem signal mark with the name in Gloock at 1.08rem.
- **Links:** Archivo labels at 0.7rem/500 with 0.15em tracking in weathered ink; hover turns ink and underlines. The Enquire link sits right, underlined at 0.7rem/600 with 0.14em tracking.
- **Mobile:** Under 900px the links collapse into a details/summary "Menu" disclosure whose plus becomes a minus when open; the square paper panel carries a hairline border and popover shadow; Escape closes it and returns focus. A skip link appears top-left on keyboard focus.

### Footer
- **Structure:** Hairline top rule, wordmark and provisional contact left, copyright right, and a full-width photography credit row beneath.
- **Credits:** 0.75rem/12px links with 0.7rem tracked "Reference photography" label. Credits are functional and must remain legible; do not reduce them to micro type.

## Do's and Don'ts

### Do:
- **Do** use the local reference photographs, label them reference studies, and credit every frame in the page and in `src/lib/photography.ts`.
- **Do** keep the desktop sticky study viewer and the mobile inline frames; the photograph should stay with the evidence.
- **Do** reserve verdigris for action, focus, and selection, and low sun for the daylight dot and photo grade.
- **Do** pair Gloock statements and names with Archivo explanations and tracked uppercase labels.
- **Do** keep frames, chips, tags, and fields square; reserve 999px for button pills and 50% for dots.
- **Do** use a paper chip or tonal scrim behind type on photography; verify AA contrast.
- **Do** preserve the 2px signal focus outline, the reduced-motion fallback, and the 11px/12px type floors.
- **Do** use `text-wrap: balance` on display type and `text-wrap: pretty` on body and metadata.
- **Do** keep section structure rule-led: spacing, hairlines, and ground changes, not cards.

### Don't:
- **Don't** present reference photography as client commissions, completed projects, testimonials, or proof.
- **Don't** add stock images that are not in `public/images/` and `photography.ts`, and never hotlink a photo.
- **Don't** add numbered section kickers or decorative chapter indices; let hierarchy and content carry the sequence.
- **Don't** use the signal as a decorative fill or give individual sections their own accent colours.
- **Don't** round content frames, chips, or fields, or add shadows to content sections.
- **Don't** set body copy or controls in Gloock, or section statements in Archivo.
- **Don't** drop functional labels below 0.7rem/11.2px or credits below 0.75rem/12px.
- **Don't** invent client names, testimonials, awards, pricing, team facts, or completed-project claims in any new surface.
