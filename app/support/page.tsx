import SupportCampaignClient from "../Components/SupportCampaignClient";


const CURRENCY_TO_USD: Record<string, number> = {
  '$': 1,
  '€': 1.08,
  '£': 1.26,
  'դր.': 0.0026,
};

function toUSD(amount: number, symbol: string): number {
  return amount * (CURRENCY_TO_USD[symbol] || 1);
}

async function fetchAllDonors(): Promise<any[]> {
  const baseUrl = 'https://donation.whydonate.dev/donation/orders/fundraising/local?slug=help-helen-study-fashion-in-europe&language_code=en';
  const allDonors: any[] = [];

  for (let page = 1; page <= 5; page++) {
    const url = page === 1 ? baseUrl : `${baseUrl}&page=${page}`;
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) break;
    const json = await res.json();
    const donors = json?.data?.result?.result ?? json?.data?.result ?? [];
    if (!Array.isArray(donors) || donors.length === 0) break;
    allDonors.push(...donors);
  }

  return allDonors;
}

async function getCampaignData() {
  try {
    const [campaignRes, allDonors] = await Promise.all([
      fetch('https://fundraiser.whydonate.dev/fundraiser/get?slug=help-helen-study-fashion-in-europe&language=en', { next: { revalidate: 1800 } }),
      fetchAllDonors()
    ]);

    if (!campaignRes.ok) throw new Error('Failed to fetch campaign data');

    const campaignJson = await campaignRes.json();
    const fundraiser = campaignJson?.data?.result;

    const raisedNum = fundraiser?.donation?.amount || 708;
    const targetNum = fundraiser?.amount_target || 30000;

    const formattedDonors = allDonors.slice(0, 10).map((donor: any) => {
      const amount = donor.amount ? Math.round(donor.amount) : '';
      const symbol = donor.symbol || '€';
      const name = donor.name || 'ANONYMOUS';
      return `[ +${symbol}${amount} FROM ${name} ]`.toUpperCase();
    });

    const finalDonors = formattedDonors.length > 0
      ? formattedDonors
      : ["[ +€50 FROM MILAN ]", "[ +€100 FROM YEREVAN ]", "[ +€20 FROM LONDON ]", "[ +€200 ANONYMOUS ]"];

    const topDonors = [...allDonors]
      .map((d: any) => ({
        name: d.name || 'Anonymous',
        amount: parseFloat(d.amount) || 0,
        symbol: d.symbol || '$',
        message: d.message || '',
        usdValue: toUSD(parseFloat(d.amount) || 0, d.symbol || '$'),
      }))
      .sort((a, b) => b.usdValue - a.usdValue)
      .slice(0, 10)
      .map(({ name, amount, symbol, message }) => ({
        name,
        amount: Math.round(amount),
        symbol,
        message,
      }));

    return {
      raised: `$${raisedNum.toLocaleString()}`,
      target: `$${targetNum.toLocaleString()}`,
      percentage: Math.min((raisedNum / targetNum) * 100, 100),
      recentDonors: finalDonors,
      topDonors,
    };
  } catch (error) {
    console.error("API Fetch error:", error);
    return {
      raised: '$708',
      target: '$30,000',
      percentage: 2.3,
      recentDonors: ["[ +€50 FROM MILAN ]", "[ +€100 FROM YEREVAN ]", "[ +€20 FROM LONDON ]", "[ +€200 ANONYMOUS ]"],
      topDonors: [],
    };
  }
}

export default async function SupportCampaign() {
  const donationData = await getCampaignData();
  return <SupportCampaignClient liveData={donationData} />;
}