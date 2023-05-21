import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const ContactsList = ({ list, onDeleteContact }) => (
 <ul>
    {list.map(({id, name, number}) => (
         <li key={id} className={css.item}>
            <p>{name}: {number}</p>
            <button  className={css.button} type="button" onClick={()=>onDeleteContact(id)}>DELETE</button>
        </li>
    ))}
</ul>
 )

ContactsList.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactsList