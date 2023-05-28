import {AiOutlineCloseCircle} from "react-icons/ai"
const MarkerModalForm = (props) => {
    if(props.open) {
        return(
            <div className="marker__modal_form">
                <h3>Мета:{props.data.project}</h3>
                <h4>Автор:{props.data.user}</h4>
                <p>Категорія:{props.data.category}</p>
                <p>Створенно:{props.data.createdAt}</p>
                <h3>Годин:{props.data.hours}/год</h3>
                <button onClick={()=> props.onClose()}>
                    <AiOutlineCloseCircle />
                </button>
            </div>
        )
    }else {
        return null
    }
}
export default MarkerModalForm;