import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <section style={secStyle}>
            <h3>{title}</h3>
            {children}
        </section>
    );
};



Section.propTypes = {
    title: PropTypes.string.isRequired,
};





const secStyle = {
    width: 500
}