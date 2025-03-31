interface PropType{
    placeholder:string;
}


export default function TextInput({
    placeholder
}:PropType){
    return <input placeholder={placeholder} style={{
        padding:10,
        margin :10,
        borderColor:"black",
        borderWidth:1


    }}></input>
}