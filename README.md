<!-- <p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p> -->

<h1 align="center">SkyeAPI</h1>

<p align="center"> API framework buildt on top of express to simplify API's.
    <br> 
</p>

## 🧐 About <a name = "about"></a>

Skye is all about being a simple, easy to write and fast to set up.

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

Install dependencies

```
bun install
```

## Making your first api in SkyeAPI

More info in the [Docs]()

```
import SkyeAPI from "./lib/skyeapi";

const server = new SkyeAPI;
server.name = "SkyeAPI";
server.port = 8000;

server.get("/", {
    name: "Herjus"
})

server.start()
```


### Running the api

Run in dev mode

```
Bun run dev
```

Run in production mode

```
Bun run start
```


## ⛏️ Built Using <a name = "built_using"></a>

- [Bun](https://bun.sh/) - Runtime
- [Express](https://expressjs.com/) - Server Framework
