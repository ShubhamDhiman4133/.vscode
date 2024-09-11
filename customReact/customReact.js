/*function customRender(reactElement,container){
    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
}
    */
function customRender(reactElement,container){
    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.Children
    for (const Prop in reactElement.props) {
        if (Prop === 'Children') continue;
        domElement.setAttribute(Prop,reactElement.props[Prop])
    }

         container.appendChild(domElement)
}
const reactElement={
     type :'a',
    props: {
    href: 'https://google.com',
    target :'_blank'
    }, 
    Children:'Click me to visit page'
}
const container = document.querySelector('#root')
customRender(reactElement, container )