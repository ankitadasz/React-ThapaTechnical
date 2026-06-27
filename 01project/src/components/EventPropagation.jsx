import "./EV.css";
const EventPropagation = () => {
  const handleGrandparent = () => {
    console.log("GrandParent Clicked");
  };
  const handleparent = () => {
    console.log("Parent Clicked");
  };
  const handleChild = (event) => {
    console.log(event);
    console.log("Child Clicked");
  };
  return (
    <section className="main-div">
      <div className="g-div" onClick={handleGrandparent}>
        <div className="p-div" onClick={handleparent}>
            <div>
                
            </div>
          <button className="c-div" onClick={handleChild}>
            ChildDiv
          </button>
        </div>
      </div>
    </section>
  );
};
export default EventPropagation;
