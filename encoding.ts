export function main() {
    let buf = io.newBuffer()
    let w = encoding.newEncoderWindows1252().writer(buf)
    w.write("áüñ")
    fmt.println(buf.string())

    let r = strings.newReader(buf.string())
    r = encoding.newDecoderWindows1252().reader(r)
    let s = ioutil.readAll(r)
    fmt.println(convert.toString(s))
}
