import log from '../../node_modules/log-util';

/**
 * Pretty logger
 * Returns beautified message
 * @param text
 */
function message (text) {
    const normalText = text.toLowerCase();

    if (~normalText.indexOf('warning')) {
        log.warn(text)
    } else if (~normalText.indexOf('error')) {
        log.error(text);
    } else {
        log.debug(text);
    }
}

export default message;