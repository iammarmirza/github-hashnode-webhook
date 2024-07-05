# Github Hashnode Middleware

This is a serverless function to establish a two way connection from Hashnode to Github.

## How to set your own serverless function?

### Step 1

Create a Personal access token in your github account with repo and workflow permissions like this. Copy it and paste it somewhere safe for future use.

![](https://raw.githubusercontent.com/iammarmirza/github-hashnode-webhook/main/public/github-pat.png)

### Step 2

Fork this repo and deploy it on vercel.

### Step 3

After deployment make sure you have turned off the vercel authentication in your project's deployment protection settings.

### Step 4

Go to your blog's dashboard on Hashnode and create a new webhook like this. \
Select the necessary events and paste your deployment URL along with `/api` route as the endpoint URL.

![](https://raw.githubusercontent.com/iammarmirza/github-hashnode-webhook/main/public/hashnode-webhook.png)

### Step 5

Now copy your webhook's secret key.

![](https://raw.githubusercontent.com/iammarmirza/github-hashnode-webhook/main/public/hashnode-secret.png)

Add it as your project's  environmnent variable along with Github's personal access token you have saved before, the repository to which you have to establish connection and your github username.

![](https://raw.githubusercontent.com/iammarmirza/github-hashnode-webhook/main/public/env-vercel.png)

Redeploy your project and now your middleware should be working fine.
