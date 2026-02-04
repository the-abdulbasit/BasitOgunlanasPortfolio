import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import PortfolioWebVersion from './imports/PortfolioWebVersion';
import ScrollIndicator from "./components/ScrollIndicator";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <PortfolioWebVersion />
      <Analytics />
      <SpeedInsights />
      <ScrollIndicator />
    </div>
  );
}
