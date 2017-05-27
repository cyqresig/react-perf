/**
 * @since 2017-04-04 18:36
 * @author chenyiqin
 */

import renderPage from '../pages/index'
import Perf from 'react-addons-perf'
window.Perf = Perf

renderPage()

if (module.hot) {
    module.hot.accept('../pages/index', () => {
        const renderNewPage = require('../pages/index').default

        renderNewPage()
    })
}
