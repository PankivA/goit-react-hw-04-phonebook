import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <div className={css.filter}>
    <label className={css.label} htmlFor="labelFilter">Filter by name</label>
    <input className={css.input} type="text" value={value} onChange={onChange} />
    </div>
)

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Filter