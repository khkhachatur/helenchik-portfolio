import SupportCampaignClient from "../Components/SupportCampaignClient";


async function getCampaignData() {
  try {
    const [campaignRes, donorRes] = await Promise.all([
      fetch('https://fundraiser.whydonate.dev/fundraiser/get?slug=help-helen-study-fashion-in-europe&language=en', { next: { revalidate: 1800 } }),
      fetch('https://donation.whydonate.dev/donation/orders/fundraising/local/short?slug=help-helen-study-fashion-in-europe&language_code=en', { next: { revalidate: 1800 } })
    ]);
    
    if (!campaignRes.ok || !donorRes.ok) throw new Error('Failed to fetch from APIs');
    
    const campaignJson = await campaignRes.json();
    const donorJson = await donorRes.json();
    
    const fundraiser = campaignJson?.data?.result;
    
    let rawDonors = [];
    if (Array.isArray(donorJson?.data?.result)) {
        rawDonors = donorJson.data.result;
    } else if (Array.isArray(donorJson?.data)) {
        rawDonors = donorJson.data;
    }

    const raisedNum = fundraiser?.donation?.amount || 708; 
    const targetNum = fundraiser?.amount_target || 30000;

    const formattedDonors = rawDonors.slice(0, 10).map((donor: any) => {
      const amount = donor.amount ? Math.round(donor.amount) : '';
      const name = donor.name || 'ANONYMOUS';
      return `[ +€${amount} FROM ${name} ]`.toUpperCase();
    });

    const finalDonors = formattedDonors.length > 0 
      ? formattedDonors 
      : ["[ +€50 FROM MILAN ]", "[ +€100 FROM YEREVAN ]", "[ +€20 FROM LONDON ]", "[ +€200 ANONYMOUS ]"];

    return {
      raised: `$${raisedNum.toLocaleString()}`,
      target: `$${targetNum.toLocaleString()}`,
      percentage: Math.min((raisedNum / targetNum) * 100, 100),
      recentDonors: finalDonors
    };
  } catch (error) {
    console.error("API Fetch error:", error);
    return { 
      raised: '$708', 
      target: '$30,000', 
      percentage: 2.3, 
      recentDonors: ["[ +€50 FROM MILAN ]", "[ +€100 FROM YEREVAN ]", "[ +€20 FROM LONDON ]", "[ +€200 ANONYMOUS ]"] 
    }; 
  }
}

export default async function SupportCampaign() {
  const donationData = await getCampaignData();
  return <SupportCampaignClient liveData={donationData} />;
}