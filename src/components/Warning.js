import React, {Component} from 'react';
import "./Warning.css";

class Warning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closing: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.visible && !nextProps.visible) {
            // visible props가 true에서 false가 된다.
            this.setState({
                closing: true
            });
            //1초 뒤
            setTimeout(
                () => {
                    this.setState({
                        closing: false
                    });
                }, 1000
            );
        }
    }

    render() {
        const { message, visible } = this.props;
        const { closing } = this.state;

        if(!visible && !closing) return null;
        return (
            <div className="Warning-wrapper">
                <div className={`Warning ${closing?'bounceOut':'bounceIn'} animated`}>
                    {message}
                </div>
            </div>
        );
    }
}

export default Warning;