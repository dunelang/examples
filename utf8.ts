import "native"


function main() {
    let a = "δΌζε­";
    fmt.println(a.length, a.runeCount)

    fmt.println(a.indexOf("ζ"))

    for (let i = 0, l = a.length; i < l; i++) {
        fmt.printf("%x ", a[i])
    }

    fmt.println()

    for (let i = 0, l = a.runeCount; i < l; i++) {
        fmt.printf("%s ", a.runeAt(i))
    }

    fmt.println()
}