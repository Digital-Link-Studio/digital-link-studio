# Site TODO

Findings outside the task at hand. Add new ones here and keep going with the requested work unless a finding blocks it.

Testing so far used headless Chromium on `index.html` only. "Enlarged text" means the root font size set to 200%. "Text spacing" means the WCAG 1.4.12 overrides: line height 1.5, letter spacing 0.12em, word spacing 0.16em, paragraph spacing 2em.

## Confirmed

- [ ] **Cards overflow with enlarged text.** At 320px with text at 200%, `.card`, `.card__title`, `.card__text` and `.eyebrow` extend up to 68px past the viewport and cause horizontal scrolling.
- [ ] **Skip link peeks into view.** `.skip-link` is hidden with `top: -100px`. With enlarged text and text spacing at 320px it wraps to 116px tall, so 16px shows at the top of the page while it is not focused.
- [ ] **Sticky header gets tall with enlarged text.** The header now grows to fit the logo. At 320px it is about 148px with enlarged text and about 220px with enlarged text plus text spacing, and it stays on screen while scrolling. That is over a third of a small phone screen. Options: let the header scroll away on small screens, or accept the cost.
- [ ] **Logo bar animation has no pause control.** The client logo bar scrolls continuously (40s loop). It pauses on mouse hover only, so keyboard and touch users cannot stop it (WCAG 2.2.2). It does stop when reduced motion is requested.
- [ ] **Focus ring contrast on dark and peach backgrounds.** The copper focus outline (#9A5530) measures 5.65:1 on white, 5.04:1 on cream and 4.23:1 on the pill color, but 2.73:1 on ink (#2B231C) and 2.97:1 on peach (#DDB497), below the 3:1 needed for WCAG 1.4.11.
- [ ] **Unfinished links.**
  - `contact.html` (main nav and footer Contact links) does not exist.
  - "Let’s discuss your business" on `growth-audit.html` and "Let’s discuss your project" on `growth-programs.html` link to `contact.html`, which only exists once the contact page is merged.
  - "Explore ways to work together" on `growth-snapshot.html`, `growth-audit.html` and `growth-programs.html` points to the homepage as a placeholder. The cards above it are not linked to their pages yet.
- [ ] **Longer button labels wrap.** Since the rename, "Book a Live Growth Snapshot" in the header wraps to two lines at 861px (three with text spacing), and "Book your Live Growth Snapshot" in the Live Growth Snapshot page hero wraps to two lines at 375px. Both stay readable and nothing overlaps. A shorter header label or a later mobile breakpoint would avoid it.

- [ ] **Team photos missing on the Growth Partnership page.** Only Shanda's photo exists. The other five team cards show no photo until photos are provided.
- [ ] **Hours split bars are read from the design.** The bars on `growth-partnership.html` show about 80/20, 60/40 and 35/65 strategy to execution, measured from the PDF. Screen readers announce these percentages, so they need the owner's confirmation.

## Untested concerns

- [ ] **Anchor offsets when the header grows.** `scroll-margin-top` and the hero's minimum height use the fixed `--header-height` (72px mobile, 96px desktop). With enlarged text the real header is taller, so section headings reached by anchor links may land partly under it.
- [ ] **Which focusable elements sit on ink or peach backgrounds.** The contrast math above is confirmed. Which links or controls are actually affected has not been checked.
- [ ] **Browsers and devices.** Safari, iOS Safari, Firefox, Edge and Android Chrome have not been tested. Neither have Firefox text-only zoom or Safari text size settings.
- [ ] **Screen readers.** Not tested.
- [ ] **Other pages.** `growth-snapshot.html` and `growth-partnership.html` have only been tested in headless Chromium, like the homepage.
