import SupportCampaignClient from "../Components/SupportCampaignClient";


async function getDonationData() {
  try {
    const res = await fetch('https://fundraiser.whydonate.dev/fundraiser/get?slug=help-helen-study-fashion-in-europe&language=en', {
      next: { revalidate: 1800 }, 
    });
    
    if (!res.ok) throw new Error('Failed to fetch from API');
    
    const json = await res.json();
    
    const fundraiser = json?.data?.result;
    
    const raisedNum = fundraiser?.donation?.amount || 708; 
    const targetNum = fundraiser?.amount_target || 30000;

    return {
      raised: `$${raisedNum.toLocaleString()}`,
      target: `$${targetNum.toLocaleString()}`,
      percentage: Math.min((raisedNum / targetNum) * 100, 100)
    };
  } catch (error) {
    console.error("API Fetch error:", error);
    return { raised: '$708', target: '$30,000', percentage: 2.3 }; 
  }
}

export default async function SupportCampaign() {
  const donationData = await getDonationData();

  return <SupportCampaignClient liveData={donationData} />;
}