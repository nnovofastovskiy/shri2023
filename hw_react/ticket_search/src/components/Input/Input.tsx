import { InputProps } from "./Input.props";
import cn from 'classnames';
import styles from './Input.module.css';

export function Input({ className, label, placeholder, onChangeHandler, ...props }: InputProps) {
    return (
        <div className={cn(className, styles.wrapper)} {...props}>
            <label className={styles.label}>
                {label}
                <input
                    className={styles.input}
                    type="text"
                    placeholder={placeholder}
                    onChange={e => onChangeHandler(e.target.value)}
                />
            </label>
        </div>
    )
}