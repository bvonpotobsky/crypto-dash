type CurrencyType = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: RoiType;
  last_updated: string;
};

type CurrencyByIdType = {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: Array<string>;
  public_notice: string;
  additional_notices: Array<string>;
  localization: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  links: LinksType;
  image: ImageType;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: MarketDataType;
  community_data: CommunityDataType;
  developer_data: DeveloperDataType;
  public_interest_stats: PublicInterestStatsType;
  status_updates: Array<string>;
  last_updated: string;
  tickers: Array<TickersType>;
};

type ImageType = {
  thumb: string;
  small: string;
  large: string;
};

type RoiType = {
  times: number;
  currency: string;
  percentage: number;
};

type MarketDataType = {
  current_price: {
    [key: string]: number;
  };
  roi: RoiType;
  ath: {
    [key: string]: number;
  };
  ath_change_percentage: {
    [key: string]: number;
  };
  ath_date: {
    [key: string]: string;
  };
  atl: {
    [key: string]: number;
  };
  atl_change_percentage: {
    [key: string]: number;
  };
  atl_date: {
    [key: string]: string;
  };
  market_cap: {
    [key: string]: number;
  };
  total_volume: {
    [key: string]: number;
  };
  high_24h: {
    [key: string]: number;
  };
  low_24h: {
    [key: string]: number;
  };
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_1h_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_24h_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_7d_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_14d_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_30d_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_60d_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_200d_in_currency: {
    [key: string]: number;
  };
  price_change_percentage_1y_in_currency: {
    [key: string]: number;
  };
  market_cap_change_24h_in_currency: {
    [key: string]: number;
  };
  market_cap_change_percentage_24h_in_currency: {
    [key: string]: number;
  };
  total_supply: string;
  max_supply: string;
  circulating_supply: number;
  last_updated: string;
};

type CommunityDataType = {
  facebook_likes: number;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  telegram_channel_user_count: number;
};

type DeveloperDataType = {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: {
    additions: number;
    deletions: number;
  };
  commit_count_4_weeks: number;
  last_4_weeks_commit_activity_series: Array<number>;
};

type PublicInterestStatsType = {
  alexa_rank: number;
  bing_matches: number;
};

type TickersType = {
  base: string;
  target: string;
  market: {
    name: string;
    identifier: string;
    has_trading_incentive: boolean;
  };
  last: number;
  volume: number;
  converted_last: {
    [key: string]: number;
  };
  converted_volume: {
    [key: string]: number;
  };
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string;
  token_info_url: string;
  coin_id: string;
  target_coin_id: string;
};
