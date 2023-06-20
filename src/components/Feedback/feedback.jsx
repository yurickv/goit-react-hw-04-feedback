import css from './Feedback-style.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {

    return (
        <div className={css.buttonThumb}>

            {options.map((opt, index) => (
                <button className={css.button} key={index} onClick={() => onLeaveFeedback(opt)}>
                    {opt}
                </button>))
            }

        </div>
    )



}

