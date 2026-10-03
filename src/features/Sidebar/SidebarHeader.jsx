import { Link } from "react-router";

const SidebarHeader = () => {
  return (
    <div className="pb-6 border-b border-zinc-200">
      <Link to="/" className="flex items-center gap-3">
        <img src="/images/logo.png" alt="سبز لرن" className="w-10 h-10" />
        <div>
          <strong className="block text-base">سبز لرن</strong>
          <span className="text-xs text-zinc-500">پنل مدیریت فروشگاه</span>
        </div>
      </Link>
    </div>
  );
};

export default SidebarHeader;