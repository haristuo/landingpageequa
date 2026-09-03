# Design QA

- Source visual truth: `/Users/haristurko/.codex/generated_images/01a03f5c-c278-7ad0-af1f-5e63d33f63f0/exec-5607e0bc-920c-4a7b-8d90-f49b07f70381.png`
- Implementation screenshots: `implementation-desktop-top.png`, `implementation-mobile-top.png`
- Combined comparison: `design-comparison.png`
- Desktop source pixels: 1536 × 1024
- Desktop implementation viewport: 1280 × 720 CSS px, device pixel ratio 2; browser capture normalized by CSS viewport
- Mobile implementation viewport: 390 × 844 CSS px, device pixel ratio 2
- State: initial landing-page state with Whitelabel staging widget loaded

## Full-view comparison evidence

The implementation preserves the selected direction's split hero, cream surface, coral emphasis, yellow/green accents, dark display typography, candid community-garden photography, concise navigation, primary help CTA, impact strip, photo-led projects, story feature, and blue participation section. The implementation intentionally uses a taller, more expressive headline at narrower desktop widths while retaining the same information hierarchy.

## Focused-region evidence

The hero was checked separately at desktop and mobile sizes. The initial mobile and desktop captures exposed headline overflow for “Nachbarschaften”; its responsive display size was reduced and rechecked. The final headline and document remain within the viewport. All four generated photographs load at their natural 1536 px width and use intentional cover crops.

## Required fidelity surfaces

- Typography: Syne and DM Sans match the bold editorial/reference character; final heading wraps without viewport overflow.
- Spacing and layout: split hero and large section rhythm match the source; mobile collapses to a single readable column.
- Colors: cream, coral, yellow, cobalt, green, and near-black map directly to the selected direction with accessible contrast.
- Image quality: all visible photographic assets are locally stored 1536 × 1024 generated images with consistent candid documentary art direction; no placeholders or CSS-drawn image substitutes remain.
- Copy: concise German nonprofit copy is consistent across hero, impact, projects, story, participation, donation test, and newsletter states.

## Interaction verification

- Navigation anchors work on the single page.
- Donation dialog opens, amount selection works, and the non-transactional test confirmation appears.
- Newsletter form reaches its success state.
- Whitelabel staging widget loads and exposes its assistant button.
- Browser console: no errors or warnings.

## Comparison history

1. P2: “Nachbarschaften” overflowed the mobile viewport and was clipped on narrower desktop widths.
2. Fix: added a responsive, smaller display size for the highlighted word and mobile overflow protection.
3. Post-fix evidence: desktop span bounds remain inside its 428 px content column; mobile H1 bounds remain inside the 331 px content area with no horizontal document overflow.

## Follow-up polish

- P3: The implementation uses generated photography with different people than the concept mock while retaining its subject, crop logic, warmth, and documentary tone.

final result: passed
