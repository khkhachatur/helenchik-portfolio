import * as cheerio from 'cheerio';
import SupportCampaignClient from '../Components/SupportCampaignClient';


async function getDonationData() {
  try {
    const res = await fetch('https://whydonate.com/fundraising/help-helen-study-fashion-in-europe', {
      next: { revalidate: 1800 }, 
    });
    
    if (!res.ok) throw new Error('Failed to fetch');
    
    const html = await res.text();
    const $ = cheerio.load(html);

    const raised = $('.inline-block.text-3xl.font-bold').first().text().trim() || '€708';
    const target = $('.text-sm.text-gray-500').first().text().replace('of', '').trim() || '€30,000';

    const raisedNum = parseInt(raised.replace(/[^0-9]/g, '')) || 708;
    const targetNum = parseInt(target.replace(/[^0-9]/g, '')) || 30000;

    return {
      raised,
      target,
      percentage: Math.min((raisedNum / targetNum) * 100, 100)
    };
  } catch (error) {
    console.error("Scraping error:", error);
    return { raised: '€708', target: '€30,000', percentage: 2.3 }; 
  }
}

export default async function SupportCampaign() {
  const donationData = await getDonationData();

  return <SupportCampaignClient liveData={donationData} />;
}