import { Link } from "react-router";
import  users  from "../../../data/users";
const LastUsers = () => {
  return (
    <article className="panel">
      <header className="panel-header">
        <h2>آخرین کاربران</h2>
        <Link to="/dashboard/users">مشاهده همه ←</Link>
      </header>
      <div className="users-list">
         {users.slice(-3).map((user) => (
          <div className="user-event" key={user.id}>
            <img
              className="avatar"
              src={user.profile}
              alt={user.fullName}
            />
          <span className="user-event-text">
            کاربر <strong>{user.fullName}</strong> ثبت نام کرد
            <span>{user.email}</span>
          </span>
        </div>
         ))}
      </div>
    </article>
  );
};

export default LastUsers;
