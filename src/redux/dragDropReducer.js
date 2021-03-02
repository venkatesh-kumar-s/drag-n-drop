const drop = (e)=>{
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
}
const allowDrop = (e)=>{
    e.preventDefault();
}
const dragStart = (e)=>{
    e.dataTransfer.setData('text',e.target.id);
}

const dragDropReducer = (state = 0, action)=>{
    switch(action.type){
        case 'ONDROP':
            return drop(action.payload);
        case 'ONDRAG':
            return dragStart(action.payload);
        case 'ALLOWDROP':
            return allowDrop(action.payload);
        default:
            return state;
    }
}
export default dragDropReducer;