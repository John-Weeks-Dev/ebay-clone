# eBay Clone / (ebay-clone)

### Learn how to build this!

If you'd like a step-by-step guide on how to build this just **CLICK THE IMAGE BELOW**

[![GO TO JOHN WEEKS DEV TUTORIAL VIDEOS](https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/c4c7ac12-325a-43e3-869f-a2f40832a003)](https://www.youtube.com/watch?v=NtsbjB8QD3Y)

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

# Application Images

<img width="1100" src="https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/5878b07a-2e51-4f1c-9ae8-606c7c3e3b20">
<img width="1100" src="https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/5efcba0f-53d0-40f5-a79a-13cccd6c6eb8">
<img width="1100" src="https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/22f3e92b-9c52-41f9-88bd-3e807a47f471">
<img width="1100" src="https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/c6a8346d-9f82-4f93-9ffe-5aed13a3a72f">
<img width="1100" src="https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/3a069e2d-cb0b-4f23-a627-ca903ef953f0">
<img width="1100" src="https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/bef7e852-0a8c-44b2-9cc4-87b5b8df5bd9">
<img width="1100" src="https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/edd92c37-0b1d-4cfc-b6e3-fabc4aaa8735">
<img width="1100" src="https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/a7180d72-babd-4983-8ce6-6d745dedb2c3">
<img width="850" src="https://github.com/John-Weeks-Dev/ebay-clone/assets/108229029/7dc5e46d-0f59-4f4f-ae2c-94d91e0000ab">



