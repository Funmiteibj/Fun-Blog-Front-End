import React from "react";

const ProfileCard = ({
  imgUrl = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  username,
  link,
}) => {
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "200px",
      padding: "1rem",
      min: "1rem",
      border: "2px solid orange",
          borderRadius: "16px",
      margin: "18px"
    },
    img: {
      borderRadius: "50%",
      width: "80px",
      height: "80px",
    },
  };
  return (
    <div style={styles.card}>
      <img style={styles.img} src={imgUrl} alt="picture" />
      <h3>Username:{username}</h3>
      <p>GitHub Link: {link}</p>
    </div>
  );
};

export default ProfileCard;
