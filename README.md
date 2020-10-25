# react-express-mobile-detection
React &amp; Express Tools for Mobile Detection

These tools are just thin wrappers around existing packages and functions.

---

## Utilities

### isRequestMobile
A simple utility that takes an Express Request object and returns a Boolean value -- Whether or not the Request User Agent is a mobile device.

### isTouchDevice
A simple utility that takes an Express Request object and returns a Boolean value -- Whether or not the Request User Agent is a touch device. Please note, this doesn't mean mobile -- Desktops and laptops can be touch devices.

### isUserAgentMobile
The function used by `isRequestMobile`, exported by itself.

---

## Express Middelware

### requestMobileInfo
An express middleware which modifies the Request object to contain 

---

## Components

### MobileInfoHOC
A HOC Component which passes `mobile.isMobile` and `mobile.isTouch` onto it's child.