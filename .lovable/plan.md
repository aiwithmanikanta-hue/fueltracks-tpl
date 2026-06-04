Update the LIVE LOGIN button in the header navigation to redirect to `http://fueltracks.online/gps/public/login` instead of `#`.

Changes:
- `src/components/Header.tsx`: Update `href="#"` to `href="http://fueltracks.online/gps/public/login"` on both the desktop LIVE LOGIN link (line 59) and the mobile menu LIVE LOGIN link (line 86).

No other navigation or routing changes needed.