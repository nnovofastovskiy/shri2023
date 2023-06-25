'use client'

import { SidebarProps } from "./Sidebar.props";
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCinema, selectFilterModule, selectGenre } from '@/redux/features/filter/selector'
import { filterActions } from "@/redux/features/filter";

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
    // const filter = useSelector((state) => selectGenre(state));
    const dispatch = useDispatch();

    const setTitle = useCallback((payload: string) => {
        dispatch(filterActions.setTitle(payload));
    }, []);

    const setGenre = useCallback((payload: string) => {
        dispatch(filterActions.setGenre(payload));
    }, []);

    const setCinema = useCallback((payload: string) => {
        dispatch(filterActions.setCinema(payload));
    }, []);

    // const [selectElements, setSelectElements] = useState<HTMLDivElement[]>();
    // useEffect(() => {
    //     document.addEventListener('click', (e) => {
    //         console.log(e.target)
    //     })

    // }, []);
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
                onChangeHandler={setTitle}
            />
            <Select
                className={styles.item}
                label="Жанр"
                placeholder="Выберите жанр"
                dropItems={ganres}
                onChangeHandler={setGenre}
                selectHandler={(state) => selectGenre(state)}
            />
            <Select
                className={styles.item}
                label="Кинотеатр"
                placeholder="Выберите кинотеатр"
                dropItems={cinemas}
                onChangeHandler={setCinema}
                selectHandler={(state) => selectCinema(state)}
            />
        </aside>
    );
}