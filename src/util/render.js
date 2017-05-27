/**
 * @since 2017-04-04 18:38
 * @author chenyiqin
 */

import React from 'react'
import { render, } from 'react-dom'
import { Provider, } from 'react-redux'
import { AppContainer, } from 'react-hot-loader'
import BaseContainer from '../container/common/BaseContainer'
import store from './store'
const SELECTOR = 'main'

export default (EntryComponent) => {
    return render(
        <AppContainer>
            <Provider store={store}>
                <BaseContainer>
                    <EntryComponent/>
                </BaseContainer>
            </Provider>
        </AppContainer>,
        document.getElementById(SELECTOR)
    )
}

