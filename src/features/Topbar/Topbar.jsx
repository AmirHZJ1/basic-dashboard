import { HiMagnifyingGlass  } from "react-icons/hi2";
import { BiBell } from "react-icons/bi";

const Topbar = () => {
  return (
    <header className="topbar">
      <label className="search cursor-pointer" aria-label="جست‌وجو">
        <HiMagnifyingGlass/>
        <input aria-label="جست‌وجو" placeholder="جستجو کنید" />
      </label>
      <div className="top-actions">
        <button className="icon-button notification cursor-pointer" aria-label="اعلان‌ها">
          <BiBell/>
        </button>
        <span className="top-divider"></span>
        <div className="profile">
          <img
            src="/public/images/profile-avatar.jpg"
            alt="پروفایل پیمان احمدی"
          />
          <span className="profile-text">
            <strong>امیرعلی هزارجریبی</strong>
            <span>software engineer</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
