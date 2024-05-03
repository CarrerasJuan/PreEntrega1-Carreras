import './ButtonComponent.css'
export default function ButtonComponent({nombre}){
    return (
        <>
        <button className="btn">{nombre}</button>
        </>
    );
}