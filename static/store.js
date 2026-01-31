const store = $store(
	{
		url: "https://gixtuh.vercel.app",
		wispurl:
			_CONFIG?.wispurl ||
			(location.protocol === "https:" ? "wss" : "ws") +
				"://" +
				location.host +
				"/wisp/",
		bareurl:
			_CONFIG?.bareurl ||
			(location.protocol === "https:" ? "https" : "http") +
				"://" +
				location.host +
				"/bare/",
		proxy: "",
		transport: "/epoxy/index.mjs",
	},
	{ ident: "settings", backing: "localstorage", autosave: "auto" }
);
self.store = store;
