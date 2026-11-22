# Jew Trades — Site Plan

A static one-pager showcasing futures prop firms we're affiliated with. One call to action everywhere: **use code `JEW`**.

- **Stack:** Astro (static output), plain CSS, minimal vanilla JS
- **Hosting:** GitHub Pages via the official `withastro/action` workflow, deploying from `master`
- **Tone:** semi-professional, community-driven, a bit cheeky. Futures traders are not serious people.
- **Theme:** Jewish + Israeli. Blue shades, Star of David, flag stripes, "JEW" treated like a ticker symbol.

## Sections (in order)

1. **Navbar (sticky):** Star of David logo + "J TRADES", anchor links (Firms · How it works), and a `$JEW` pill that copies the code.
2. **Hero:**
   - Small Hebrew-flavoured eyebrow line: "!Shalom, traders"
   - Headline: *"The only code you need to remember: JEW."*
   - Large glowing code block with a **Copy code** button
   - Ticker line: `$JEW ▲ 8 firms · 1 code`
   - Background: faint chart grid and a large, dim Star of David that draws itself in
3. **Ticker strip:** firm names scroll past continuously like a market ticker, with flag-stripe borders above and below.
4. **Firms grid:** 8 cards, all in one grid (crypto perps included, no special tag). Each card has:
   - Logo, or a styled text name if no logo is available
   - "Use code **JEW**" with a copy button
   - **Claim discount →** button that opens the affiliate link in a new tab (`rel="sponsored noopener"`)
   - No taglines or discount percentages for now
5. **How it works:** three steps. Pick a firm → enter code **JEW** at checkout → trade and get funded.
6. **Footer:** affiliate disclosure, futures/crypto trading risk disclaimer, a note that firms are independent and don't endorse us, and the year.

Left out for now: community/about section, FAQ.

## Design

### Palette A: "Midnight Tekhelet"

| Token | Value | Use |
|---|---|---|
| `--bg` | `#050B1F` | Page background |
| `--surface` | `#0D1838` | Cards, panels (with transparency for glass) |
| `--primary` | `#0038B8` | Israeli flag blue: buttons, stripes |
| `--accent` | `#4C8DFF` | Glows, hover states, highlights |
| `--text` | `#FFFFFF` | Headings |
| `--text-muted` | `#B8C4E0` | Body copy |

### Typography

- **Headlines:** Space Grotesk (heavy weights)
- **Code, ticker, numbers, labels:** JetBrains Mono
- **Body:** Inter
- **Hebrew accent:** Frank Ruhl Libre (eyebrow line only)

### Cards: glass + terminal

- Semi-transparent navy with a backdrop blur, thin blue border, slightly rounded corners
- Terminal details: a monospace header row with the firm's ticker-style symbol (e.g. `TPT ▲`) and monospace labels
- **Hover:** the card tilts slightly toward the cursor (3D perspective, a few degrees at most), the border glows `--accent`, and a soft light spot follows the mouse
- The tilt is turned off on touch devices and when `prefers-reduced-motion` is set

### Motion

- Hero Star of David draws itself in, like a chart line
- Continuous ticker scroll (pauses on hover)
- Cards fade up as they enter the viewport
- Copying the code shows a "Copied ✓" toast and a small burst of blue sparks
- All motion respects `prefers-reduced-motion`

## Firms

All use code **JEW**. These are stored as data (`src/data/firms.ts`) so firms can be added or reordered without touching layout code.

| Firm | Affiliate link |
|---|---|
| TakeProfitTrader | https://takeprofittrader.com/?referralCode=JEW |
| Lucid Trading | https://lucidtrading.com/ref/Jew |
| Apex Trader Funding | https://apextraderfunding.com/member/aff/go/jewtrades?c=Jew |
| Tradeify | https://tradeify.co/?ref=Jew |
| FundedNext | https://fundednext.com/?fpr=JEW |
| Traders Launch | https://app.traderslaunch.com/auth/sign-up?ref=69b5f86e5f31ea2fd075b7f9 |
| My Funded Perps | https://myfundedperpetuals.com/@JEW |
| My Funded Futures | https://myfundedfutures.com/challenge?ref=4402 |

**Logos:** to be supplied. They'll live in `public/logos/`, and a card falls back to the styled text name when a firm has no logo.

## Open items

- [ ] Firm logos (user to supply)
- [ ] GitHub repo name, and custom domain or `github.io` address. This decides the Astro `site`/`base` config.
- [ ] Favicon / social share image (can be generated from the Star of David logo)
