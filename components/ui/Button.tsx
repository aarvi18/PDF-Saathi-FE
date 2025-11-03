// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  )
}
