import {
  StyledContactList,
  StyledContactListItem,
  StyledDeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => (
        <StyledContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <StyledDeleteButton onClick={() => onDelete(contact.id)}>
            Delete
          </StyledDeleteButton>
        </StyledContactListItem>
      ))}
    </StyledContactList>
  );
};
