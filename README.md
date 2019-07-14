# table_gen.js
Table Generator with Vanilla JS

# Abstract
Inserting element using innerHTML is super easy barely an inconvenience. But it might open a door to XSS attack.

So I made this thing to make table generation safe and easy.

# Usage

* Add this to your html by adding this script:

```<script src="location/to/table_gen.js" />```

* Make sure to include this before your `main.js` script

* To generate head, inovke the `generate_head(source, useCustomHeader?, [names]?, target?)` method in your `main.js` script
* To generate body, invoke the `generate_body(source, target?)` method in your `main.js` script
