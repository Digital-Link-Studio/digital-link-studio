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
  - `services.html` (main nav, footer) does not exist.
  - `contact.html` (main nav, footer, `index.html` line 523) does not exist.
  - `#growth-checklist` (hero, `index.html` line 121) has no matching target.

## Untested concerns

- [ ] **Anchor offsets when the header grows.** `scroll-margin-top` and the hero's minimum height use the fixed `--header-height` (72px mobile, 96px desktop). With enlarged text the real header is taller, so section headings reached by anchor links may land partly under it.
- [ ] **Which focusable elements sit on ink or peach backgrounds.** The contrast math above is confirmed. Which links or controls are actually affected has not been checked.
- [ ] **Browsers and devices.** Safari, iOS Safari, Firefox, Edge and Android Chrome have not been tested. Neither have Firefox text-only zoom or Safari text size settings.
- [ ] **Screen readers.** Not tested.
- [ ] **Other pages.** Only `index.html` exists so far, so no other pages have been tested.
