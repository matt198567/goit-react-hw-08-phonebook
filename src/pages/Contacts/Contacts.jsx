import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PhoneBook from '../../components/Phonebook/Phonebook';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PhoneBook />
    </div>
  );
}
