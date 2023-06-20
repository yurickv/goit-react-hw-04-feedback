import PropTypes from 'prop-types';
import css from '../Statistic/Statistic-style.module.css';
import { CiEdit } from "react-icons/ci";


export const Notification = ({ message }) => {
    return (
        <p>
            {message}
            <CiEdit className={css.icon} />
        </p>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};