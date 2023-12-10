  export interface BitcoinPrice {
    time: {
      updated: string;
      updatedISO: string;
      updateduk: string;
    };
    disclaimer: string;
    chartName: string;
    bpi: {
      [currency: string]: {
        code: string;
        symbol: string;
        rate: string;
        description: string;
        rate_float: number;
      };
    };
  }