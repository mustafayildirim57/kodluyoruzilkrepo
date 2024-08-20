//  arrow fonksiyonu

function hello(firstName) {
    console.log(`merhaba ${firstName}`) 
}
hello('js')

const helloFuncV1 = (firstName) => {console.log(`hello ${firstName}`)}
helloFuncV1('helloFuncV1')

const helloFuncV2 = firstName => console.log(`hello ${firstName}`)
helloFuncV1('helloFuncV2')

const helloFuncV3 = (firstnama, lastName) => console.log(`hello ${firstnama} ${lastName}`) // bir islem, bir parametre
helloFuncV3('helloFuncV3', 'js')

const helloFuncV4 = (firstnama, lastName) => {
    let info = `hello ${firstnama} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4('helloFuncv4', 'orther info')

