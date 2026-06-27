// const Profile=(props)=>{
//     const {name,age,greet,hobby,contact}=props;
//     return(
//         <>
//         <h1>Name:{name}</h1>
//         <h2>Age:{age}</h2>
//         <h3>Greeting:{greet}</h3>
//         <p>Hobbies:{hobby}</p>
//         <button>Contact:{contact}</button>
//         </>
//     )
// }
// export default Profile;

function Profile() {
  return (
    <div>
      <h1>Profile Card Challenges</h1>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hii Alice Have A wonderful day</strong>
          </div>
        }
      >
        <p>Hobbies:Reading,dancing</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>Hello Bob, Keep Smiling</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Football</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}
export default Profile;
function ProfileCard(props){
    const {name,age,greeting,children}=props;
    return(
        <>
        <h2>Name:{name}</h2>
        <p>Age:{age}</p> 
        <p>{greeting}</p>     
        <div>{children}</div>  
        </>
    )
}
