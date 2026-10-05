const Products = () => {
  return (
    <div class="content">
          <section class="page-heading">
            <div>
              <h1>لیست محصولات</h1>
              <p>مدیریت، انتشار و بررسی موجودی محصولات</p>
            </div>
            <div class="heading-actions">
              <span class="button button-subtle"><svg>
                  <rect x="4" y="4" width="6" height="6"></rect>
                  <rect x="14" y="4" width="6" height="6"></rect>
                  <rect x="4" y="14" width="6" height="6"></rect>
                  <rect x="14" y="14" width="6" height="6"></rect></svg></span><span class="button button-primary">ایجاد محصول <svg><path d="M12 5v14M5 12h14"></path></svg></span>
            </div>
          </section>
          <section class="toolbar">
            <div class="toolbar-group">
              <label class="search"><svg>
                  <circle cx="11" cy="11" r="6"></circle>
                  <path d="m20 20-4.2-4.2"></path></svg><input placeholder="جستجو در محصولات"/></label><select class="filter-select">
                <option>همه وضعیت‌ها</option>
                <option>منتشر شده</option>
                <option>مخفی شده</option>
              </select>
            </div>
            <div class="toolbar-group">
              <span class="badge success">۱۵ محصول</span>
              <div class="view-switch">
                <span class="active"><svg><path d="M4 5h16M4 12h16M4 19h16"></path></svg></span><span><svg>
                    <rect x="4" y="4" width="6" height="6"></rect>
                    <rect x="14" y="4" width="6" height="6"></rect>
                    <rect x="4" y="14" width="6" height="6"></rect>
                    <rect x="14" y="14" width="6" height="6"></rect></svg></span>
              </div>
            </div>
          </section>
          <section class="table-card">
            <div class="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>شناسه</th>
                    <th>عنوان محصول</th>
                    <th>تصویر</th>
                    <th>وضعیت نمایش</th>
                    <th>قیمت</th>
                    <th>موجودی</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="id">8ab39c4...</td>
                    <td class="product-cell">
                      <img class="product-thumb" src="/public/images/product-img.png" alt="آیفون ۱۷"/><span>آیفون ۱۷ پرومکس نارنجی</span>
                    </td>
                    <td><span class="id">product-img.png</span></td>
                    <td><span class="badge success">منتشر شده</span></td>
                    <td>۲۸۹,۰۰۰,۰۰۰ تومان</td>
                    <td>۱۰۰</td>
                    <td>
                      <span class="row-actions"><span><svg>
                            <path d="M4 20h4l10-10-4-4L4 16Z"></path>
                            <path d="m12 6 4 4"></path></svg></span><span><svg>
                            <path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"></path></svg></span></span>
                    </td>
                  </tr>
                  <tr>
                    <td class="id">0fa74d2...</td>
                    <td class="product-cell">
                      <img class="product-thumb" src="/public/images/product-img.png" alt="سامسونگ S24"/><span>Samsung S24 Ultra</span>
                    </td>
                    <td><span class="id">product-img.png</span></td>
                    <td><span class="badge danger">مخفی شده</span></td>
                    <td>۲۶۰,۰۰۰,۰۰۰ تومان</td>
                    <td>۱۰۰</td>
                    <td>
                      <span class="row-actions"><span><svg><path d="M4 20h4l10-10-4-4L4 16Z"></path></svg></span><span><svg><path d="M4 7h16M10 11v6M14 11v6"></path></svg></span></span>
                    </td>
                  </tr>
                  <tr>
                    <td class="id">b185d1a...</td>
                    <td class="product-cell">
                      <img class="product-thumb" src="/public/images/product-img.png" alt="شیائومی نوت ۱۴"/><span>Xiaomi Note 14 Pro</span>
                    </td>
                    <td><span class="id">product-img.png</span></td>
                    <td><span class="badge success">منتشر شده</span></td>
                    <td>۱۹۰,۰۰۰,۰۰۰ تومان</td>
                    <td>۱۰۰</td>
                    <td>
                      <span class="row-actions"><span><svg><path d="M4 20h4l10-10-4-4L4 16Z"></path></svg></span><span><svg><path d="M4 7h16M10 11v6M14 11v6"></path></svg></span></span>
                    </td>
                  </tr>
                  <tr>
                    <td class="id">c483e5f...</td>
                    <td class="product-cell">
                      <img class="product-thumb" src="/public/images/product-img.png" alt="گوگل پیکسل"/><span>Google Pixel 9 Pro</span>
                    </td>
                    <td><span class="id">product-img.png</span></td>
                    <td><span class="badge success">منتشر شده</span></td>
                    <td>۲۱۰,۰۰۰,۰۰۰ تومان</td>
                    <td>۱۰۰</td>
                    <td>
                      <span class="row-actions"><span><svg><path d="M4 20h4l10-10-4-4L4 16Z"></path></svg></span><span><svg><path d="M4 7h16M10 11v6M14 11v6"></path></svg></span></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <footer class="pagination">
              <span class="disabled">قبلی</span><span class="current">۱</span><span>۲</span><span>۳</span><span>۴</span><span>بعدی</span>
            </footer>
          </section>
          
        </div>
  );
};

export default Products;