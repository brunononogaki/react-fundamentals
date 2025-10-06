export default function Tabs({ children, buttons, buttonsType = "menu" }) {
  const ButtonsType = buttonsType
  return (
    <>
      <ButtonsType>{buttons}</ButtonsType>
      {children}
    </>
  );
}
