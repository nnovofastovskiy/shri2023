import cn from 'classnames';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.props';
import CloseIcon from './close.svg';
import { useEffect } from 'react';

export function Modal({ className, closeHandler, removeHandler }: ModalProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])
    return (
        <div
            className={cn(className, styles.bg)}
            onClick={(e) => {
                e.preventDefault();
                closeHandler();
            }}
        >
            <div
                className={styles.modal}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className={styles.header}>
                    <h4 className={styles.title}>Удаление билета</h4>
                    <button
                        className={cn(styles.btn, styles.close)}
                        onClick={(e) => {
                            e.preventDefault();
                            closeHandler();
                        }}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <span className={styles.text}>Вы уверены, что хотите удалить билет?</span>
                <div className={styles.btns}>
                    <button
                        className={styles.primary}
                        onClick={(e) => {
                            e.preventDefault();
                            removeHandler();
                        }}
                    >
                        Да
                    </button>
                    <button
                        className={styles.secondary}
                        onClick={(e) => {
                            e.preventDefault();
                            closeHandler();
                        }}
                    >
                        Нет
                    </button>
                </div>
            </div>
        </ div>
    )
}