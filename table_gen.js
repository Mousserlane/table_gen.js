function generate_body(source, target) {
    var body = document.getElementById(target) || document.getElementsByTagName('tbody')[0];
    for (let i = 0; i < source.length; i++) {
        // We can also use for...of
        var row = body.insertRow(i)
        for (key in source[i]) {
        var cell = row.insertCell()
        var data = document.createTextNode(source[i][key])
        cell.appendChild(data);
        }
    }
}