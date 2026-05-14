# BÁO CÁO ĐỒ ÁN

# Hệ thống quản lý tài chính cá nhân - SelfMoney

---

## Thông tin nhóm

- Tên dự án: SelfMoney – Personal Finance Management System
- Môn học: ..................................
- Giảng viên hướng dẫn: ..........................
- Sinh viên thực hiện: ..........................
- MSSV: ..................................
- Ngày thực hiện: ..................................

---

# MỤC LỤC

1. Giới thiệu đề tài
2. Phân tích bài toán
3. Mục tiêu hệ thống
4. Chức năng hệ thống
5. Thiết kế hệ thống
6. Thiết kế cơ sở dữ liệu
7. Công nghệ sử dụng
8. Cài đặt và triển khai
9. Giao diện hệ thống
10. Đánh giá và hướng phát triển
11. Kết luận

---

# 1. Giới thiệu đề tài

Trong cuộc sống hiện nay, việc quản lý tài chính cá nhân ngày càng trở nên quan trọng. Nhiều người gặp khó khăn trong việc theo dõi thu nhập, chi tiêu và kiểm soát ngân sách hàng tháng.

SelfMoney được xây dựng nhằm hỗ trợ người dùng quản lý tài chính cá nhân hiệu quả hơn thông qua việc ghi nhận các giao dịch, quản lý ví tiền, lập ngân sách và thống kê trực quan.

---

# 2. Phân tích bài toán

## 2.1 Thực trạng

Một số vấn đề thường gặp:

- Không kiểm soát được chi tiêu
- Không theo dõi được số dư thực tế
- Khó thống kê các khoản thu chi
- Không có cảnh báo vượt ngân sách

## 2.2 Giải pháp đề xuất

Hệ thống SelfMoney cung cấp:

- Quản lý giao dịch thu/chi
- Quản lý nhiều ví tiền
- Theo dõi ngân sách
- Thống kê tài chính trực quan
- Hệ thống xác thực người dùng

---

# 3. Mục tiêu hệ thống

Mục tiêu của hệ thống:

- Hỗ trợ quản lý tài chính cá nhân
- Theo dõi thu nhập và chi tiêu
- Giúp người dùng kiểm soát ngân sách
- Hiển thị thống kê trực quan
- Tăng tính bảo mật dữ liệu người dùng

---

# 4. Chức năng hệ thống

## 4.1 Quản lý tài khoản

- Đăng ký
- Đăng nhập
- Cập nhật thông tin cá nhân
- Đăng xuất

## 4.2 Quản lý giao dịch

- Thêm giao dịch
- Sửa giao dịch
- Xóa giao dịch
- Xem lịch sử

## 4.3 Quản lý ví tiền

- Tạo ví
- Chỉnh sửa ví
- Theo dõi số dư

## 4.4 Quản lý danh mục

- Danh mục thu nhập
- Danh mục chi tiêu

## 4.5 Quản lý ngân sách

- Thiết lập ngân sách tháng
- Cảnh báo vượt ngân sách

## 4.6 Thống kê

- Biểu đồ thu nhập
- Biểu đồ chi tiêu
- Báo cáo tài chính

---

# 5. Thiết kế hệ thống

## 5.1 Kiến trúc hệ thống

Mô hình hệ thống:

User
↓
Next.js Frontend
↓
API Routes (Next.js Backend)
↓
PostgreSQL Database

## 5.2 Cấu trúc thư mục

```bash
app/
├── (auth)
├── (main)
├── api
├── layout.tsx
└── page.tsx

components/
lib/
modules/
public/
```

---

# 6. Thiết kế cơ sở dữ liệu

Hệ thống SelfMoney sử dụng cơ sở dữ liệu PostgreSQL để lưu trữ thông tin người dùng, giao dịch tài chính, ví tiền và ngân sách.

## 6.1 Các bảng chính

### Users

Lưu thông tin người dùng.

| Thuộc tính | Kiểu dữ liệu | Mô tả |
|---|---:|---|
| id | SERIAL | Mã người dùng |
| phone | VARCHAR(20) | Số điện thoại |
| username | VARCHAR(50) | Tên đăng nhập |
| name | VARCHAR(100) | Họ tên |
| password_hash | TEXT | Mật khẩu đã mã hóa |
| avatar | TEXT | Ảnh đại diện |
| dob | DATE | Ngày sinh |
| gender | VARCHAR(10) | Giới tính |
| created_at | TIMESTAMP | Ngày tạo |

