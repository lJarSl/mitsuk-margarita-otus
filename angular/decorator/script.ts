function my(target, key, descriptor) {
    console.log(descriptor)
    console.log('my decorator called')
}

class A {
    @my
    method() {
        console.log('method A')
        return 1
    }
}

new A().method()