const Practice = () => {
  const students = [1];
  return (
    <>
      {/* <p>{students.length && "no student found"}</p>
        1st method */}
      {/* <p>{students.length===0 && "no student found"}</p>
        2nd method  */}
      {/* <p>{!students.length && "no student found"}</p>
        3rd method */}
      {/* <p>{!Boolean(students.length) && "no student found"}</p>
      4th method */}
      <p>No of students:{students.length}</p>
    </>
  );
};
export default Practice;
