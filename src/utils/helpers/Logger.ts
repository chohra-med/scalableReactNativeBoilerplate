/* eslint-disable no-console */



/**
 * recordError will save error + stack trace
 * only if errors appears.
 */
export function recordError(error: Error | string) {
  if (__DEV__ ) {
    console.error(error);
    return;
  }
  /* In case of Production, we usually record error in this line, depends on the tool used
  in case of Firebase Crashlytics: crashlytics().recordError(new Error(error));
  */
 
}

/**
 * track the user behaviors
 * before than the crash.
 */
export function trace(traceMessage: string) {
 
  if (__DEV__) {
    console.log(traceMessage);
    return;
  }
   /* In case of Production, we usually log the event here
  in case of Firebase Crashlytics: crashlytics().log(traceMessage);
  */

}

export function logEvent(action: string, payload?: object) {

  if (__DEV__) {
    console.log(action, payload || '');
    return;
  }
  /* In case of Production, we usually log the event here
  in case of Firebase Crashlytics: crashlytics().log(action);
  */
}

export async function logAnalyticsEvents(eventName: string, payload?: object) {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
    /* In case of Production, we usually log the event here
  in case of Firebase Crashlytics: await analytics().logEvent(eventName, payload);
  */


}

export default {
  recordError,
  logEvent,
  trace,
  logAnalyticsEvents,
};
