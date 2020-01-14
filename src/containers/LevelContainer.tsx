import * as React from "react";
import {MouseEventHandler} from "react";

type LevelProps = {
    onClick?: (e:any) => void;
}

type QuestionCardProps = {
    title: string,
    contents: string,
    onClick?: (e:any) => void;
    level: string,
}

const LevelContainer = ({onClick}: LevelProps) => {
    return (
        <div className="contents">
            <QuestionCard
                title={'기초문제'}
                contents={`기초입니다!. \n 문제를 보고 맞는 답을 골라주세요.`}
                level={LEVEL.INTERMEDIATE}
                onClick={onClick}
            />

            <QuestionCard
                title={'중급문제'}
                contents={'조금 어려운 중급문제입니다. \n 문제를 보고 맞는 답을 골라주세요.'}
                level={LEVEL.ADVANCED}
                onClick={onClick}
            />
        </div>
    );
};

const QuestionCard = ({title, contents, onClick, level}: QuestionCardProps) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="main_text">
                <p>{contents.split('\n').map((content, index) => {
                    return (<span key={index}>{content}<br/></span>)
                })}
                </p>
            </div>
            <button className="btn" onClick={onClick} data-level={level}>시작</button>
        </div>
    );
};

const LEVEL = {
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced',
};

export default LevelContainer;
