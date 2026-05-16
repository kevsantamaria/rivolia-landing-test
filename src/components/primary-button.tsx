interface PrimaryButtonProps {
  text: string
  variant?: 'primary' | 'secondary' | 'card'
}

const buttonVariants = {
  primary: 'bg-primary px-12 py-5 text-sm text-white hover:bg-button-primary-hover',
  secondary:
    'bg-button-secondary px-12 py-5 text-lg text-white hover:bg-button-secondary-hover lg:text-base hover:shadow-[0_8px_32px_rgba(192,57,43,0.32)]',
  card: 'mt-2 bg-card-button px-4 py-2 text-sm text-foreground shadow-sm hover:bg-button-active hover:shadow-md sm:px-8 sm:py-3',
}

export default function PrimaryButton({ text, variant = 'secondary' }: PrimaryButtonProps) {
  return (
    <button
      className={`inline-flex w-full items-center justify-center rounded font-bold tracking-widest text-nowrap uppercase transition-all duration-200 active:scale-[0.97] ${buttonVariants[variant]}`}
    >
      {text}
    </button>
  )
}
