import css from "../Error/Error.module.css"

export default function Error() {
    return (
        <p className={css.error}>Упс, сталась помилка, перезавантажте сторінку.</p>
    )
}