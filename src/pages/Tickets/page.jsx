const Tickets = () => {
  return (
   <div class="content">
          <section class="page-heading">
            <div>
              <h1>تیکت‌ها</h1>
              <p>پیام‌های پشتیبانی و درخواست‌های کاربران</p>
            </div>
            <span class="button button-secondary">مرتب‌سازی: جدیدترین</span>
          </section>
          <section class="split-layout">
            <article class="panel">
              <header class="panel-header">
                <h2>صندوق ورودی</h2>
                <label class="search"><svg>
                    <circle cx="11" cy="11" r="6"></circle>
                    <path d="m20 20-4.2-4.2"></path></svg><input placeholder="جستجو در تیکت‌ها"/></label>
              </header>
              <div class="ticket-list">
                <a class="ticket-row" href="ticket-details.html"><span class="ticket-mark"><svg>
                      <path d="M20 15a4 4 0 0 1-4 4H9l-5 3v-7a4 4 0 0 1-1-3V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4Z"></path></svg></span><span class="ticket-copy"><strong>مشکل در پرداخت سفارش آیفون ۱۷</strong><span>پرداخت من کامل شده اما وضعیت سفارش هنوز در انتظار پرداخت
                      است.</span></span><span class="ticket-date">۲ ساعت قبل</span></a><a class="ticket-row" href="ticket-details.html"><span class="ticket-mark"><svg>
                      <path d="M20 15a4 4 0 0 1-4 4H9l-5 3v-7a4 4 0 0 1-1-3V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4Z"></path></svg></span><span class="ticket-copy"><strong>درخواست تغییر آدرس تحویل</strong><span>لطفاً قبل از ارسال، آدرس سفارش را به‌روزرسانی کنید.</span></span><span class="ticket-date">دیروز</span></a><a class="ticket-row" href="ticket-details.html"><span class="ticket-mark"><svg>
                      <path d="M20 15a4 4 0 0 1-4 4H9l-5 3v-7a4 4 0 0 1-1-3V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4Z"></path></svg></span><span class="ticket-copy"><strong>موجود شدن Google Pixel 9 Pro</strong><span>آیا این محصول در این ماه موجود می‌شود؟</span></span><span class="ticket-date">۲ روز قبل</span></a><a class="ticket-row" href="ticket-details.html"><span class="ticket-mark"><svg>
                      <path d="M20 15a4 4 0 0 1-4 4H9l-5 3v-7a4 4 0 0 1-1-3V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4Z"></path></svg></span><span class="ticket-copy"><strong>پیگیری وضعیت مرجوعی</strong><span>برای مرجوعی محصول، نتیجه‌ی بررسی چه زمانی اعلام
                      می‌شود؟</span></span><span class="ticket-date">۳ روز قبل</span></a>
              </div>
            </article>
            <aside class="panel aside-stat">
              <h2>وضعیت تیکت‌ها</h2>
              <div class="stat-line">
                <div><span>باز</span><span>۲۴</span></div>
                <p class="progress"><span style={{"width": "62%"}}></span></p>
              </div>
              <div class="stat-line">
                <div><span>در حال بررسی</span><span>۱۸</span></div>
                <p class="progress orange"><span style={{"width": "45%"}}></span></p>
              </div>
              <div class="stat-line">
                <div><span>بسته شده</span><span>۳۸</span></div>
                <p class="progress red"><span style={{"width": "80%"}}></span></p>
              </div>
            </aside>
          </section>
         
        </div>
  );
};

export default Tickets;