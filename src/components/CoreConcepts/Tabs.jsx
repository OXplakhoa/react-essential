export default function Tabs({children, button, buttonContainer}){
    const ButtonStyle = buttonContainer;
    return (
        <>
            <ButtonStyle>
                {button}
            </ButtonStyle>
            {children}
        </>
    )
}