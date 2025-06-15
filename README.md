# 🔍 Google Search Clone

A Google Search Engine clone built with **Next.js**, allowing users to log in via their Google account and perform real-time searches using the **Google Custom Search API**. Designed to closely replicate the original Google search experience, including text and image search functionality.

---

## 🚀 Live Demo

https://google-search-engine-eta.vercel.app/

---

## 📌 Features

- 🔐 **Google Login with NextAuth.js**  
  Users can log in securely with their Google accounts using OAuth 2.0 via NextAuth.js.

- 🔎 **Real-Time Search via Google API**  
  Search results are fetched from the **Google Custom Search API**, including title, link, snippet, and image (if available).

- 🖼️ **Image Search Support**  
  Option to view image results based on the query, similar to Google Images.

- 💡 **Google-Style UI**  
  Clean, minimalistic, and responsive design replicating the look of Google’s search engine, built using **Tailwind CSS**.

- ⚡ **Fast Performance with SSR**  
  Built with Next.js and server-side rendering for fast load times and improved SEO.

- 🔐 **Session Management**  
  User sessions are managed securely; only authenticated users can access the search functionality.

---

## 🛠️ Tech Stack

- **Frontend & Framework**: Next.js, React.js  
- **Authentication**: NextAuth.js with Google OAuth  
- **Search API**: Google Custom Search JSON API  
- **Styling**: Tailwind CSS  
- **State & Session**: React Context + NextAuth session management

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/google-search-clone.git
cd google-search-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Google OAuth Credentials
Go to Google Developer Console

Create a new project

Enable OAuth consent screen

Create OAuth client ID for Web Application

Add authorized redirect URI:
http://localhost:3000/api/auth/callback/google

Copy the Client ID and Client Secret

### 4. Google Custom Search API
Go to [Programmable Search Engine](https://programmablesearchengine.google.com/)

Create a new search engine

Get your Search Engine ID

Enable Custom Search JSON API in Google Developer Console

Get your API Key

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_API_KEY=your_google_api_key
GOOGLE_CSE_ID=your_custom_search_engine_id
```

### 5. Run the Development Server
```bash
npm run dev
```

