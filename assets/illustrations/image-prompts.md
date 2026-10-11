# London pencil atlas image prompts

Built-in ImageGen was used for all assets. Reference: `approved London atlas design reference`.

## Transparency repair for Big Ben and Westminster Abbey

The viewer appeared to show a beige halo outside two silhouettes. Two ImageGen repair variants were attempted with the prompt below, then read-only RGBA pixel inspection confirmed that the apparent glow was hidden RGB beneath alpha-zero pixels. The original, more muted pencil drawings were selected. Repair variants remain in the generated-images directory as provenance and are recorded in asset-manifest.json.

```text
Use case: background-extraction
Asset type: transparent architecture cutout for a pencil travel atlas.
Input image: Image 1 is the EDIT TARGET.
Primary request: Remove only the unwanted soft beige/brown background glow or halo surrounding the drawn building. Keep the existing colored-pencil architecture, its exact silhouette and its delicate graphite details unchanged. Make the space outside the architecture completely clear alpha transparency, including any pale area below or beside it and every area between pinnacles and towers. It must look clean when placed on ivory paper.
Constraints: Retain the complete drawing, all spire tips, base, proportions, viewpoint, graphite contours, warm ochre pencil stonework, slate roofs and fine hatching. No crop. No added shadows, glow, ground disk, paper rectangle, border, label or background. The architecture's solid filled surfaces remain visible; only non-architecture outside the silhouette is removed. Give a truly transparent margin around every side of the complete building.
Background: Genuinely transparent alpha, no matte color and no soft halo.
```

## backdrop.png

Transparent background: `false`

```text
Use case: precise-object-edit
Asset type: landscape 3:2 atmospheric pencil-map background for an interactive London atlas.
Input image: Image 1 is the EDIT TARGET, the user-approved full London illustrated webpage concept.
Primary request: Turn only the background illustration of this approved concept into a standalone artful clean illustrated backdrop. Remove ALL typography everywhere, ALL labels, ALL numbers, ALL colored dots, ALL leader lines, ALL cursor artwork, ALL header/footer rules, ALL north compass symbols. Completely erase the SIX principal landmark buildings: British Museum (upper middle-left), Buckingham Palace (middle-left), Westminster Abbey (bottom middle-left), Big Ben and its attached Parliament architecture (middle center), London Eye (upper middle-right), and Tower Bridge (far right). Do not leave those landmarks as ghosts, silhouettes, outlines, pedestals or shadow shapes. Leave their corresponding positions as light open clearings for later layered landmark illustrations.
Invariants to preserve: The overall high slightly elevated three-quarter map viewpoint and the broad composition. Keep the pale blue Thames sweeping across the right side then diagonally down toward bottom middle. Retain the lightly sketched incidental streets, small background townhouses, distant churches, St Paul's dome, small bridges that are not Tower Bridge, pale trees and subtle little river boats. Keep the LEFT 30 PERCENT largely blank light ivory paper, suitable for readable typography. No sharp boundaries around blank areas.
Style/medium: More convincingly hand drawn than the source: light irregular graphite architectural contour lines, delicate crosshatching, faint visible colored-pencil strokes, plenty of airy paper between marks. Charming artist's travel atlas sketch, no glossy 3D surfaces, no digital render, no vector style.
Color palette: Ivory paper #f7f4ed, very pale graphite/sepia incidental lines, subdued olive-gray tree pencil marks, pale powder-blue colored-pencil Thames, extremely faint ochre details. Background art should be quiet and light.
Composition/framing: Landscape 3:2, complete background across the canvas, no webpage interface, no border or typography.
Constraints: Absolutely no text or labels, no markers or numbers, no cursor, no named principal landmark architecture, no routes. Preserve atmospheric London context around the six light clearings. Opaque ivory paper background.
```

## big-ben.png

Transparent background: `true`

