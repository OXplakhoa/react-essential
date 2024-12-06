export default function Tabs({children, button, ButtonContainer}){
    // const ButtonStyle = buttonContainer;
    return (
        <>
            <ButtonContainer>
                {button}
            </ButtonContainer>
            {children}
        </>
    )
}