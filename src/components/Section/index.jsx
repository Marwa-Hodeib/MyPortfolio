

const Section = ({title, content}) => {
    const hasContent = title && content
    console.log(hasContent)
return (
    <>
        <h1>{title}</h1>
       <p>{content}</p> 
    </>

)
    

}

export default Section