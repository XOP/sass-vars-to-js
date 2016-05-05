import log from '../node_modules/log-util';

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
