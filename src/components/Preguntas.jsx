export const PreguntasFrecuentes = ({children, question}) => {
    return (
        <details className="w-7/12 mb-5 dark:text-white" name="cookies">
            <summary className="text-xl tracking-wide font-semibold mb-3 dark:text-white">{question}</summary>
            {children}
        </details>
    )
}