import { CiFaceSmile, CiFaceMeh, CiFaceFrown } from "react-icons/ci";
import css from './Statistic-style.module.css';
import PropTypes from 'prop-types';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {


    return (<div>
        <ul className={css.statList}>
            <li><CiFaceSmile className={css.icon} /> Good: {good}</li>
            <li><CiFaceMeh className={css.icon} /> Neutral: {neutral}</li>
            <li><CiFaceFrown className={css.icon} /> Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    </div>)

}



Statistics.propTypes = {
    positivePercentage: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,

};