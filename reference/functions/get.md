---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# GET

## Making a GET endpoint:

{% hint style="info" %}
Syntax:

```typescript
(Skye instance).get(path, function);
```
{% endhint %}

<pre class="language-typescript" data-title="index.ts" data-full-width="false"><code class="lang-typescript">const server = new SkyeAPI;

<strong>server.get("/message", function (query: any) {
</strong>    return {
        message: query.message,
    }
});

server.start();
</code></pre>

{% hint style="info" %}
&#x20;External functions also work.

```typescript
const server = new SkyeAPI;

function func(query: any) {
    return {
        message: query.message,
    }
}

server.get("/message", func);

server.start();
```
{% endhint %}

{% hint style="danger" %}
This will not work as the response needs to be a function

<pre class="language-typescript"><code class="lang-typescript"><strong>server.get("/message", {message: "yo"});
</strong></code></pre>
{% endhint %}
