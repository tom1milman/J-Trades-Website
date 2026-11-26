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
  /** 'big' = main card in the top grid, 'small' = compact card in the "More firms" list below. */
  size: 'big' | 'small';
}

// Order here = order on the page.
export const firms: Firm[] = [
  { name: 'Take Profit Trader', symbol: 'TPT', url: 'https://takeprofittrader.com/?referralCode=JEW', logo: 'TakeProfitTrader-logo.png', size: 'big' },
  { name: 'Lucid Trading', symbol: 'LUCID', url: 'https://lucidtrading.com/ref/Jew', logo: 'lucid_logo.png', size: 'big' },
  { name: 'Apex Trader Funding', symbol: 'APEX', url: 'https://apextraderfunding.com/member/aff/go/jewtrades?c=Jew', logo: 'apex-logo.png', size: 'big' },
  { name: 'Tradeify', symbol: 'TDFY', url: 'https://tradeify.co/?ref=Jew', logo: 'tradeify-logo.png', size: 'big' },
  { name: 'Funded Next', symbol: 'FNXT', url: 'https://fundednext.com/?fpr=JEW', logo: 'fundednext-logo.png', size: 'big' },
  { name: 'Traders Launch', symbol: 'TL', url: 'https://app.traderslaunch.com/auth/sign-up?ref=69b5f86e5f31ea2fd075b7f9', logo: 'traderslaunch-logo.png', size: 'small' },
  { name: 'My Funded Perps', symbol: 'MFP', url: 'https://myfundedperpetuals.com/@JEW', logo: 'myfundedperps-logo.png', size: 'big' },
  { name: 'My Funded Futures', symbol: 'MFFU', url: 'https://myfundedfutures.com/challenge?ref=4402', logo: 'mffu-logo.png', size: 'big' },
  { name: 'Fund Your Edge', symbol: 'EDGE', url: 'https://fundyouredge.com/?ref=JEW', logo: 'fundyouredge-logo.png', size: 'big' },
  { name: 'Legends Trading', symbol: 'LEGENDS', url: 'https://thelegendstrading.com/?ref=JEW', logo: 'legendstrading-logo.png', size: 'small' },
  { name: 'BluSky Trading', symbol: 'BLUSKY', url: 'https://trader.blusky.pro/sign-up?referral_id=JEW', logo: 'blusky-logo.png', size: 'small' },
  { name: 'E8 Markets', symbol: 'E8', url: 'https://e8markets.com/d/JEW', logo: 'e8markets-logo.png', size: 'small' },
  { name: 'Top One Futures', symbol: 'TOP1', url: 'https://toponefutures.com/?linkId=lp_707970&sourceId=jew&tenantId=toponefutures', logo: 'toponefutures-logo.png', size: 'small' },
  { name: 'Blue Guardian', symbol: 'BG', url: 'https://blueguardian.com/?afmc=Jew', logo: 'blueguardian-logo.png', size: 'small' },
];
