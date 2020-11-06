import React from 'react';
import { Checkbox } from 'antd';
import Calculator from '../Calculator';
import Controller from './components/Controller';
import ButtonCluster from './components/ButtonCluster';

import store from '../../store';



class Settings extends React.Component {
    constructor() {
        super()

        this.state = store.getState().settingsReducer

        store.subscribe(this.handleStoreChange);
    }

    handleIncognitoClick = () => {
        const action = {
            type: "TICK_INCOGNITO"
        }

        store.dispatch(action)
    }

    handleChromeClick = () => {
        const action = {
            type: "TICK_CHROME"
        }

        store.dispatch(action)
    }

    handleFirefoxClick = () => {
        const action = {
            type: "TICK_FIREFOX"
        }

        store.dispatch(action)
    }

    handleExplorerClick = () => {
        const action = {
            type: "TICK_EXPLORER"
        }

        store.dispatch(action)
    }

    handleSafariClick = () => {
        const action = {
            type: "TICK_SAFARI"
        }

        store.dispatch(action)
    }

    handleOperaClick = () => {
        const action = {
            type: "TICK_OPERA"
        }

        store.dispatch(action)
    }

    handleVisitedClick = () => {
        const action = {
            type: "TICK_VISITED_PAGE"
        }

        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState().settingsReducer);
    }


    render() {

        return (
            <div className="settings-wrapper flex-item">
                <p className="settings-header">Settings</p>
                <div className="settings-body">
                    <div className="browser-selection flex-container">
                        <div className="browser-wrapper">
                            <Checkbox checked={this.state.chrome_checked} onClick={this.handleChromeClick}>{this.state.plainOptions[0]}</Checkbox>
                            <Checkbox checked={this.state.firefox_checked} onClick={this.handleFirefoxClick}>{this.state.plainOptions[1]}</Checkbox>
                            <Checkbox checked={this.state.explorer_checked} onClick={this.handleExplorerClick}>{this.state.plainOptions[2]}</Checkbox>
                            <Checkbox checked={this.state.safari_checked} onClick={this.handleSafariClick}>{this.state.plainOptions[3]}</Checkbox>
                            <Checkbox checked={this.state.opera_checked} onClick={this.handleOperaClick}>{this.state.plainOptions[4]}</Checkbox>
                        </div>
                        <div className="incognito-wrapper">
                            <Checkbox checked={this.state.incognito_checked} onClick={this.handleIncognitoClick}>Incognito</Checkbox>
                        </div>
                    </div>
                    <div className="settings-info">
                        <div className="wait-time">
                            <p>Wait</p>
                            <Calculator initialValue={40} />
                            <Calculator initialValue={55} />
                            <p>seconds on the targeted website </p>
                        </div>
                        <Checkbox checked={this.state.visited_page_checked} onClick={this.handleVisitedClick}>Visit the Page within the Site</Checkbox>
                        <div className="pages-visit">
                            <Calculator initialValue={1} />
                            <p>pages</p>
                            <Calculator initialValue={30} />
                            <Calculator initialValue={50} />
                            <p>visit from to second</p>
                        </div>
                        <div className="wait-after-ope">
                            <p>After the operation is completed</p>
                            <Calculator initialValue={5} />
                            <Calculator initialValue={10} />
                            <p>seconds wait</p>
                        </div>
                        <div className="not-found-wait">
                            <p>Target site</p>
                            <Calculator initialValue={10} />
                            <p>If not found times</p>
                            <Calculator initialValue={20} />
                            <p>minutes left</p>
                        </div>
                        <div className="auto-reset">
                            <Calculator initialValue={1} />
                            <p>automatic reset after operation</p>
                        </div>
                    </div>
                </div>
                <Controller />
                <ButtonCluster />
            </div>
        )
    }
}

export default Settings;