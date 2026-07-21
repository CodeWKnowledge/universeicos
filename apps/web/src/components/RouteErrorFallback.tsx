import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { ErrorFallbackUI } from '@universe/ui'

/**
 * Thin wrapper that reads the React Router error and passes it to the
 * generic ErrorFallbackUI component for rendering.
 */
export function RouteErrorFallback() {
  const error = useRouteError()

  let title = 'Something went wrong'
  let description =
    'We encountered an unexpected error. Please try again or return to the homepage.'
  let is404 = false

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      is404 = true
      title = 'Page not found'
      description = "The page you are looking for doesn't exist or has been moved."
    } else {
      title = `${error.status} ${error.statusText}`
      description = error.data?.message || description
    }
  } else if (error instanceof Error) {
    if (
      error.message.includes('Missing or invalid required environment variables') ||
      error.message.includes('Missing Supabase environment variables')
    ) {
      title = 'Configuration Error'
      description =
        'The application is missing required environment variables. Please check your hosting configuration.'
    } else {
      description = error.message || description
    }
  } else if (typeof error === 'string') {
    description = error
  }

  return <ErrorFallbackUI title={title} description={description} is404={is404} />
}