```text
Use case: stylized-concept
Asset type: independent transparent landmark illustration for a London pencil-atlas website.
Input image: Image 1 is a STYLE AND VIEWPOINT REFERENCE ONLY, the approved London illustrated atlas webpage. Do not reproduce the webpage or its typography.
Style/medium: An artist's architectural travel sketch, hand drawn with delicate irregular graphite outlines, detailed crosshatching, visible colored-pencil strokes and restrained muted colored-pencil fills. Match the slightly elevated three-quarter viewpoint of the buildings in the reference. Fine dry pencil texture, charming restrained hand sketch. Avoid photographic realism, 3D render smoothness, thick vector outlines, airbrushed or glossy shading.
Color palette: Warm ivory and ochre stone, soft slate roofs, a few tiny rust or terracotta accents; graphite contours. Fully colored building for a hover state, with enough colored-pencil texture to remain an appealing graphite sketch when converted to grayscale.
Composition/framing: A SINGLE complete architectural miniature centered in the canvas. Keep its entire silhouette, roof tips, foundations and architectural extremities uncut. The building fills about 75–80% of the canvas dimensions, with generous genuinely transparent margins all around. Architecture only, with no surrounding city, no decorative ground disc, no platform, no ground shadow, no paper rectangle or paper backdrop.
Text: None. No captions, labels, numbers, emblems, cursor, leader lines, frames, map markers or watermark.
Background: Genuinely transparent alpha background throughout the canvas outside the architecture.
Subject: Big Ben, the Elizabeth Tower in London. A tall slender vertical Gothic sandstone clock tower with recognizably accurate four clock faces near the top, delicate ornamental bands, gray slate pyramidal roof and small pointed spire. Show the front and right faces in the slightly elevated three-quarter viewpoint of the reference. Only a very small suggestion of low attached Parliament stonework at the base is acceptable; the focus is the complete elegant slender clock tower. Keep the tower slender and draw the face numerals as tiny sketch marks, not readable typography. Colored-pencil warm buff/ochre stone with muted gray slate roof.
```

## tower-bridge.png

Transparent background: `true`

```text
Use case: stylized-concept
Asset type: independent transparent landmark illustration for a London pencil-atlas website.
Input image: Image 1 is a STYLE AND VIEWPOINT REFERENCE ONLY, the approved London illustrated atlas webpage. Do not reproduce the webpage or its typography.
Style/medium: An artist's architectural travel sketch, hand drawn with delicate irregular graphite outlines, detailed crosshatching, visible colored-pencil strokes and restrained muted colored-pencil fills. Match the slightly elevated three-quarter viewpoint of the buildings in the reference. Fine dry pencil texture, charming restrained hand sketch. Avoid photographic realism, 3D render smoothness, thick vector outlines, airbrushed or glossy shading.
Color palette: Warm ivory and ochre stone, soft slate roofs, a few tiny rust or terracotta accents; graphite contours. Fully colored building for a hover state, with enough colored-pencil texture to remain an appealing graphite sketch when converted to grayscale.
Composition/framing: A SINGLE complete architectural miniature centered in the canvas. Keep its entire silhouette, roof tips, foundations and architectural extremities uncut. The building fills about 75–80% of the canvas dimensions, with generous genuinely transparent margins all around. Architecture only, with no surrounding city, no decorative ground disc, no platform, no ground shadow, no paper rectangle or paper backdrop.
Text: None. No captions, labels, numbers, emblems, cursor, leader lines, frames, map markers or watermark.
Background: Genuinely transparent alpha background throughout the canvas outside the architecture.
Subject: Tower Bridge, London, as a complete recognizable architectural miniature. Two pale warm ivory/ochre Gothic stone towers with slate pointed roofs, all tops and all bases visible, connected by the upper horizontal walkway and lower road deck, plus pale muted sky-blue suspension steel beams and elegant blue suspension curves extending to both ends. Viewpoint matches the reference's slightly elevated three-quarter perspective, with the near tower toward right. Both suspension side spans must be completely inside the image. Restrained blue colored pencil, pale warm stone, small terracotta details. No river, embankment or water below the bridge. Wide landscape canvas to fit the entire bridge. Do not crop either approach span.
```

## british-museum.png

Transparent background: `true`

