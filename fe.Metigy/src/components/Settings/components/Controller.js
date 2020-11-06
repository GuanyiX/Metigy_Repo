import React, { Fragment } from 'react';
import { Checkbox } from 'antd';

import store from '../../../store';

class Controller extends React.Component {

    constructor() {
        super()

        this.state = store.getState().settingsReducer

        store.subscribe(this.handleStoreChange);
    
    }

    handleStoreChange = () => {
        this.setState(store.getState().settingsReducer);
    }

    handleDRClick = () => {
        const action = {
            type: "TICK_DEVICE_RESET"
        }

        store.dispatch(action)
    }

    handleVRClick = () => {
        const action = {
            type: "TICK_VINN_RESET"
        }

        store.dispatch(action)
    }

    handlePRClick = () => {
        const action = {
            type: "TICK_PHONE_RESET"
        }

        store.dispatch(action)
    }

    handleMDClick = () => {
        const action = {
            type: "TICK_MOBILE_DATA"
        }

        store.dispatch(action)
    }

    handleFMClick = () => {
        const action = {
            type: "TICK_FLY_MODE"
        }

        store.dispatch(action)
    }

    handlerCookiesClick = () => {
        const action = {
            type: "TICK_REMOVE_COOKIES"
        }

        store.dispatch(action)
    }

    handlecResolutionClick = () => {
        const action = {
            type: "TICK_CHANGE_RESOLUTIONS"
        }

        store.dispatch(action)
    }

    handlemTracksClick = () => {
        const action = {
            type: "TICK_MOUSE_TRACKS"
        }

        store.dispatch(action)
    }

    handledSavingModeClick = () => {
        const action = {
            type: "TICK_DATA_SAVING"
        }

        store.dispatch(action)
    }

    handlerGenerateClick = () => {
        const action = {
            type: "TICK_RANDOM_GENERATE"
        }

        store.dispatch(action)
    }

    handleaProtectionClick = () => {
        const action = {
            type: "TICK_ANALYTIC_PROTECTION"
        }

        store.dispatch(action)
    }

    handlerHistoryClick = () => {
        const action = {
            type: "TICK_REMOVE_HISTORY"
        }

        store.dispatch(action)
    }


    render() {
        return (
            <Fragment>
                <div className="block-part"></div>
                <div className="controller-wrapper">
                    <div className="controller-selection flex-container">
                        <div className="controller-info-wrapper">
                            <Checkbox checked={this.state.device_reset_checked} onClick={this.handleDRClick}>Device Reset</Checkbox>
                            <Checkbox checked={this.state.vinn_reset_checked} onClick={this.handleVRClick}>Vinn Reset</Checkbox>
                            <Checkbox checked={this.state.phone_reset_checked} onClick={this.handlePRClick}>Phone Reset</Checkbox>
                            <Checkbox checked={this.state.mobile_data_checked} onClick={this.handleMDClick}>Mobile Data</Checkbox>
                            <Checkbox checked={this.state.fly_mode_checked} onClick={this.handleFMClick}>Fly Mode</Checkbox>
                        </div>
                    </div>
                    <div className="other-settings">
                        <div className="oSettings-info-wrapper">
                            <Checkbox checked={this.state.remove_cookies_checked} onClick={this.handlerCookiesClick}>Remove Cookies</Checkbox>
                            <Checkbox checked={this.state.change_resolutions_checked} onClick={this.handlecResolutionClick}>Change Resolution</Checkbox>
                            <Checkbox checked={this.state.mouse_tracks_checked} onClick={this.handlemTracksClick}>Mouse Tracks</Checkbox>
                            <Checkbox checked={this.state.data_saving_checked} onClick={this.handledSavingModeClick}>Data Saving Mode</Checkbox>
                            <Checkbox checked={this.state.random_generate_checked} onClick={this.handlerGenerateClick}>Random Generate</Checkbox>
                            <Checkbox checked={this.state.analytic_protection_checked} onClick={this.handleaProtectionClick}>Analytic Protection</Checkbox>
                            <Checkbox checked={this.state.remove_history_checked} onClick={this.handlerHistoryClick}>Remove History</Checkbox>
                        </div>
                    </div>
                </div>
                <div className="block-part"></div>
            </Fragment>

        )
    }
}

export default Controller;