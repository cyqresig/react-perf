/**
 * @since 2017-05-05 11:57
 * @author chenyiqin
 */

/* eslint-env browser */
global.document = require('jsdom').jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator
