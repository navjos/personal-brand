---
name: figma-logo-construction-grid
description: Build a clean, editorial-style logo construction grid in Figma that explains a logo's actual geometry (circles, tangents, angles, symmetry, modules) using measured guides, not decoration. Use this skill whenever the user asks to build a "logo construction grid," "logo grid," "construction lines" or "deconstruction" for a logo, wants to "show the geometry behind a logo," "reverse-engineer a logomark's grid," or references a Figma file and asks for multiple grid "directions" or "variations" explaining a mark. Also trigger for requests like "make a grid like the ones agencies publish for brand guidelines" or "annotate this logo's proportions" even if the words "construction grid" aren't used.
---

# Figma Logo Construction Grid

This skill produces the kind of construction-grid boards agencies publish in
brand guidelines: thin, precise geometric guides overlaid on a logo that
reveal the real relationships in its geometry (circles, tangents, angles,
symmetry, modules), rendered as restrained, editorial, native Figma vectors.

Requires Figma access (a Figma MCP server or plugin tool-set). If no such
tool is available in the current session, say so and ask the user how they'd
like to provide Figma access before proceeding.

## Parameters to collect before starting

Ask for whatever isn't already given:

- **Figma file URL** containing the logo(s) to build grids for.
- **Number of grid directions per logo** (default: 3, if not specified).
- **Reference images** (optional): example construction grids to match tone
  and restraint against. These set the *visual language only* — never copy
  their geometry or methods onto the current logo.

Then follow the five steps below for every logo in scope.

## 1. Analyze first

Before drawing anything, read the logo's actual geometry. Export its vector
path (SVG) and parse it. Measure, don't eyeball:

- bounding box, centre, any symmetry (mirror or rotational) and how exact it is
- circles: fit them to the curved segments and check radius, centre and
  tangency to the bounding box or to edges
- straight-edge angles, repeated radii or module sizes, and equal ratios
  between shapes
- which anchors and intersections matter (arc ends, tangent points, fillets,
  centres)

Derive the construction from the logo itself. Never force a generic grid onto
it. Do not force geometric purity onto an imperfect logo: the goal is to
explain the existing mark, not to redesign it or mathematically "fix" it.
Where something fits only approximately, keep the real shape and say so.

## 2. Construction

- Explain the whole mark, not one feature. Use whatever combination of
  circles, arcs, tangents, axes, angles, polygons, extended edges, fillets,
  bounding-box relationships or proportions the logo actually supports.
- Every direction must be complete. Each board must combine different
  element types (for example straight guides, circles or arcs, and polygons
  or extended edges, plus anchors) wherever the logo has both curves and
  straight edges. Directions differ in organization and emphasis, not by
  leaving out whole kinds of element.
- Stay restrained. The grid must never overwhelm the logo. Keep each board
  to a modest number of guide elements (roughly 25–35), and if a board
  starts to feel busy, drop the weakest elements and keep the strongest
  relationships.
- When asked for N directions, develop N genuinely different construction
  systems derived from the logo's own geometry. Do not use a predetermined
  set of grid types. The construction methods should emerge naturally from
  the relationships present in the mark. If the logo genuinely does not
  support that many meaningfully different systems, prioritize quality over
  artificial variation: do not invent weak alternatives just to reach the
  requested count.
- Every guide must earn its place. Remove anything decorative, redundant or
  near-miss: lines that almost coincide with logo edges or with each other
  look like mistakes.

## 3. Visual rules (strict)

- Absolutely no text, numbers, labels, dimensions, rulers, tick marks,
  legends, titles or captions on the boards. Only the logo and its geometry.
- Near-white background, neutral grays only. No colour, gradients, shadows
  or effects.
- Use three tiers and make them clearly visible, not faint. Primary: solid,
  about 2.4 px, dark gray. Secondary: dashed, about 1.7 px, medium-dark gray.
  Auxiliary: solid or dotted, about 1.3 px, mid gray. Check contrast on a
  render; if any line is barely visible, thicken or darken it.
- Small hollow nodes at key anchors, a centre marker, and small squares at
  bounding-box corners are fine.
- Keep the logo the strongest element: the logo copy is a flat translucent
  gray fill (about 10% black) with a dark outline, about 2.6 px.
- Scale: on a 2560×1440 artboard the logo should occupy roughly 40–45% of
  the artboard height. It must not fill the space; leave generous breathing
  room, and extend guide lines only a controlled distance beyond the mark.
- If the geometry is accurate but the board looks cluttered, simplify.
  Overall beauty matters more than completeness.

## 4. Figma implementation

- Never alter the original logo. Duplicate the vector for each board.
- One frame per board, 2560×1440, named "Construction Grid — Direction
  01/02/03" (or "— Logo N"), placed beside the original with clear spacing.
- Everything must be native, editable vectors. Layers, bottom to top:
  01 Auxiliary lines, 02 Secondary guides, 03 Primary construction,
  04 Logo (copy), 05 Anchors.
- Centre the composition on the artboard.
- Don't delete or overwrite anything you didn't create.

## 5. Verify

Render every board and inspect it. Check that nothing floats off-canvas,
arcs and logo edges coincide, line weights read at a glance, the hierarchy
is clear, each direction mixes element types, the logo is still the hero,
and no text remains. Apply optical judgment, not only mathematical:
mathematical alignment is not always visual alignment. Respect the actual
logo and any intentional optical corrections in it, and do not "correct"
them away to make the construction tidier. Fix and re-render once, then
report briefly: what you measured, which relationships are approximate, and
what each direction shows.
