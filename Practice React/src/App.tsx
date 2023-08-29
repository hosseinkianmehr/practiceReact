
import './App.css'
import { useAppDispatch, useAppSelector } from './store/hook'
import { themeStore } from './store/theme'

function App() {
const dispatch = useAppDispatch()
const select = useAppSelector(state => state.theme.dark)
const handel =()=>{dispatch(themeStore.dark({dark:select?false:true}));}
console.log(select)
  return (
    <>
    <button onClick={handel}>click</button>
      <div>hello</div>
      <p>{select?'dark':'ligth'}.type</p>
    </>
  )
}

export default App
