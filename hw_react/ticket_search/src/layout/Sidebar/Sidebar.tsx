'use client';

import { SidebarProps } from "./Sidebar.props";
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCinema, selectFilterModule, selectGenre, selectTitle } from '@/redux/features/filter/selector';
import { filterActions } from "@/redux/features/filter";
import { useGetCinemasQuery, useGetMoviesInCinemaQuery } from "@/redux/services/movieApi";
import { selectGenresModule } from '@/redux/features/genres/selector';
import { selectFilteredFilms } from '@/redux/features/films/selector';
import { filmsActions } from "@/redux/features/films";
import { TypeRootState } from "@/redux/store";

export function Sidebar({ className, ...props }: SidebarProps): JSX.Element {
    const dispatch = useDispatch();
    const { genres } = useSelector((state: TypeRootState) => selectGenresModule(state));
    console.log(genres);

    const { data: cinemas } = useGetCinemasQuery(null);
    const selectCinemaO = cinemas?.map(c => (
        {
            text: c.name,
            id: c.id
        }));

    // const filter = useSelector((state) => selectFilterModule(state));
    // const { data: filmsInCinema } = useGetMoviesInCinemaQuery(filter.cinema.id);
    // const dispatch = useDispatch();
    // dispatch(filmsActions.setFilteredFilms(filmsInCinema));

    const setTitle = useCallback((payload: string) => {
        dispatch(filterActions.setTitle(payload));
    }, []);

    const setGenre = useCallback((payload: string) => {
        dispatch(filterActions.setGenre(payload));
    }, []);

    const setCinema = useCallback((payload: string) => {
        dispatch(filterActions.setCinema(payload));
    }, []);
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
                selectHandler={(state) => selectTitle(state)}
            />
            <Select
                className={styles.item}
                label="Жанр"
                placeholder="Выберите жанр"
                dropItems={genres}
                onChangeHandler={setGenre}
                selectHandler={(state) => selectGenre(state)}
            />
            <Select
                className={styles.item}
                label="Кинотеатр"
                placeholder="Выберите кинотеатр"
                dropItems={selectCinemaO || []}
                onChangeHandler={setCinema}
                selectHandler={(state) => selectCinema(state)}
            />
        </aside>
    );
}