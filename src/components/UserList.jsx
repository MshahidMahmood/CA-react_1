import {users} from "./users";
import User from "./user";

const UserList = () => {
    return (
      <div>
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    );
  };
export default UserList
