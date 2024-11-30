export function getElement(
  driver,
  androidSelector,
  iosSelector = androidSelector
) {
  return driver.isAndroid ? $(androidSelector) : $(iosSelector);
}
