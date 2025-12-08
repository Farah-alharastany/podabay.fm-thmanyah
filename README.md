# podabay.fm-thmanyah

---

# 🎧 Podcast Platform – Full Stack Setup Guide

## 📌 Project Overview

**podabay.fm-thmanyah** is a full-stack podcast streaming and discovery platform that allows users to:

* 🔍 Search for podcasts and individual episodes
* 🎧 Explore trending podcasts and featured episodes

The project is built with a **modern full-stack architecture**:

* **Frontend:** Next.js + React + Tailwind CSS
* **Backend:** NestJS + TypeORM + PostgreSQL

The frontend communicates with the backend through REST APIs to fetch podcast data, episodes, and search results in real-time.

It is designed to be:

* ✅ Scalable
* ✅ SEO-friendly
* ✅ Developer-friendly for team collaboration

---

This repository contains both the **Backend (NestJS)** and the **Frontend (Next.js)** for the Podcast platform.

---

# 🧠 Backend – NestJS

This is the backend service for the Podcast platform, built with **NestJS**, **TypeORM**, and **PostgreSQL**.

---

## ✅ Backend Requirements

Make sure you have the following installed on your machine:

* **Node.js** (v18 or later recommended)
* **PostgreSQL**
* **npm**

---

## ⚙️ Backend Project Setup

### 1️⃣ Install Dependencies

```bash
npm install
```

---

## 🗄️ Database Setup (PostgreSQL)

### 2️⃣ Create Database Using Script

```bash
npm run db:create
```

This command runs:

```bash
psql -U postgres -c "CREATE DATABASE podcast_db"
```

---

### 3️⃣ Create `.env` File

Create a `.env` file in the project root and add the following:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=*****
DB_NAME=podcast_db
```

> ⚠️ Make sure the credentials match your PostgreSQL configuration.

---

### 4️⃣ Run Database Migrations

```bash
npm run migration:run
```

This will create the required tables inside the database.

---

## 🚀 Running the Backend

### 5️⃣ Run in Development Mode

```bash
npm run start:dev
```

The server will start on:

```text
http://localhost:4000
```

(or based on your `main.ts` configuration)

---

## ✅ Verify Successful Backend Run

* You should see a message like:

```text
Nest application successfully started
```

* Test any API endpoint using:

  * Browser
  * Postman
  * Thunder Client

---

## 📦 Useful Backend Scripts

```json
"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js",
"migration:generate": "npm run typeorm -- -d src/data-source.ts migration:generate src/migrations/init",
"migration:run": "npm run typeorm -- -d src/data-source.ts migration:run",
"db:create": "psql -U postgres -c \\\"CREATE DATABASE podcast_db\\\""
```

---

## 🛑 Common Backend Issues

* ❌ **Database connection error**

  * Check your `.env` file
  * Make sure PostgreSQL service is running

* ❌ **Migration errors**

  * Make sure the database exists before running migrations

---

## 🧑‍💻 Backend Tech Stack

* **NestJS**
* **TypeORM**
* **PostgreSQL**

---

# 🎨 Frontend – Next.js

This is the frontend of the Podcast platform, built using **Next.js**, **React**, and **Tailwind CSS**.

---

## ✅ Frontend Requirements

Make sure you have the following installed:

* **Node.js** (v18 or later recommended)
* **npm**

---

## ⚙️ Frontend Project Setup

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Create `.env` File for Frontend

Create a `.env.local` file in the frontend root and add:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> ⚠️ This should match your backend URL.

---

## 🚀 Running the Frontend

### 3️⃣ Run in Development Mode

```bash
npm run dev
```

The frontend will start on:

```text
http://localhost:3000
```

---

## ✅ Verify Successful Frontend Run

* Open your browser and go to:

```text
http://localhost:3000
```

* Make sure:

  * Pages load correctly
  * API requests are connecting to the backend

---


## 🧑‍🎨 Frontend Tech Stack

* **Next.js**
* **React**
* **Tailwind CSS**

---

✅ The frontend is now ready to communicate with the NestJS backend successfully.


