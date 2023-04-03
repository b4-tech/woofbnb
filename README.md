# Woofbnb: A Full Stack Airbnb Clone

This is a repository for a Full Stack Airbnb Clone with Next.js 13. This application provides functionality and features like real Airbnb including booking system, authentication, image upload and advanced search.

![Demo](link_to_screenshot_or_demo_video)

## Technologies Used

- Next.js
- React
- Tailwind
- Prisma
- MongoDB
- NextAuth
- Cloudinary

## Features

- Full responsiveness and modern design using Tailwind
- Credential, Google and Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Booking / Reservation system with calendars implemented using react-date-range
- Pricing calculation, favorites system and advanced search algorithm
- Creation and deletion of properties
- Shareable URL filters

## Prerequisites

- Node version 14.x

## Setup

1. Clone the repository

```bash
git clone https://github.com/AntonioErdeljac/next13-airbnb-clone.git
```

2. Install packages

```bash
npm i
```

3. Setup .env file

```bash
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

4. Setup Prisma

```bash
npx prisma db push
```

5.Start the app

```bash
npm run dev
```

## Available Commands

You can run the following commands using `npm run [command]`.

```bash
# Starts a development instance of the app
npm run dev

# Creates a production build of the app
npm run build

# Starts the app in production mode
npm run start

# Lints the app according to the rules specified in .eslintrc
npm run lint
```
