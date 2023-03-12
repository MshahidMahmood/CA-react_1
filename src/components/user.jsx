const User = (props) => {
    const {
      username,
      firstName,
      lastName,
      school,
      email,
      profilePicture,
      classLevel,
    } = props.user;
    let nameColor;
    if (classLevel === "Freshmen") {
            nameColor = "green";
    }
  
    return (
      <div>
        <h3>{username}</h3>
        <img src={profilePicture} alt={`${firstName} ${lastName}`} />
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>School: {school}</p>
        <p>Email: {email}</p>
        <p style={{ color: nameColor }}>Class Level: {classLevel}</p>
        <hr />
      </div>
    );
  };
  
export default User;
  