# eBay Clone / (ebay-clone)

### Learn how to build this!

If you'd like a step-by-step guide on how to build this just **CLICK THE IMAGE BELOW**

[![GO TO JOHN WEEKS DEV TUTORIAL VIDEOS](https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/1d1d9f20-0f5b-4d00-8d5a-9aca0d3e414c)](https://www.youtube.com/watch?v=LtPYuFhYf1w)

Come and check out my YOUTUBE channel for lots more tutorials -> https://www.youtube.com/@johnweeksdev

**LIKE**, **SUBSCRIBE**, and **SMASH THE NOTIFICATION BELL**!!!

## App Setup (localhost)

```
git clone https://github.com/John-Weeks-Dev/ebay-clone.git

cp .env.example .env
```

You'll have to set up a Supabase account & Stripe account, then add all of the details into your .env file.

Once you've connected your application to Supabase. You'll also need to set up the Auth Providers:
    Google [Google](https://cloud.google.com)
    
    https://supabase.com/docs/guides/auth/social-login/auth-google
    
Now run the command to migrate your database tables and run your seed file.
    
```
npx prisma migrate dev --name init

npx prisma generate

npx prisma db seed

npm i

npm run dev
```

You should be good to go! If you need any more help, take a look at the tutorial video by clicking the image above.

