import { SidebarProps } from "./Sidebar.props";
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";

const ganres = [
    'Комедии',
    'Ужасы',
    'Мелодрамы'
];

const cinemas = [
    'IMax',
    'Космик',
    'Каро'
];

export function Sidebar({ className, ...props }: SidebarProps): JSX.Element {

    return (
        <aside
            className={cn(className, styles.sidebar)}
            {...props}
        >
            <h3 className={styles.title}>Фильтр поиска</h3>
            <Input
                className={styles.item}
                label="Название"
                placeholder="Введите название"
            />
            <Select
                className={styles.item}
                label="Жанр"
                placeholder="Выберите жанр"
                dropItems={ganres}
            />
            <Select
                className={styles.item}
                label="Кинотеатр"
                placeholder="Выберите кинотеатр"
                dropItems={cinemas}
            />
        </aside>
    );
}