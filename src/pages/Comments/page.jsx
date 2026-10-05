
const Comments = () => {
  return (
    <div class="content">
          <section class="page-heading">
            <div>
              <h1>نظرات</h1>
              <p>بررسی و مدیریت دیدگاه‌های ثبت‌شده</p>
            </div>
            <span class="badge warning">۳ نظر در انتظار</span>
          </section>
          <section class="toolbar">
            <div class="toolbar-group">
              <label class="search"><svg>
                  <circle cx="11" cy="11" r="6"></circle>
                  <path d="m20 20-4.2-4.2"></path></svg><input placeholder="جستجو در نظرات"/></label><select class="filter-select">
                <option>همه نظرات</option>
                <option>تأیید شده</option>
                <option>در انتظار</option>
              </select>
            </div>
            <span class="button button-secondary">فیلتر <svg><path d="M3 5h18M6 12h12M10 19h4"></path></svg></span>
          </section>
          <section class="comment-list">
            <article class="panel comment">
              <img class="avatar" src="/public/images/profile-avatar.jpg" alt="سارا مرادی"/>
              <div class="comment-copy">
                <header>
                  <strong>سارا مرادی</strong><time>۲ ساعت قبل</time>
                </header>
                <p>
                  این محصول از نظر کیفیت واقعاً عالی است. فقط لطفاً زمان تقریبی
                  ارسال را هم در صفحه محصول مشخص کنید.
                </p>
                <a class="comment-product" href="products.html">برای محصول: آیفون ۱۷ پرومکس نارنجی</a>
              </div>
              <span class="badge warning">در انتظار</span>
            </article>
            <article class="panel comment">
              <img class="avatar" src="/public/images/profile-avatar.jpg" alt="امیر جلالی"/>
              <div class="comment-copy">
                <header><strong>امیر جلالی</strong><time>دیروز</time></header>
                <p>
                  آیا رنگ سبز این مدل هم موجود می‌شود؟ قیمت نسبت به بازار منطقی
                  به نظر می‌رسد.
                </p>
                <a class="comment-product" href="products.html">برای محصول: Samsung S24 Ultra</a>
              </div>
              <span class="badge success">تأیید شده</span>
            </article>
            <article class="panel comment">
              <img class="avatar" src="/public/images/profile-avatar.jpg" alt="زهرا رضایی"/>
              <div class="comment-copy">
                <header>
                  <strong>زهرا رضایی</strong><time>۳ روز قبل</time>
                </header>
                <p>
                  تجربه خرید خوبی داشتم و بسته‌بندی محصول بسیار تمیز بود. ممنون
                  از تیم پشتیبانی.
                </p>
                <a class="comment-product" href="products.html">برای محصول: Xiaomi Note 14 Pro</a>
              </div>
              <span class="badge success">تأیید شده</span>
            </article>
          </section>
          
        </div>
  );
};

export default Comments;