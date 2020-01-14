import * as React from 'react' ;
import {useState, useEffect, useRef, ReactChildren, ReactNode} from 'react' ;
import questions from "../data/questions";
import QuestionContainer from "./QuestionContainer";
import Store from "../store/Store";
import LevelContainer from "./LevelContainer";
import QuestionListContainer from "./QuestionListContainer";

const MAIN = 0;
const QUESTION_LIST = 1;
const QUESTION = 2;
const TITLE = '자바스크립트 퀴즈.';
const LOCAL_STORAGE_KEY = 'quizScores';

const MainContainer = () => {
    const [index, setIndex] = useState(MAIN);
    const [level, setLevel] = useState('');
    const [order, setOrder] = useState(0);
    const [title, setTitle] = useState(TITLE);
    const [scores, setScores] = useState([]);
    const scoresLocalStorage = useRef(new Store(LOCAL_STORAGE_KEY));

    const getScore = (name: string) => {
        return scoresLocalStorage.current.getLocalStorage(name);
    };

    const setScore = (name: string, item: {}) => {
        scoresLocalStorage.current.setLocalStorage(name, item);
    };

    useEffect(() => {
        const scores = getScore(LOCAL_STORAGE_KEY);

        if (level && !scores[level]) {
            scores[level] = [];
            setScore(LOCAL_STORAGE_KEY, scores);
        }

        setScores(scores[level]);
    }, [level]);

    const updateScore = (score: number) => {
        const scores = getScore(LOCAL_STORAGE_KEY);
        if (!scores[level] || order === null) {
            scores[level] = [];
        }

        scores[level][order] = score;
        setScore(LOCAL_STORAGE_KEY, scores);
        setScores(scores[level]);
    };

    const onClickStart = (e: any) => {
        const {dataset: {level}} = e.target;
        setIndex(QUESTION_LIST);
        setLevel(level);
    };

    const onClickLevelTestStart = (e: any) => {
        const {dataset: {order}} = e.target;
        const name: string = questions[level][order];
        setIndex(QUESTION);
        setOrder(order);
        setTitle(name);
    };

    const onClickReset = () => {
        setIndex(QUESTION_LIST);
        setLevel(level);
        setTitle(TITLE);
        setOrder(0);
    };

    const onClickMain = () => {
        setIndex(MAIN);
    };

    const onClickScoreReset = () => {
        updateScore(0);
    };

    return (
        <Container>
            <Header title={title} index={index} onClickScoreReset={onClickScoreReset}/>
            <Contents index={index}>
                <LevelContainer onClick={onClickStart}/>
                <QuestionListContainer questionList={questions[level]} onClick={onClickLevelTestStart}
                                       quizScores={scores} onClickMain={onClickMain}/>
                <QuestionContainer question={questions[level] && questions[level][order]}
                                   onClickReset={onClickReset} updateScore={updateScore}/>
            </Contents>
        </Container>
    );
};

const Container = ({children}: { children: any }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};


const Contents = (props: any) => {
    const {index, children} = props;

    return (
        <>
            {React.Children.map(children, (child, childIndex) => {
                if (index === childIndex) {
                    return child;
                }
            })}
        </>
    );
};

type HeaderProps = {
    title: any,
    index: any,
    onClickScoreReset: any
}


const Header = ({title, index, onClickScoreReset}: HeaderProps) => {
    return (
        <div className="header">
            <h2 className="title">
                {title}
            </h2>
            {index === QUESTION_LIST && (<button className="btn btn-reset" onClick={onClickScoreReset}>점수 초기화</button>)}
        </div>
    );
};

export default MainContainer;
