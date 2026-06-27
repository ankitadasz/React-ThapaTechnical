export const ParentComponent = () => {
  return (
    <section
      className={`p-4 h-lvh font-display
         tracking-wider flex flex-col justify-center
          items-center bg-gray-900 text-white`}
    >
      <h1>Hello Ankita</h1>

      <ChildComponent data="GrandGrandMother Ankita"/>
    </section>
  );
};
const ChildComponent = (props)=>{
    return(
        <>
        <h1>Hello i am ankita's child</h1>
        <GrandChildComponent data={props.data}/>
        </>
    )

}
const GrandChildComponent = (props)=>{
    return(
        <>
        <h1>Hii i am ankita's grandgrand child</h1>
        <GrandGrandChildComponent data={props.data}/>
        </>
    )

}
const GrandGrandChildComponent = (props)=>{
    return(
        <>
        <h1>Hii i love my {props.data}</h1>
        </>
    )

}