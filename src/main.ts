function main(): void {
    console.log("HELLO TS")
    say_hello()
    console.log(add(2, 8))
}
main()

function say_hello(): void {
    console.log("HELLO")
}

function add(x: number, y: number): number {
    return x + y
}
