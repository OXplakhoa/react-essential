export default function Tabs({children, button, ButtonContainer = "menu"}){
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