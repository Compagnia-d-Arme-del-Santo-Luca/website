// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest'

/**
 * Reset mocks and cleanup after each test
 */
import { cleanup } from '@testing-library/react'
import { vi, afterEach } from 'vitest'
afterEach(() => {
  vi.resetAllMocks()
  cleanup()
})

/**
 * Mocks the window.scrollTo method (called on page change)
 */
vi.stubGlobal('scrollTo', vi.fn())

/**
 * Mocks the ResizeObserver API (used by ParallaxProvider)
 */
vi.stubGlobal(
  'ResizeObserver',
  vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))
)