### Wallets

Lưu các ví tiền của người dùng.

| Thuộc tính | Kiểu dữ liệu | Mô tả |
|---|---:|---|
| id | SERIAL | Mã ví |
| user_id | INT | Người sở hữu ví |
| name | VARCHAR(100) | Tên ví |
| balance | NUMERIC(12,2) | Số dư |
| icon | VARCHAR(50) | Biểu tượng |
| created_at | TIMESTAMP | Ngày tạo |
| deleted_at | TIMESTAMP | Xóa mềm |

### Categories

Lưu danh mục thu nhập và chi tiêu.

| Thuộc tính | Kiểu dữ liệu | Mô tả |
|---|---:|---|
| id | SERIAL | Mã danh mục |
| user_id | INT | Người sở hữu |
| name | VARCHAR(100) | Tên danh mục |
| type | VARCHAR(10) | income / expense |
| icon | VARCHAR(50) | Biểu tượng |
| color | VARCHAR(20) | Màu hiển thị |

### Transactions

Lưu lịch sử giao dịch tài chính.

| Thuộc tính | Kiểu dữ liệu | Mô tả |
|---|---:|---|
| id | SERIAL | Mã giao dịch |
| user_id | INT | Người thực hiện |
| wallet_id | INT | Ví sử dụng |
| category_id | INT | Danh mục |
| amount | NUMERIC(12,2) | Số tiền |
| note | TEXT | Ghi chú |
| transaction_date | TIMESTAMP | Thời gian giao dịch |

### Budgets

Lưu ngân sách theo tháng.

| Thuộc tính | Kiểu dữ liệu | Mô tả |
|---|---:|---|
| id | SERIAL | Mã ngân sách |
| user_id | INT | Người dùng |
| category_id | INT | Danh mục |
| amount | NUMERIC(12,2) | Giới hạn ngân sách |
| month | INT | Tháng |
| year | INT | Năm |

## 6.2 Quan hệ giữa các bảng

- Một Users có nhiều Wallets (1:N)
- Một Users có nhiều Categories (1:N)
- Một Users có nhiều Transactions (1:N)
- Một Wallet có nhiều Transactions (1:N)
- Một Category có nhiều Transactions (1:N)
- Một Users có nhiều Budgets (1:N)
- Một Category có nhiều Budgets (1:N)

ERD:

(Chèn sơ đồ ERD tại đây)

---

# 7. Công nghệ sử dụng

| Công nghệ | Mục đích |
|-----------|----------|
| Next.js | Frontend + Backend |
| TypeScript | Ngôn ngữ lập trình |
| PostgreSQL | Cơ sở dữ liệu |
| JWT | Xác thực |
| bcrypt | Mã hóa mật khẩu |
| TailwindCSS | Thiết kế giao diện |

---

# 8. Cài đặt và triển khai

Clone source:

```bash
git clone <repository-url>
```

Cài đặt:

```bash
npm install
```

Chạy dự án:

```bash
npm run dev
```

---

# 9. Giao diện hệ thống

## Trang đăng nhập

(Chèn ảnh)

## Dashboard

(Chèn ảnh)

## Quản lý giao dịch

(Chèn ảnh)

## Thống kê

(Chèn ảnh)

---

# 10. Đánh giá và hướng phát triển

## Ưu điểm

- Giao diện trực quan
- Dễ sử dụng
- Quản lý tài chính hiệu quả
- Hệ thống bảo mật

## Hạn chế

- Chưa hỗ trợ AI phân tích tài chính
- Chưa đồng bộ đa thiết bị

## Hướng phát triển

- Tích hợp AI gợi ý chi tiêu
- Xuất PDF/Excel
- Thêm thông báo thời gian thực
- Đồng bộ Cloud

---

# 11. Kết luận

SelfMoney hỗ trợ người dùng quản lý tài chính cá nhân hiệu quả thông qua các chức năng quản lý thu chi, ví tiền, ngân sách và thống kê trực quan. Hệ thống được xây dựng bằng Next.js App Router kết hợp PostgreSQL giúp tối ưu hiệu suất và dễ mở rộng trong tương lai.

