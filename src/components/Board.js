import React, {Component} from 'react';
import Answer from './Answer';
import SoundMaker from '../SoundMaker';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionIndex: 0,
            questionsList: props.questions
        };
    }

    prev = () => {
        let currentIndex = this.state.questionIndex;
        if (currentIndex) {
            this.setState({
                questionIndex: currentIndex - 1
            })
        }
    };

    next = () => {
        let currentIndex = this.state.questionIndex;
        if (currentIndex < this.state.questionsList.length - 1) {
            this.setState({
                questionIndex: currentIndex + 1
            })
        }
    };

    wrong = () => {
        SoundMaker();
    };

    createUniqueKey = (id) => {
        return this.state.questionIndex + id;
    };

    render() {

        const rowsWithAnswers = this.state.questionsList[this.state.questionIndex].answers.map((item, index )=>
            <div className="answer-row" key={this.createUniqueKey(item.id)}>
                <Answer answer={item} index={index} />
            </div>
        );

        return (
            <div className="board">
                <div className="board_question">
                    {this.props.questions[this.state.questionIndex].title}
                </div>
                <div className="board_list">
                    {rowsWithAnswers}
                </div>

                <div className="board_actions">
                    <div className="button __prev" onClick={this.prev}>Предыдущий вопрос</div>
                    <div className="button __next" onClick={this.next}>Следующий</div>
                    <div className="button __wrong" onClick={this.wrong}>Неправильный ответ</div>
                </div>
            </div>
        )
    }
}

export default Board;