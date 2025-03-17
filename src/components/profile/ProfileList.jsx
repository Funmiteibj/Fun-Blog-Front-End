import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = () => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    },
  };
  const [users, setUsers] = useState([]);
  // function to fetch users
  const fetchUser = async () => {
    const url = "https://api.github.com/users";
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data", data);
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // call the fetch function inside useEffect
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div style={styles.grid}>
      {users.map((person) => (
        <ProfileCard
          imgUrl={person.avatar_url}
          username={person.login}
          link={person.html_url}
        />
      ))}
    </div>
  );
};

export default ProfileList;
