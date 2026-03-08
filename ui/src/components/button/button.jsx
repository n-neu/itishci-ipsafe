import './button.css'

const colors = {"info": "#033155", "error": "#B8533C"};

export default function Button({type, text, onClick}) {
const col = colors[type];

return (
<button className='btn' onClick={onClick} style={{backgroundColor: col}}>
    {text}
</button>
)
}