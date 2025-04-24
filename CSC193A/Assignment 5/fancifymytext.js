function alertFn() {
    alert("Hello, world!");
}

function bigger() {
    document.getElementById("txtArea").style.fontSize = "24pt";
}

function handleRadioClick() {
    const ta = document.getElementById("txtArea");
    if (document.getElementById("fancyShmancy").checked) {
        ta.style.fontWeight = "bold";
        ta.style.color = "blue";
        ta.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked){
        ta.style.fontWeight = "normal";
        ta.style.color = "black";
        ta.style.textDecoration = "none";
    }
}

function moo() {
    const ta = document.getElementById("txtArea");
    var str = ta.value.toUpperCase();
    var parts = str.split(" ");
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].charAt(parts[i].length - 1) === '.')
            parts[i] = parts[i].substring(0, parts[i].length - 1) + "-Moo.";
    }
    str = parts.join(" ");
    ta.value = str;
}