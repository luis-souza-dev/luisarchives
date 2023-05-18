'use client'
export default function Clickable({
    click,
    children
}: {
  click: () => void,
  children: React.ReactNode
}) {

    return (
        <div onClick={click}>
            { children }
        </div>
    )
}
