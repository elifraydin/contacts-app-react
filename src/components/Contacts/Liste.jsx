import { useState } from 'react' //inputa veri girildiği anda state'e yazmak gerekiyor

function Liste({ contacts }) {

  //filtreleme
  const [filterText, setFilterText] = useState("");

  //filter adında array metodu var
  //bu objeyi key'lerine ayır
  //some -> fullname veya phone_number herhangi birinde eğer
  //includes -> bu ifade geçiyorsa return
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  // console.log("filtered", filtered)


  return (
    <div>

      <input
        placeholder='Filter Contact'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />{/* input değiştiği anda --> onChange */}


      <ul>
        {filtered.map((contact, i) => (
          <li key={i}>{contact.fullname}</li>
        ))}
      </ul>

    </div>
  )
}

export default Liste
