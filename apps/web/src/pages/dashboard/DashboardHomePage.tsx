import { WelcomeWidget } from '../../components/dashboard/widgets/WelcomeWidget'
import { ReferralOverviewWidget } from '../../components/dashboard/widgets/ReferralOverviewWidget'
import { LeaderboardMiniWidget } from '../../components/dashboard/widgets/LeaderboardMiniWidget'
import { QuickActionsWidget } from '../../components/dashboard/widgets/QuickActionsWidget'

export function DashboardHomePage() {
  // Force vite HMR cache reload
  return (
    <div className="space-y-6">
      {/* Top Section - Welcome */}
      <WelcomeWidget />

      {/* Top Widgets Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ReferralOverviewWidget />
        <LeaderboardMiniWidget />
        <div className="md:col-span-2 xl:col-span-1">
          <QuickActionsWidget />
        </div>
      </div>

      {/* Main Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Announcements */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-zinc-200 rounded-xl p-6 h-full min-h-[300px] flex flex-col items-center justify-center text-center shadow-sm">
            <div className="h-14 w-14 rounded-full bg-zinc-50 flex items-center justify-center mb-4 border border-zinc-100">
              <span className="text-zinc-400 text-2xl">📢</span>
            </div>
            <h3 className="text-base font-semibold text-zinc-900">No new announcements</h3>
            <p className="text-sm text-zinc-500 mt-2 max-w-sm">
              We'll notify you here when there are new platform updates, competitions, or rewards.
            </p>
          </div>
        </div>

        {/* Right Column - Surveys & Extras */}
        <div className="flex flex-col h-full">
          {/* Upcoming Surveys Placeholder */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white shadow-md flex-1 flex flex-col justify-center min-h-[250px]">
            <h3 className="font-bold text-lg mb-2">Help shape Universe</h3>
            <p className="text-sm text-primary-100 mb-6 leading-relaxed flex-1">
              Complete your first onboarding survey to earn 50 points and help us personalize your
              experience.
            </p>
            <button className="w-full bg-white text-primary-700 font-bold py-3 px-4 rounded-lg text-sm hover:bg-primary-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-700">
              Start Survey
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
