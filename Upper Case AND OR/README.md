The goal is to match `/ and /gu` and `/ or /gu` and replace them with `' AND '` and `' OR '` but if they are inside of the quotation marks, the replacement should not have taken place.

For example, if the string is `term:"cat and dog" and keyword:view or keyword:impression` it should be replaced into `term:"cat and dog" AND keyword:view OR keyword:impression`.

```
regex.test("cat and dog") // true
regex.test("cat or dog") // true
regex.test("\"cat and dog\"") // false
regex.test("\"cat and dog\" or \"cat or dog\"") // true
regex.test("\"cat and dog\" plus \"cat or dog\"") // false
```