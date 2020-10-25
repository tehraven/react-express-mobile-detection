import UAParser from 'ua-parser-js'

const parseUserAgent = (userAgent) => {
  let testUserAgent = userAgent
  if (
    !testUserAgent &&
    window &&
    window.navigator &&
    window.navigator.userAgent
  ) {
    testUserAgent = window.navigator.userAgent
  }
  if (!testUserAgent) return null
  try {
    return UAParser.setUA(userAgent).getDevice()
  } catch (e) {
    return null
  }
}

/**
 * Helper function that takes a userAgent and returns whether it's a Mobile Device
 * @param {String} userAgent
 */
export const isUserAgentMobile = (userAgent) => {
  try {
    const device = parseUserAgent(userAgent)
    return device.type === 'mobile'
  } catch (e) {
    return null
  }
}

/**
 * Helper function that takes a userAgent and returns whether it's a Tablet Device
 * @param {String} userAgent
 */
export const isUserAgentTablet = (userAgent) => {
  try {
    const device = parseUserAgent(userAgent)
    return device.type === 'mobile'
  } catch (e) {
    return null
  }
}

export default isUserAgentMobile
