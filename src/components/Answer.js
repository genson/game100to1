import React, {Component} from 'react';
import openSound from '.././media/open.mp3';
import failSound from '.././media/fail.mp3';
import SoundMaker from '.././SoundMaker';

class Answer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        };
    }

    clickHandler = () => {
        this.setState({
            isOpened: !this.state.isOpened
        });
    };

    static playSound(success) {
        const audio = new Audio();

        audio.src = success ? openSound : failSound;
        audio.autoplay = false;
        audio.loop = false;
        audio.play();
    }

    componentDidUpdate() {
        if (this.state.isOpened) {
            SoundMaker(true);
        }
    }

    render() {
        const {answer, index} = this.props;

        const front = <div className="front">
                         <div className="front_cnt">
                            {index + 1}
                         </div>
                      </div>;

        const back = <div className="back">
                        <div className="back_left">
                            {answer.text}
                        </div>
                        <div className="back_right">
                            {answer.count}
                        </div>
                    </div>;

        let cssClass = "answer ";
        if (this.state.isOpened) {
            cssClass += "flipped";
        }

        return (
            <div onClick={this.clickHandler} className={cssClass}>
                {front}
                {back}
            </div>
        );
    }
}

export default Answer;