function Eventcalling() {
  function fruit(name) {
    alert(name);
  }

  return (
    <>
    <button onClick={()=>fruit("apple")}>
      apple </button>
    <button onClick={()=>fruit("banana")}>
      banana </button>
      </>

  );
}

export default Eventcalling;


