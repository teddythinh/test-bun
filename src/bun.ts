const server = Bun.serve({
    port: Bun.env.PORT,
    hostname: "localhost",
    development: true,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") return new Response("Homepage!");
        if (url.pathname === "/blog") return new Response("Blog!");
        throw new Error("404 Not found");
    },

    // Handle error for server-side
    // error(error) {
    //     return new Response(`<pre>${error}\n${error.stack}</pre>`, {
    //         headers: {
    //             "Content-Type": "text/html",
    //         },
    //     });
    // }

    // TLS support
    // tls: {
    //     key: Bun.file("./key.pem"),
    //     cert: Bun.file("./cert.pem"),
    // }
});

console.log(`Listening on http://localhost:${server.port} ...`);

// server.stop()