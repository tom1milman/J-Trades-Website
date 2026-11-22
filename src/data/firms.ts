export const CODE = 'JEW';

export interface Firm {
  /** Display name, also used as the text fallback when there is no logo. */
  name: string;
  /** Ticker-style symbol shown in the card header. */
  symbol: string;
  /** Affiliate link. */
  url: string;
  /**
   * Logo file name inside `public/logos/` (e.g. "apex.svg").
   * If omitted or the file doesn't exist, the card shows the styled name.
   */
  logo?: string;
}

// Order here = order on the page.
export const firms: Firm[] = [
  { name: 'Take Profit Trader', symbol: 'TPT', url: 'https://takeprofittrader.com/?referralCode=JEW', logo: 'TakeProfitTrader-logo.png' },
  { name: 'Lucid Trading', symbol: 'LUCID', url: 'https://lucidtrading.com/ref/Jew', logo: 'lucid_logo.png' },
  { name: 'Apex Trader Funding', symbol: 'APEX', url: 'https://apextraderfunding.com/member/aff/go/jewtrades?c=Jew', logo: 'apex-logo.png' },
  { name: 'Tradeify', symbol: 'TDFY', url: 'https://tradeify.co/?ref=Jew', logo: 'tradeify-logo.png' },
  { name: 'Funded Next', symbol: 'FNXT', url: 'https://fundednext.com/?fpr=JEW', logo: 'fundednext-logo.png' },
  { name: 'Traders Launch', symbol: 'TL', url: 'https://app.traderslaunch.com/auth/sign-up?ref=69b5f86e5f31ea2fd075b7f9', logo: 'traderslaunch-logo.png' },
  { name: 'My Funded Perps', symbol: 'MFP', url: 'https://myfundedperpetuals.com/@JEW', logo: 'myfundedperps-logo.png' },
  { name: 'My Funded Futures', symbol: 'MFFU', url: 'https://myfundedfutures.com/challenge?ref=4402', logo: 'mffu-logo.png' },
];
