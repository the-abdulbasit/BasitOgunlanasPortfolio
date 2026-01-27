import PortfolioWebVersion from './imports/PortfolioWebVersion';
import { Analytics } from "@vercel/analytics/web";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <PortfolioWebVersion />
      <Analytics />
    </div>
  );
}
