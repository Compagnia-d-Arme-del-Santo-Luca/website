declare module '@analytics/google-analytics' {
  import type { AnalyticsPlugin } from 'analytics'

  const googleAnalytics: (options: {
    measurementIds: string[]
    enabled?: boolean
  }) => AnalyticsPlugin

  export default googleAnalytics
}
