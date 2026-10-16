# Digital Link Studio website

Standing instructions for anyone working on this project, including AI coding assistants.

## Project

- This is the Digital Link Studio marketing website.
- Keep the existing plain HTML, CSS and JavaScript approach (`index.html`, `css/styles.css`, `js/main.js`, `assets/`).
- Do not add frameworks, dependencies or build tools unless there is a clear need. Explain the need first.

## Guidance

- Consult Modern Web Guidance for relevant web platform work.
  - It is Google Chrome's set of web best practice guides: https://github.com/GoogleChrome/modern-web-guidance
  - With the plugin installed, use its search and retrieve steps. Without it, the same guides can be fetched with `npx -y modern-web-guidance@latest search "<query>"` and `npx -y modern-web-guidance@latest retrieve "<id>"`. Run these outside the project folder so nothing is written into the site.
- Apply guidance appropriate to the actual component. Do not turn a simple dropdown into a modal drawer merely because a drawer guide is available.
- If the guidance is unavailable, disclose that limitation.
- Keep these project instructions understandable to a developer who does not have the plugin installed.

## Accessibility and browser support

- Target WCAG 2.2 AA. Do not claim compliance solely because automated checks pass.
- Prefer semantic HTML, accessible names, keyboard operation, visible focus, sufficient contrast and reduced motion support.
- Support the current and previous major versions of Chrome, Edge, Firefox and Safari, including iOS Safari and Android Chrome.
- Use progressive enhancement. Core navigation, content and forms must remain usable when an enhancement is unsupported.

## Brand and content

- Follow the available DLS messaging principles and approved brand materials. If they are unavailable, ask for them rather than inventing brand rules.
- Do not invent testimonials, results, credentials or claims.
- Avoid unnecessary dashes in customer facing prose. This does not apply to code, filenames or grammatically necessary hyphens.
- Preserve approved copy unless the task includes editing it.

## Verification

- After relevant changes, check desktop and mobile layouts, keyboard interactions, links and browser console errors.
- Use the existing tools for appropriate checks.
- Explain what was tested and what remains untested.
- Flag existing issues outside the requested scope without silently expanding the task.

## Change management

- Keep changes focused and preserve existing work.
- Never commit secrets or credentials.
- Do not merge into the default branch or deploy to production without the owner's explicit instruction.
