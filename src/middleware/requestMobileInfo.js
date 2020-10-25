import isRequestMobile from '../utils/isRequestMobile'

/**
 * Express Middleware which fetches mobile information and mutates the Request Object.
 * Request object after this point in the express chain will have a `mobile` object.
 *
 * Note: Request.mobile.isTouch will mimic Request.mobile.isMobile at this level because
 * we do not have access to the browser DOM to make a more determinate answer. You should
 * run the `isTouchDevice` util exports in this package on the client to be more informed.
 *
 * @param {Object} req Express Request Object
 * @param {Object} res Express Response Object
 * @param {Function} next Express Next Handler
 */
const requestMobileInfo = (req, res, next) => {
  const isMobile = isRequestMobile(req)
  req.mobile = {
    isMobile: isMobile,
    isTouch: isMobile
  }
  next()
}

export default requestMobileInfo
