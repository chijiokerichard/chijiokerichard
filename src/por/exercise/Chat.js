
export default function Chat({contact, message, dispatch}) {
    function handleSend(){
        alert(message +' ' + contact.name)
        dispatch({
            type:'sent_message',
        })
    }
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
            dispatch({
                type:'edited_message',
                message:e.target.value
            })
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
        }}
      />
      <br />
      <button onClick={handleSend}>Send to {contact.email}</button>
    </section>
  );
}
