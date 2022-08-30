const title = "";
const tableTitle = "";

const head1 = "";
const head2 = "";
const head3 = "";
const head4 = "";
const head5 = "";

const body1 = "";
const body2 = "";
const body3 = "";
const body4 = "";
const body5 = "";

console.log(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <link rel="stylesheet" href="../../styles.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
      rel="stylesheet"
    />

    <!-- javascript  -->
    <script src="../../sidebar.js" defer></script>
    <title>${title}</title>
  </head>
  <body>
     <header>
      <div class="nav-info">
        <img src="../../assets/imgs/Ellipse 1.png" />
        <h5>Fahd alharby</h5>
        <!-- svgs -->

        <img src="../../assets/imgs/ring svg.svg" />
        <img src="../../assets/imgs/Component 6 – 1.svg" />
      </div>

      <div class="nav-search-logo">
        <input placeholder="بحث" type="text" />
        <img src="../../assets/imgs/logo.svg" />
      </div>
    </header>
    <section class="main-section">
      <!-- side bar -->

<div>
  <nav class="sidebar close">
    <i class="bx bx-chevron-right toggle"></i>

    <div class="menu-bar">
      <div class="menu">
        <ul class="menu-links">
          <div>
            <li class="nav-link">
              <a class="link-closed">
                <span class="text nav-text">الرئيسية</span>
                <i class="bx bx-home-alt icon"></i>
              </a>
            </li>
          </div>

          <div>
            <li class="nav-link">
              <a href="../selling-point.html" class="link-closed">
                <span class="text nav-text">نقاط البيع</span>
                <i class="bx bx-bar-chart-alt-2 icon"></i>
              </a>
            </li>
          </div>
          <div>
            <li
              class="contains-dropdown nav-link"
              data-rotate="180deg"
              class="link-closed"
            >
              <a class="link-closed">
                <span class="text nav-text">المخزون</span>
                <i class="bx bx-bell icon"></i>
              </a>
            </li>
          </div>
          <div>
            <li data-rotate="180deg" class="contains-dropdown nav-link">
              <a class="link-closed">
                <span class="text nav-text">المصروفات</span>
                <i class="bx bx-pie-chart-alt icon"></i>
              </a>
            </li>
          </div>
          <div>
            <li data-rotate="180deg" class="contains-dropdown nav-link">
              <a class="link-closed">
                <span class="text nav-text">التقارير</span>
                <i class="bx bx-heart icon"></i>
              </a>
            </li>
          </div>
          <div>
            <li data-rotate="180deg" class="contains-dropdown nav-link">
              <a class="link-closed">
                <span class="text nav-text">الموردين</span>
                <i class="bx bx-wallet icon"></i>
              </a>
            </li>
            <div class="dropdown hidden">
              <a href="../الموردين/Suppliers.html">قائمه الموردين</a>
              <a href="../الموردين/bills-of-exchange.html"> سندات الصرف </a>
            </div>
          </div>

          <div>
            <li data-rotate="180deg" class="contains-dropdown nav-link">
              <a class="link-closed">
                <span class="text nav-text">المبيعات</span>
                <i class="bx bx-wallet icon"></i>
              </a>
            </li>

            <div class="dropdown hidden">
              <a href="./sales.html">قائمه المبيعات</a>
              <a href="./sales-return.html">مرتجع المبيعات</a>
              <a href="./Quotations.html"> عروض الأسعار</a>
              <a href="./sales-invoices.html"> فواتير المبيعات</a>
            </div>
          </div>
          <div>
            <li data-rotate="180deg" class="contains-dropdown nav-link">
              <a class="link-closed">
                <span class="text nav-text">المشتريات</span>
                <i class="bx bx-wallet icon"></i>
              </a>
            </li>
          </div>

          <div>
            <li data-rotate="180deg" class="contains-dropdown nav-link">
              <a class="link-closed">
                <span class="text nav-text">العملاء</span>
                <i class="bx bx-wallet icon"></i>
              </a>
            </li>
          </div>

          <div>
            <li data-rotate="180deg" class="contains-dropdown nav-link">
              <a class="link-closed">
                <span class="text nav-text">الموظفين</span>
                <i class="bx bx-wallet icon"></i>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>

  <div class="sidebar-part-two close">
    <div class="menu-bar">
      <div class="menu">
        <ul class="menu-links">
          <div>
            <li class="contains-dropdown nav-link">
              <a class="link-closed">
                <span class="text nav-text">ادارة النظام</span>
                <i class="bx bx-home-alt icon"></i>
              </a>
            </li>
            <div class="dropdown hidden">
              <a href="../اداره النظام/users.html">المستخدمين</a>
              <a href="../اداره النظام/bank-accounts.html"> حسابات البنكيه </a>
              <a href="../اداره النظام/branches-warehouses.html"
                >الفروع و المستودعات</a
              >
              <a href="../اداره النظام/payment-devices.html">اجهزه الدفع</a>
              <a href="../اداره النظام/regions.html">المناطق</a>
            </div>
          </div>
          <li class="nav-link">
            <a class="link-closed">
              <span style="color: #f13c47 !important" class="text nav-text"
                >تسجيل الخروج</span
              >
              <i
                style="color: #f13c47 !important"
                class="bx bx-bar-chart-alt-2 icon"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



      <section  style='flex: 1; border-top-left-radius: 20px; border-top-right-radius: 20px; background-color: white; ' class="data-table">
 <div class="data-table-title-div">
    <h3>${tableTitle}</h3>
    <button style="background-color:transparent">
      <svg xmlns="http://www.w3.org/2000/svg" width="23.995" height="24" viewBox="0 0 23.995 24">
  <path id="Path_42" data-name="Path 42" d="M23.837,22.776,18,16.944a10.241,10.241,0,1,0-1.011,1.011l5.832,5.832a.723.723,0,0,0,.506.213.7.7,0,0,0,.506-.213A.719.719,0,0,0,23.837,22.776ZM1.481,10.233a8.8,8.8,0,1,1,8.8,8.8A8.806,8.806,0,0,1,1.481,10.233Z" transform="translate(-0.05 0)" fill="#fff"/>
</svg>
</button>
 </div>
<table class="demo">
	<thead>	
        <th>${head1}</th>
        <th>${head2}</th>
        <th>${head3}</th>
        <th>${head4}</th>
        <th>${head5}</th>
        <th><input type="checkbox" name="switch" class="check"></th>
	</tr>
	</thead>	
    <tbody>	
  
 <tr>
		<td>
            <div style="display: flex; align-items: center; justify-content:center;gap: 15px;">
            <button style="background-color:transparent;"><img src="../../assets/imgs/more.svg"/></button>
            <button style="background-color:transparent;"><img src="../../assets/imgs/Group 107.png"/></button>
            <button style="background-color:transparent;"><img src="../../assets/imgs/Group 108.png"/></button>
        </div>
    </td>
		<td>${body1}</td>
		<td>${body2}</td>
		<td>${body3}</td>
		<td>${body4}</td>
		<td>${body5}</td>
 
		<td><input type="checkbox" name="switch" class="check"></td>
 	</tr>

       <tr>
		<td>
            <div style="display: flex; align-items: center; justify-content:center;gap: 15px;">
            <button style="background-color:transparent;"><img src="../../assets/imgs/more.svg"/></button>
            <button style="background-color:transparent;"><img src="../../assets/imgs/Group 107.png"/></button>
            <button style="background-color:transparent;"><img src="../../assets/imgs/Group 108.png"/></button>
        </div>
    </td>
		<td><div class="data-table-status-partial"><p>جزئي</p></div></td>
		<td>اسم العميل هنا</td>
		<td>200.00 SR</td>
		<td>0.00 SR</td>
		<td>اسم العميل هنا</td>
		<td>11 August 2022</td>
		<td><input type="checkbox" name="switch" class="check"></td>
 	</tr>

 <tr>
		<td>
            <div style="display: flex; align-items: center; justify-content:center;gap: 15px;">
            <button style="background-color:transparent;"><img src="../../assets/imgs/more.svg"/></button>
            <button style="background-color:transparent;"><img src="../../assets/imgs/Group 107.png"/></button>
            <button style="background-color:transparent;"><img src="../../assets/imgs/Group 108.png"/></button>
        </div>
    </td>
		<td><div class="data-table-status-uncompleted"><p>غير مدفوع</p></div></td>
		<td>اسم العميل هنا</td>
		<td>200.00 SR</td>
		<td>0.00 SR</td>
		<td>اسم العميل هنا</td>
		<td>11 August 2022</td>
		<td><input type="checkbox" name="switch" class="check"></td>
 	</tr>


	</tbody>

</table>
   <div class="pagination">
    <button><img src="../../assets/imgs/left arrow.svg"></button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>...</button>
    <button>9</button>
    <button><img src="../../assets/imgs/right arrow.svg"></button>
  </div>
      </section>

      <!-- side bar -->
    </section>
  </body>
</html>
`);