```text
Use case: stylized-concept
Asset type: independent transparent landmark illustration for a London pencil-atlas website.
Input image: Image 1 is a STYLE AND VIEWPOINT REFERENCE ONLY, the approved London illustrated atlas webpage. Do not reproduce the webpage or its typography.
Style/medium: An artist's architectural travel sketch, hand drawn with delicate irregular graphite outlines, detailed crosshatching, visible colored-pencil strokes and restrained muted colored-pencil fills. Match the slightly elevated three-quarter viewpoint of the buildings in the reference. Fine dry pencil texture, charming restrained hand sketch. Avoid photographic realism, 3D render smoothness, thick vector outlines, airbrushed or glossy shading.
Color palette: Warm ivory and ochre stone, soft slate roofs, a few tiny rust or terracotta accents; graphite contours. Fully colored building for a hover state, with enough colored-pencil texture to remain an appealing graphite sketch when converted to grayscale.
Composition/framing: A SINGLE complete architectural miniature centered in the canvas. Keep its entire silhouette, roof tips, foundations and architectural extremities uncut. The building fills about 75–80% of the canvas dimensions, with generous genuinely transparent margins all around. Architecture only, with no surrounding city, no decorative ground disc, no platform, no ground shadow, no paper rectangle or paper backdrop.
Text: None. No captions, labels, numbers, emblems, cursor, leader lines, frames, map markers or watermark.
Background: Genuinely transparent alpha background throughout the canvas outside the architecture.
Subject: The British Museum in London, a broad classical Greek revival façade, precise repeated Ionic colonnade across its central portico, triangular pediment with very delicate sketched sculpture, long symmetrical pale stone façade and shallow steps, modest flanking wings. Show the front and one side in the slightly elevated three-quarter viewpoint matching its location in the reference. Complete building architecture only, no courtyard scene or trees. Delicate warm ivory/ochre pencil-colored stone, subtle gray roof and gray hatching; keep the width elegant and the recognizable column rhythm crisp.
```

## buckingham-palace.png

Transparent background: `true`

```text
Use case: stylized-concept
Asset type: independent transparent landmark illustration for a London pencil-atlas website.
Input image: Image 1 is a STYLE AND VIEWPOINT REFERENCE ONLY, the approved London illustrated atlas webpage. Do not reproduce the webpage or its typography.
Style/medium: An artist's architectural travel sketch, hand drawn with delicate irregular graphite outlines, detailed crosshatching, visible colored-pencil strokes and restrained muted colored-pencil fills. Match the slightly elevated three-quarter viewpoint of the buildings in the reference. Fine dry pencil texture, charming restrained hand sketch. Avoid photographic realism, 3D render smoothness, thick vector outlines, airbrushed or glossy shading.
Color palette: Warm ivory and ochre stone, soft slate roofs, a few tiny rust or terracotta accents; graphite contours. Fully colored building for a hover state, with enough colored-pencil texture to remain an appealing graphite sketch when converted to grayscale.
Composition/framing: A SINGLE complete architectural miniature centered in the canvas. Keep its entire silhouette, roof tips, foundations and architectural extremities uncut. The building fills about 75–80% of the canvas dimensions, with generous genuinely transparent margins all around. Architecture only, with no surrounding city, no decorative ground disc, no platform, no ground shadow, no paper rectangle or paper backdrop.
Text: None. No captions, labels, numbers, emblems, cursor, leader lines, frames, map markers or watermark.
Background: Genuinely transparent alpha background throughout the canvas outside the architecture.
Subject: Buckingham Palace, London, complete broad symmetrical pale-stone front façade with central balcony, rhythm of sash windows and pilasters, slate-gray low roof line, and flanking wings visible in a slightly elevated three-quarter architectural viewpoint matching the reference. Stately wide shallow composition, recognizable palace silhouette, warm ivory stone with faint ochre colored-pencil accents. A tiny British flag above the central roof may appear as small colored sketch marks without lettering. Architecture only: no Victoria Memorial, no plaza, gate, people, city, trees, or paper ground.
```

## london-eye.png

Transparent background: `true`

