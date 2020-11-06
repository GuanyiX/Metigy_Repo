import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';;

class ButtonCluster extends React.Component {

    render() {

        const size = "large";

        return (
            <div className="btn-wrapper flex-container">
                <Button type="primary" size={size}>
                    EXPORT REPORT
                </Button>
                <Button type="primary" icon={<PauseCircleOutlined />} size={size}>
                    STOP
                </Button>
                <Button type="primary" icon={<PlayCircleOutlined />} size={size}>
                    START
                </Button>
            </div>
        )
    }
};

export default ButtonCluster;