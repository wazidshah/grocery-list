# Goa For You

[Goa for you](https://goaforyou.in) is a crowdsourced social welfare benefit
initiative. A listing website to locate the nearest home delivery service for
your daily essentials in terms of groceries and other basic requirements.

This is the source code for this application.

## Development

This is a purely client side application, written with [vue.js](https://vuejs.org/).
It uses a [crowdsourced Google Sheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vTTUD7zK1YRnkzoaVoD33VGMUywCaFhS9gRZXa2_SAEb5PnIne7YWxWqy8k1vYvdc5ocT75_KleDmSX/pub?gid=0&single=true&output=csv)
as the source of data. Since this is a CORS request, we can't just open the
file in your browser and work on it - you need a very simple HTTP server.

On your terminal, run the following command:

```bash
python -m SimpleHTTPServer
```

If this gives you errors, try:

```bash
python3 -m http.server
```

Now you can access the service at [localhost:8000](http://localhost:8000). Any
changes you make can be tested by simply reloading the page.