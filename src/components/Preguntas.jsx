import '../index.css';

export const PreguntasFrecuentes = ({children, question}) => {
    return (
        <details className="w-7/12 mb-5 dark:text-white scroll-animation" name="cookies">
            <summary className="text-xl tracking-wide font-semibold mb-3 dark:text-white scroll-animation">{question}</summary>
            {children}
        </details>
    )
}