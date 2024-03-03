<h1 align="center">
    Coffy Express
</h1>

<p align=center>Next + Sanity + GraphQL + Stripe payment.</p>

> Project status: Completed :heavy_check_mark:

![black](https://github.com/Icegreeen/typescript-authentication-with-jwt/assets/56550632/55e26789-47cf-493a-b885-5c16a7957e95)


                      
# :pushpin: Table of Contents

* [Running Locally](#construction_worker-running-locally)
* [FAQ](#postbox-faq)
* [Issues](#bug-issues)
* [Contributing](#tada-contributing)

## :construction_worker: Running Locally

#### Clone repository
```bash
git clone https://github.com/Icegreeen/Coffy-Express
```

#### Define environment variables
```bash
cp .env.local.example .env.local

NEXT_PUBLIC_STRIPE_KEY=pk_live_{yourkey}
NEXT_TEST_STRIPE_KEY=pk_test_{yourkey}
```
*Make sure that all environment variables match the credentials and that postgres is running on your machine.

#### Install dependencies & execute web application in development mode
```bash
yarn
yarn dev
```

#### Execute Sanity (headless CMS) in development dev
```bash
cd sanity
yarn dev
```

# :postbox: Faq

**Question:** What are the technologies used in this project?

**Answer:** [Sanity](https://www.sanity.io/), [Stripe](https://stripe.com/), [Shadcn/ui](https://ui.shadcn.com/) and [NextJS](https://nextjs.org/).

# :bug: Issues

Feel free to **file a new issue** with a respective title and description. If you already found a solution to your problem, **I would love to review your pull request**!

# :tada: Contributing

Check out the [contributing](https://github.com/Icegreeen/) page to see the best places to file issues, start discussions and begin contributing



