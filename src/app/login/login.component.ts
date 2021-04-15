import { Component, OnInit } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-login',
  // templateUrl: './login.component.html',
  template: `<body>
    <div class="main-all">
  <div class="main">
  <h4>Đăng nhập</h4>
      <div class="title-login"></div>
      <span>Tài khoản</span>
      <div class="text-input" >
          <!-- <input class="form-input" type="text" > -->
          <ejs-dropdownlist id='ddlelement' [dataSource]='data' placeholder='Chọn Tài Khoản' popupHeight='200px' popupWidth='250px' ></ejs-dropdownlist>
      </div>
      <!-- <div id='local' class='col-lg-6' style="margin: 0 auto;padding-top: 25px;">
          <div style="width: 250px;margin: 0 auto;">
             
              <ejs-dropdownlist id='ddlelement' [dataSource]='data' placeholder = 'Select a game'></ejs-dropdownlist>
          </div>
      </div> -->
      <span class=pw-login>Mật khẩu</span>
      <div class="text-input2">
          <input class="form-input" type="password" >
      </div>
      <div class="main-button">
          <button>Đăng nhập</button>
         
      </div>
  </div>
</div>
<body>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  public data: string[] = ['Admin', 'User1', 'User2', 'User3', 'User4'];
  ngOnInit(): void {
  }

}
