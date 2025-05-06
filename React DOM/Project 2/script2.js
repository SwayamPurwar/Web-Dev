import btn from './script3.js'
import logo from './script4.js'

const nav = ()=>{
    const navbar = React.createElement("div",{class:"nav"},["This is Navbar" , btn()])
    return navbar
}

export default nav