# 📂 Cấu trúc dự án SelfMoney

```text
Demo_money/
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ next.config.ts
├─ README.md
├─ Relation.sql
├─ Report.md
├─ Report.final.md
├─ app/
│   ├─ (auth)/
│   ├─ (main)/
│   │   └─ profile/
│   │       └─ page.tsx
│   ├─ api/
│   │   ├─ auth/
│   │   ├─ wallets/
│   │   ├─ categories/
│   │   ├─ transactions/
│   │   ├─ budgets/
│   │   ├─ upload/
│   │   └─ profile/
│   ├─ globals.css
│   ├─ layout.tsx
│   └─ page.tsx
├─ components/
│   ├─ Header.tsx
│   ├─ Sidebar.tsx
│   ├─ Providers.tsx
│   └─ SidebarStore.ts
├─ public/
│   └─ (assets)
├─ screenshots/
│   └─ (UI mockups)
└─ (other configuration files)
```

*Các thư mục được phân chia theo chức năng:* 
- **`app/`** chứa logic Next.js: API routes, trang chính, và các module UI. 
- **`components/`** tập hợp các component tái sử dụng (Header, Sidebar, …). 
- **`public/`** lưu tài nguyên tĩnh (logo, favicon). 
- **`screenshots/`** sẽ chứa các mockup UI (login, dashboard, …). 
- **`Relation.sql`** định nghĩa schema PostgreSQL cho các bảng `users`, `wallets`, `categories`, `transactions`, `budgets`.

Báo cáo chi tiết có thể tham khảo phần **Cấu trúc file** trong `Report.final.md` này.

## 2.2. Chức năng hệ thống

### 2.2.1. Chức năng xác thực
- Đăng ký tài khoản.
- Đăng nhập hệ thống.
- Xác thực bằng JWT.
- Mã hóa mật khẩu bằng bcrypt.

### 2.2.2. Chức năng quản lý tài khoản lưu trữ tiền
- Tạo tài khoản lưu trữ tiền.
- Chỉnh sửa thông tin tài khoản.
- Xóa tài khoản lưu trữ tiền.
- Theo dõi số dư tài khoản.

### 2.2.3. Chức năng quản lý danh mục
- Tạo danh mục thu nhập.
- Tạo danh mục chi tiêu.
- Chỉnh sửa danh mục.
- Xóa danh mục.

### 2.2.4. Chức năng quản lý giao dịch
- Thêm giao dịch thu nhập.
- Thêm giao dịch chi tiêu.
- Chỉnh sửa giao dịch.
- Xóa giao dịch.
- Xem lịch sử giao dịch.

### 2.2.5. Chức năng quản lý ngân sách
- Tạo ngân sách theo tháng.
- Theo dõi giới hạn chi tiêu.
- Cảnh báo vượt ngân sách.

### 2.2.6. Chức năng dashboard
- Hiển thị tổng thu nhập.
- Hiển thị tổng chi tiêu.
- Hiển thị số dư hiện tại.
- Hiển thị biểu đồ tài chính.

## 2.3. Yêu cầu phi chức năng

### 2.3.1. Bảo mật
- Xác thực JWT.
- Mã hóa mật khẩu.
- Bảo vệ API routes.

### 2.3.2. Hiệu năng
- Tốc độ phản hồi nhanh.
- Tối ưu truy vấn cơ sở dữ liệu.
- Render giao diện hiệu quả.

### 2.3.3. Khả năng sử dụng
- Giao diện responsive.
- Điều hướng dễ sử dụng.
- Dashboard trực quan.
- Hỗ trợ dark mode.

### 2.3.4. Khả năng mở rộng
- Kiến trúc module hóa.
- Component tái sử dụng.
- Dễ dàng mở rộng cơ sở dữ liệu.

