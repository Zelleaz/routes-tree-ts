import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import './appendForm.scss'
import {val} from "../../utils/val";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {appendNode} from "../../store/mainReducer/creators";
import {getRootRoute} from "../../utils/getRootRoute";
import FormError from "./FormError";
import {findTree} from "../../utils/findTree";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AppendForm: FC<{baseRoute: string}> = ({ baseRoute }) => {
    const [formData, setFormData] = useState<{ title: string, route: string }>({
        route: '',
        title: ''
    })
    const [error, setError] = useState('')

    const rootTree = useTypedSelector(state => state.main)
    const dispatch = useAppDispatch()

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        const {title, route} = formData
        if (!val(title) || !val(route)) {
            return setError('Все поля должны быть заполнены!')
        }

        const candidate = findTree(rootTree, `${baseRoute}/${route.trim().replaceAll(' ', '_')}`)

        if (!candidate) {
            dispatch(appendNode({
                route: `${baseRoute}/${route.trim().replaceAll(' ', '_')}`,
                title,
                nodes: []
            }, baseRoute))

            setFormData({
                route: '',
                title: ''
            })
        } else {
          setError('Такой узел уже существует!')
        }
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const attr = e.target.getAttribute('name')
        const value = e.target.value;


        ( error && setError('') );
        ( attr && setFormData(prev => ({
            ...prev,
            [attr]: value
        })) )
    }

    useEffect(() => {
        setError('')
        setFormData({
            route: '',
            title: ''
        })
    }, [baseRoute])

    return (
        <form onSubmit={submitHandler} className='form'>
            <h2 className="form__title">Добавить узел</h2>
            <legend className="form-legend">
                Заголовок
                <input
                    required
                    name='title'
                    type="text"
                    className="form__input"
                    value={formData['title']}
                    onChange={changeHandler}
                />
            </legend>

            <legend className="form-legend">
                Путь
                <input
                    required
                    name='route'
                    type="text"
                    className="form__input"
                    value={formData['route']}
                    onChange={changeHandler}
                />
            </legend>

            <button className="btn">Добавить</button>

            {error && <FormError reason={error} />}
        </form>
    );
};

export default AppendForm;