import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Wrapper from './wrapper.jsx'




createRoot(document.getElementById('root')).render(
<Wrapper>  
    <App />
</Wrapper>  

)
