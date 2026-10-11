# Verification status

Checked on 11 October 2026.

## Completed

- JavaScript syntax check passed. All local HTML and CSS asset references resolve.
- Six independent transparent landmark illustrations, local fonts and their OFL licence files are bundled. Interface text is English.
- In a real Tabbit browser, all six building clicks opened the corresponding illustrated story, with the correct title, image and original descriptions. Escape closed each story.
- The desktop detail layout and the Big Ben illustration were inspected visually.
- The homepage Day / Golden Hour control was tested in the real browser in both directions. Refresh restored the saved lighting choice.
- Desktop and narrow-screen screenshots were inspected for the warm sky, subtle building lighting and softened map boundaries. Paper and text colours stay unchanged in both modes.
- The header was checked again at 390 px and 320 px after adding the lighting control; the 320 px button spacing was corrected and visually rechecked.
- Previous and Next story controls were tested, including the wrap from Big Ben to Westminster Abbey and back. Changing stories moves keyboard focus to the new heading and resets the dialog scroll position. Next was also checked at 320 px.
- Browser device emulation at 390 px and 320 px was used to inspect the header, music button, title, map and story layout.
- A landmark story was opened, scrolled and closed at the mobile viewport. The close button stays available while scrolling.
- The music button started real browser audio playback and changed to Pause; pausing stopped playback and restored Play. Initial load was silent.
- The recording is a local MP3, with loop enabled, preload disabled, a quiet default volume and a visible CC BY 4.0 credit.
- The original map hover/selection event checks passed before the story-dialog extension; the current dialog and music changes were checked in the browser.
- The public repository is https://github.com/Nikihu-a/london-pencil-atlas.
- GitHub Pages is enabled for main, / (root). The initial live deployment was verified at https://nikihu-a.github.io/london-pencil-atlas/.

## Limits

Mobile inspection used browser emulation, not a physical phone. Audio playback state was verified in the browser; no subjective listening evaluation was recorded.
