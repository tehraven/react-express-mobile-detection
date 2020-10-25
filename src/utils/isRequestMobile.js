import isUserAgentMobile from './isUserAgentMobile'

/**
 * Utility function to detect mobile from the Request object provided.
 * This function does not mutate the Request Object. See the middleware for that functionality.
 * @param {Object} req Express Request Object
 * @returns {(Boolean|null)} Whether the Request is Mobile. Null is unsure.
 */
const isRequestMobile = (req) => {
  if (!req) return null
  try {
    return isUserAgentMobile(req.get('User-Agent'))
  } catch (e) {
    return null
  }
}
