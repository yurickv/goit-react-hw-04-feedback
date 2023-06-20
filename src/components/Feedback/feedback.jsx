import css from './Feedback-style.module.css';
import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => {

    const nameOfState = Object.keys(options);

    return (
        <div className={css.buttonThumb}>

            {nameOfState.map((opt, index) => (
                <button className={css.button} key={index} onClick={() => onLeaveFeedback(opt)}>
                    {CapitalizeFirstLetter(opt)}
                </button>))
            }

        </div>
    )



}

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func,
    state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })
};


function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}