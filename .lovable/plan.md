## Goal
Remove the video from the Hero section of the Fuel Tracks website.

## Current State
- The Hero section (`src/components/sections/Hero.tsx`) has a two-column grid layout.
- The right column contains a looping `<video>` element (`src/assets/video-tracks.mp4`).
- The left column contains the headline, description, CTA buttons, and stats.

## Proposed Changes

1. **Remove the video element and its container** from `src/components/sections/Hero.tsx` (lines 95–111).
2. **Adjust the layout grid** from `lg:grid-cols-2` to a single centered column, so the headline and stats remain visually balanced without the empty right side.
3. **Clean up unused imports**: remove the `videoTracks` import if no longer referenced.
4. **(Optional)** Delete the unused `src/assets/video-tracks.mp4` file and any stale `.asset.json` pointer if present, to keep the repo clean.

## Result
The Hero section will display only the text content, stats, and CTAs on a clean background, with no video playing on the right.