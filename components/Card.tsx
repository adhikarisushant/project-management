import clsx from 'clsx' 

const Card = ({ className, children }) => {
    return (
        <div className={clsx("rounded-3xl px-10 drop-shadow-xl bg-white", className)}>
            {children}
        </div>
    )
}

export default Card
