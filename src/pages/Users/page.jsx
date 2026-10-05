const Users = () => {
  return (
    <div class="content">
          <section class="page-heading">
            <div>
              <h1>کاربران</h1>
              <p>فهرست کاربران ثبت‌نام‌شده در فروشگاه</p>
            </div>
            <span class="button button-primary">افزودن کاربر <svg><path d="M12 5v14M5 12h14"></path></svg></span>
          </section>
          <section class="toolbar">
            <div class="toolbar-group">
              <label class="search"><svg>
                  <circle cx="11" cy="11" r="6"></circle>
                  <path d="m20 20-4.2-4.2"></path></svg><input placeholder="نام، شماره یا ایمیل"/></label><select class="filter-select">
                <option>همه نقش‌ها</option>
                <option>مدیر</option>
                <option>پشتیبانی</option>
                <option>کاربر</option>
              </select>
            </div>
            <span class="badge success">۲۰۰ کاربر</span>
          </section>
          <section class="table-card">
            <div class="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>کاربر</th>
                    <th>نام کاربری</th>
                    <th>شماره تماس</th>
                    <th>ایمیل</th>
                    <th>نقش</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="product-cell">
                      <img class="avatar" src="/public/images/profile-avatar.jpg" alt="پیمان احمدی"/><span>پیمان احمدی</span>
                    </td>
                    <td class="id">peyman-geek</td>
                    <td>۰۹۹۱۱۸۷۱۵۹۶</td>
                    <td dir="ltr">peymangeek@gmail.com</td>
                    <td><span class="badge success">مدیر</span></td>
                    <td>
                      <span class="row-actions"><span><svg><path d="M4 20h4l10-10-4-4L4 16Z"></path></svg></span><span><svg>
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M12 8v4l3 2"></path></svg></span></span>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-cell">
                      <img class="avatar" src="/public/images/profile-avatar.jpg" alt="رضا احمدی"/><span>رضا احمدی</span>
                    </td>
                    <td class="id">Reza2</td>
                    <td>۰۹۱۲۹۸۷۶۵۴۳</td>
                    <td dir="ltr">reza2@example.com</td>
                    <td><span class="badge">کاربر</span></td>
                    <td>
                      <span class="row-actions"><span><svg><path d="M4 20h4l10-10-4-4L4 16Z"></path></svg></span><span><svg>
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M12 8v4l3 2"></path></svg></span></span>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-cell">
                      <img class="avatar" src="/public/images/profile-avatar.jpg" alt="محمد حسینی"/><span>محمد حسینی</span>
                    </td>
                    <td class="id">Mohammad3</td>
                    <td>۰۹۱۲۱۲۳۴۵۶۷</td>
                    <td dir="ltr">mohammad3@example.com</td>
                    <td><span class="badge warning">پشتیبانی</span></td>
                    <td>
                      <span class="row-actions"><span><svg><path d="M4 20h4l10-10-4-4L4 16Z"></path></svg></span><span><svg>
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M12 8v4l3 2"></path></svg></span></span>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-cell">
                      <img class="avatar" src="/public/images/profile-avatar.jpg" alt="زهرا رضایی"/><span>زهرا رضایی</span>
                    </td>
                    <td class="id">Zahra4</td>
                    <td>۰۹۱۲۳۴۵۶۷۸۹</td>
                    <td dir="ltr">zahra4@example.com</td>
                    <td><span class="badge">کاربر</span></td>
                    <td>
                      <span class="row-actions"><span><svg><path d="M4 20h4l10-10-4-4L4 16Z"></path></svg></span><span><svg>
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M12 8v4l3 2"></path></svg></span></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <footer class="pagination">
              <span class="disabled">قبلی</span><span class="current">۱</span><span>۲</span><span>۳</span><span>…</span><span>۴۰</span><span>بعدی</span>
            </footer>
          </section>
         
        </div>
  );
};

export default Users;
