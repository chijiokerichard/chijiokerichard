
export default function ContactList({contacts, selectedId, dispatch}) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button className="bg-orange-400 rounded-md mb-2 text-white w-[100px] h-[20px] flex items-center justify-center"
                onClick={() => {
                    dispatch({
                        type:'changed_selection',
                        contactId:contact.id
                    })
                  // TODO: dispatch changed_selection
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  