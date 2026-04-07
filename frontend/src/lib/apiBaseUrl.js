const LOCAL_API_BASE_URL = 'http://localhost:8080'

export function resolveApiBaseUrl() {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim()

  if (configuredBaseUrl) {
    return configuredBaseUrl.replace(/\/$/, '')
  }

  // In production, fall back to same-origin so the app does not try to call the viewer's localhost.
  return import.meta.env.DEV ? LOCAL_API_BASE_URL : ''
}
