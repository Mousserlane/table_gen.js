# table_gen.js
Table Generator with Vanilla JS

# Abstract
Inserting element using innerHTML is super easy barely an inconvenience. But it might open a door to XSS attack.

So I made this to make table generation safe and easy.


# Usage

* Add this to your html by adding this script:

```<script src="location/to/table_gen.js" />```

* Make sure to import this before your `main.js` script

* Call it by invoking `generate_body(source, target)` in your `main.js` script

# Additional Notes
- For now, I've only written the `generate_body` part. `generate_head` and other functionallity should come later (when I feel like doing it 👀) 
