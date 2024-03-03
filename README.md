<h1 align="center">
    Coffy Express
</h1>

<p align=center>Next + Sanity (headless CMS) + GraphQL + Stripe payment.</p>

> Project status: Completed :heavy_check_mark:

![Captura de tela 2024-03-02 204655 (1)](https://github.com/Icegreeen/Coffy-Express/assets/56550632/6ad806ec-c98f-43eb-802d-96bc0b90130b)
![Captura de tela 2024-03-02 204655](https://github.com/Icegreeen/Coffy-Express/assets/56550632/e6c45452-c867-40a0-9fea-da3b9c562295)
![Captura de tela 2024-03-02 211303](https://github.com/Icegreeen/Coffy-Express/assets/56550632/f20e5d28-2df2-4525-b69f-698548100ca9)
![Captura de tela 2024-03-02 211407](https://github.com/Icegreeen/Coffy-Express/assets/56550632/c11ac009-f102-4395-9029-42a9f650fe01)
![Captura de tela 2024-03-02 210810](https://github.com/Icegreeen/Coffy-Express/assets/56550632/e326a68a-49f0-4291-8d9c-df1ea8a8be43)
![Captura de tela 2024-03-02 204655](https://github.com/Icegreeen/Coffy-Express/assets/56550632/3922d752-b015-4fdd-b0e7-12740e985e5e)
## Stripe payment
![Captura de tela 2024-03-02 211058](https://github.com/Icegreeen/Coffy-Express/assets/56550632/67e5d050-7ce9-43c6-b38a-c398fe8c1639)
## Success payment
![Captura de tela 2024-03-02 210930](https://github.com/Icegreeen/Coffy-Express/assets/56550632/91092f03-e5e0-459e-a220-81bb86880c42)

                      
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

#### Install dependencies & execute web application in development mode
```bash
yarn
yarn dev
```
Open the url http://localhost:3000/ in your browser to see the application

#### Execute Sanity (headless CMS) in development dev
```bash
cd sanity
yarn dev
```
Open url http://localhost:3333/ in your browser to manage resources.

![Captura de tela 2024-03-02 214426](https://github.com/Icegreeen/Coffy-Express/assets/56550632/4023b9a3-755c-4b49-8a40-1a6758aaf4d1)

![Captura de tela 2024-03-02 214304](https://github.com/Icegreeen/Coffy-Express/assets/56550632/e4a36fe0-cb06-4a01-85ce-e55c8331343e)


# :postbox: Faq

**Question:** What are the technologies used in this project?

**Answer:** [Sanity](https://www.sanity.io/), [Stripe](https://stripe.com/), [Shadcn/ui](https://ui.shadcn.com/) and [NextJS](https://nextjs.org/).

# :bug: Issues

Feel free to **file a new issue** with a respective title and description. If you already found a solution to your problem, **I would love to review your pull request**!

# :tada: Contributing

Check out the [contributing](https://github.com/Icegreeen/) page to see the best places to file issues, start discussions and begin contributing



