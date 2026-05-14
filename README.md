# 💰 SelfMoney - Personal Finance Management App

SelfMoney là ứng dụng quản lý tài chính cá nhân giúp người dùng theo dõi thu nhập, chi tiêu, quản lý ví tiền, thiết lập ngân sách và xem thống kê tài chính trực quan theo thời gian.

---

# 🚀 Tính năng chính

## 📊 Dashboard

- Tổng quan tài chính
- Tổng thu nhập
- Tổng chi tiêu
- Số dư hiện tại
- Theo dõi ngân sách

## 💸 Quản lý giao dịch

- Thêm giao dịch thu nhập
- Thêm giao dịch chi tiêu
- Cập nhật giao dịch
- Xóa giao dịch
- Xem lịch sử giao dịch

## 💳 Quản lý ví tiền

- Tạo nhiều ví tiền
- Theo dõi số dư từng ví
- Chỉnh sửa thông tin ví

## 📁 Quản lý danh mục

- Danh mục thu nhập
- Danh mục chi tiêu
- Tùy chỉnh danh mục

## 🧾 Quản lý ngân sách

- Thiết lập ngân sách theo tháng
- Theo dõi giới hạn chi tiêu
- Cảnh báo vượt ngân sách

## 📈 Thống kê tài chính

- Biểu đồ chi tiêu
- Báo cáo tài chính
- Phân tích xu hướng

## 🔐 Xác thực người dùng

- Đăng ký
- Đăng nhập
- JWT Authentication
- Mã hóa mật khẩu bằng bcrypt

---

# 🛠 Tech Stack

| Công nghệ | Sử dụng |
|------------|------------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Database | PostgreSQL |
| Database Driver | pg |
| Authentication | JWT |
| Password Security | bcrypt |
| Styling | Tailwind CSS |

---

# 📂 Cấu trúc thư mục

```bash
SelfMoney/
│
├── app/
│   │
│   ├── (auth)/            # Trang đăng nhập / đăng ký
│   ├── (main)/            # Trang chính
│   ├── api/               # API Routes (backend)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/            # UI components
│
├── lib/
│   ├── db.ts              # Kết nối database
│   └── test_db.ts
│
├── modules/               # Chức năng nghiệp vụ
│
├── public/                # Static assets
│
├── .env
├── package.json
├── tsconfig.json
├── Relation.sql
└── README.md
```

---

# 📦 Cài đặt và chạy project

## 1. Clone project

```bash
git clone https://github.com/Giang0209/Project-2_selfmoney.git

cd Project-2_selfmoney
```

## 2. Cài đặt dependencies

```bash
npm install
```

---

## 3. Cấu hình môi trường

Tạo file:

```env
.env
```

Ví dụ:

```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/selfmoney

JWT_SECRET=your_secret_key
```

---

## 4. Tạo database PostgreSQL

```sql
CREATE DATABASE selfmoney;
```

Import file:

```bash
Relation.sql
```

---

## 5. Chạy project

```bash
npm run dev
```

Ứng dụng chạy tại:

```bash
http://localhost:3000
```

---

# 📖 Cách sử dụng

### 1. Đăng ký / Đăng nhập

- Tạo tài khoản mới
- Đăng nhập hệ thống

### 2. Dashboard

- Xem tổng quan tài chính
- Theo dõi số dư
- Theo dõi ngân sách

### 3. Quản lý giao dịch

- Thêm giao dịch
- Xóa giao dịch
- Cập nhật giao dịch

### 4. Quản lý ví tiền

- Tạo ví mới
- Theo dõi số dư từng ví

### 5. Thống kê

- Xem biểu đồ tài chính
- Phân tích xu hướng chi tiêu

---

# ⚠️ Lưu ý

- PostgreSQL cần được khởi động trước khi chạy project
- Kiểm tra file `.env`
- JWT Token được lưu trong localStorage
- API Backend được xây dựng bằng Next.js API Routes (`app/api`)

---

# 👨‍💻 Thông tin dự án

**SelfMoney - Personal Finance Management System**

Phát triển bằng:

- Next.js App Router
- TypeScript
- PostgreSQL
- JWT Authentication
- Tailwind CSS

---


Made with ❤️ by Giang
