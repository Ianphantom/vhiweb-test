# VhiWEB Test

Dokumentasi ini akan memberikan panduan tentang proyek technical test dari VhiWEB yang dibangun dengan menggunakan ReactJS

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal beberapa prasyarat berikut:

- Node.js: Pastikan Anda telah menginstal Node.js, versi 12 atau yang lebih baru.

## Instalasi

Berikut adalah langkah-langkah untuk menjalankan proyek menggunakan ReactJS

```bash
# Clone repositori
git clone https://github.com/nama-akun/repo-proyek.git

# Pindah ke direktori proyek
cd repo-proyek

# Instal dependensi
npm install

# Menjalankan proyek
npm start

```

## Penggunaan

Berikut merupakan tampilan halaman yang dibuat dalam project VhiWEB ini.

#### Login

Pada halaman login, user dapat melakukan login dengan credential sebagai berikut ini:

- email : eve.holt@reqres.in
- password : cityslicka

Jika user menekan tombol login tanpa memasukkan credential dan user tidak memasukkan password atau username maka akan muncul pop up error disebelah kanan atas

![image](https://github.com/Ianphantom/vhiweb-test/assets/50267676/d7ad60db-948b-4437-b78b-95ea142bd9fd)

#### UserList

halaman userlist hanya bisa diakses jika user sudah login. Secara default jika user mengakses tanpa login maka sistem akan mengembalikan halaman login kepada user. Ada beberapa hal yang dapat kamu lakukan pada halaman ini

- Kamu dapat mencari nama karyawan baik dengan menggunakan nama depan ataupun dengan nama belakang pada bagian search.
- Kamu dapat melakukan sorting pada tabel berdasarkan column header yang ada. Sorting dapat dilakukan secara acending ataupun decending.
- Kamu dapat melihat detail dari setiap user dengan menekan tombol view pada bagian sebelah kanan setiap baris
- Secara default, jumlah karyawan yang ditampilkan perhalaman adalah 5 orang. Kamu bisa mengatur jumlah tampilan perhalaman pada bagian bawah

![image](https://github.com/Ianphantom/vhiweb-test/assets/50267676/5783eea6-f146-4993-a456-44b548e20f63)

#### UserDetail

Halaman userdetail menyediakan informasi detail dari setiap user. Secara default jika user mengakses tanpa login maka sistem akan mengembalikan halaman login kepada user.

- Jika kamu memasukkan id user secara sembarang, maka halaman akan mengembalikan nilai bahwa user tersebut tidak ditemukan

![image](https://github.com/Ianphantom/vhiweb-test/assets/50267676/0cc74287-68e5-415f-a2e0-1b3245eab64e)

#### 404 Not Found

Halaman ini akan dikembalikan kepada user jika user memasukkan endpoint atau routing yang tidak ditetapkan sebelumnya

![image](https://github.com/Ianphantom/vhiweb-test/assets/50267676/5bf1b0e1-a0ff-4d23-ac25-049a5f901736)

## Struktur Direktori

```
.
├── App.js
├── App.test.js
├── index.js
├── reportWebVitals.js
├── setupTests.js
├── assets
│   ├── images
│   │   ├── brand-image.png
│   │   └── design-podcast.png
│   └── svg
│       ├── apple-icon.svg
│       ├── icon-back.svg
│       ├── icon-search.svg
│       └── spotify-icon.svg
├── components
│   ├── ButtonComponent.js
│   ├── ButtonSmallComponent.js
│   ├── Footer.js
│   ├── FormInputComponent.js
│   ├── GlobalStyles.js
│   ├── Header.js
│   ├── InputComponent.js
│   └── TagComponent.js
├── context
│   └── AuthContext.js
├── pages
│   ├── login
│   │   ├── index.js
│   │   └── LoginInputContainer.js
│   ├── NotFound
│   │   └── index.js
│   ├── user
│   │   ├── ColumnDetail.js
│   │   ├── ColumnEmployeeName.js
│   │   ├── ColumnStructure.js
│   │   ├── index.js
│   │   └── UserListTable.js
│   └── userDetail
│       ├── BackComponent.js
│       ├── index.js
│       ├── UserInformation.js
│       └── UserSummary.js
└── utils
    ├── apiUtils.js
    ├── formUtils.js
    └── protectedRoutes.js

```

- **/component**: berisi komponen komponen yang dapat digunakan berulang secara global
- **/context**: berisi kode kode tentang context yang dibuat
- **/pages/nama_halaman**: index.js akan menjadi file utama yang menampilkan halaman tersebut. Di dalam folder itu juga terdapat komponen komponen yang hanya digunakan pada halaman tersebut
- **/utils**: berisi kode kode yang dapat membantu mempercepat proses koding. Bagaimana fungsi tersebut digunakan dapat dilihat pada dokumentasi setiap fungsi pada dokumen yang dibuat.