```text
Use case: stylized-concept
Asset type: independent transparent landmark illustration for a London pencil-atlas website.
Input image: Image 1 is a STYLE AND VIEWPOINT REFERENCE ONLY, the approved London illustrated atlas webpage. Do not reproduce the webpage or its typography.
Style/medium: An artist's architectural travel sketch, hand drawn with delicate irregular graphite outlines, detailed crosshatching, visible colored-pencil strokes and restrained muted colored-pencil fills. Match the slightly elevated three-quarter viewpoint of the buildings in the reference. Fine dry pencil texture, charming restrained hand sketch. Avoid photographic realism, 3D render smoothness, thick vector outlines, airbrushed or glossy shading.
Color palette: Warm ivory and ochre stone, soft slate roofs, a few tiny rust or terracotta accents; graphite contours. Fully colored building for a hover state, with enough colored-pencil texture to remain an appealing graphite sketch when converted to grayscale.
Composition/framing: A SINGLE complete architectural miniature centered in the canvas. Keep its entire silhouette, roof tips, foundations and architectural extremities uncut. The building fills about 75–80% of the canvas dimensions, with generous genuinely transparent margins all around. Architecture only, with no surrounding city, no decorative ground disc, no platform, no ground shadow, no paper rectangle or paper backdrop.
Text: None. No captions, labels, numbers, emblems, cursor, leader lines, frames, map markers or watermark.
Background: Genuinely transparent alpha background throughout the canvas outside the architecture.
Subject: The London Eye, a recognizably accurate tall observation wheel with delicate circular rim, many taut fine spokes from a central hub, 32 small rounded glass passenger capsules attached around the outer rim, an asymmetric leaning A-frame support structure and a small architectural base. Slightly elevated three-quarter perspective, wheel shown slightly oblique as in the reference. Pencil graphite gray steel with muted blue-gray tinted glass pods. Preserve clear transparent negative spaces between every fine spoke and inside the frame; no white-filled wheel interior. Entire complete wheel, outer capsules, support feet and base inside canvas. No river, trees, people, scenery, ground disk or ground shadow.
```

## westminster-abbey.png

Transparent background: `true`

```text
Use case: stylized-concept
Asset type: independent transparent landmark illustration for a London pencil-atlas website.
Input image: Image 1 is a STYLE AND VIEWPOINT REFERENCE ONLY, the approved London illustrated atlas webpage. Do not reproduce the webpage or its typography.
Style/medium: An artist's architectural travel sketch, hand drawn with delicate irregular graphite outlines, detailed crosshatching, visible colored-pencil strokes and restrained muted colored-pencil fills. Match the slightly elevated three-quarter viewpoint of the buildings in the reference. Fine dry pencil texture, charming restrained hand sketch. Avoid photographic realism, 3D render smoothness, thick vector outlines, airbrushed or glossy shading.
Color palette: Warm ivory and ochre stone, soft slate roofs, a few tiny rust or terracotta accents; graphite contours. Fully colored building for a hover state, with enough colored-pencil texture to remain an appealing graphite sketch when converted to grayscale.
Composition/framing: A SINGLE complete architectural miniature centered in the canvas. Keep its entire silhouette, roof tips, foundations and architectural extremities uncut. The building fills about 75–80% of the canvas dimensions, with generous genuinely transparent margins all around. Architecture only, with no surrounding city, no decorative ground disc, no platform, no ground shadow, no paper rectangle or paper backdrop.
Text: None. No captions, labels, numbers, emblems, cursor, leader lines, frames, map markers or watermark.
Background: Genuinely transparent alpha background throughout the canvas outside the architecture.
Subject: Westminster Abbey, London, complete recognizable Gothic abbey architectural miniature. Its twin west-front square Gothic towers with decorative pinnacles, pointed arched portals, central tall traceried window, flying buttresses and long nave extending behind the façade. Slightly elevated three-quarter viewpoint matching the reference so both west-front towers and some side nave are visible. Delicate warm ivory/ochre stone colored pencil with slate-gray roof, tiny graphite tracery and subtle shaded crosshatching. Complete foundation through highest finial, building architecture only. No plaza, trees, people, other city buildings, paper rectangle or cast ground shadow.
```

