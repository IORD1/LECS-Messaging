


function sendtext(){
  document.getElementById("display").innerHTML = 'sended text';
}

  try {
      const docRef = await addDoc(collection(db, "test"), {
      sender : 'pratham'
        });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
// Add a new document in collection "cities"
