import React, { useEffect, useMemo, useState } from 'react'

import {
  isUserAgentMobile,
  isUserAgentTablet
} from '../utils/isUserAgentMobile'
import isTouchDevice from '../utils/isTouchDevice'

/**
 * A HOC which passes on `mobile` to it's Child.
 * @optional @param {(Boolean|null)} defaultIsMobile The default value for mobile.isMobile
 * @optional @param {(Boolean|null)} defaultIsTablet The default value for mobile.isTablet
 * @optional @param {(Boolean|null)} defaultIsTouch The default value for mobile.isTouch
 */
const MobileInfoHOC = ({
  children,
  defaultIsMobile = isUserAgentMobile(),
  defaultIsTablet = isUserAgentTablet(),
  defaultIsTouch = isTouchDevice(),
  ...otherProps
}) => {
  const [mobileInfo, setMobileInfo] = useState({
    isMobile: defaultIsMobile,
    isTablet: defaultIsTablet,
    isTouch: defaultIsTouch
  })

  useEffect(() => {
    setMobileInfo({
      isMobile: isUserAgentMobile(),
      isTablet: isUserAgentTablet(),
      isTouch: isTouchDevice()
    })
  }, [])

  return useMemo(() => {
    return React.cloneElement(children, { ...otherProps, mobile: mobileInfo })
  }, [mobileInfo])
}

export default MobileInfoHOC
