import { resolveApiBaseUrl } from './apiBaseUrl'

const API_BASE_URL = resolveApiBaseUrl()

export function resolveMediaUrl(value) {
  if (!value || typeof value !== 'string') {
    return value
  }

  if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:') || value.startsWith('blob:')) {
    return value
  }

  if (value.startsWith('/')) {
    // Rewrite old /uploads/ paths to /api/uploads/ for backward compatibility
    const normalized = value.startsWith('/uploads/') && !value.startsWith('/api/')
      ? `/api${value}`
      : value
    return `${API_BASE_URL}${normalized}`
  }

  return value
}
