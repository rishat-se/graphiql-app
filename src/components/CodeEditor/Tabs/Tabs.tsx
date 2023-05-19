import React, { RefObject, useEffect } from 'react';
import styles from './Tabs.module.scss';
import Image from 'next/image';
import PlusImg from '../../../../public/icons/plus.svg';
import { API_BASE_LINK } from '@/constants';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addNewTab, removeTab, setCurrentTab, saveCurrentTab } from '@/store/slices/editorSlice';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';

interface TabsProps {
  inputEditorRef: RefObject<ReactCodeMirrorRef>;
}

function Tabs({ inputEditorRef }: TabsProps) {
  const dispatch = useAppDispatch();
  const { current, tabs } = useAppSelector((state) => state.editor);
  const TABS_LIMIT = 10;

  useEffect(() => {
    return () => {
      dispatch(saveCurrentTab());
    };
  }, [dispatch]);

  const addNewTabHandler = () => {
    dispatch(addNewTab());
    inputEditorRef.current?.view?.focus();
  };

  const removeTabHandler = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    event.stopPropagation();
    dispatch(removeTab(id));
  };

  const setCurrentTabHandler = (id: number) => {
    dispatch(saveCurrentTab());
    dispatch(setCurrentTab(id));
  };

  return (
    <div className={`${styles.tabs} ${tabs.length ? styles.tabs_active : ''}`}>
      <ul className={styles.tabs__list}>
        {!!tabs.length &&
          tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setCurrentTabHandler(tab.id)}
              className={`${styles.tabs__item} ${
                tab.id === current.id ? styles.tabs__item_active : ''
              }`}
            >
              <span className={styles.tabs__title}>&#8249;untitled&#8250;</span>
              <button
                className={styles.tabs__delete}
                onClick={(event) => removeTabHandler(event, tab.id)}
              >
                <Image
                  className={styles.tabs__delete_img}
                  src={PlusImg}
                  alt="delete tab"
                  width={20}
                  height={20}
                />
              </button>
            </li>
          ))}
      </ul>

      <div className={styles.tabs__wrapper}>
        {tabs.length <= TABS_LIMIT && (
          <button className={styles.tabs__add} onClick={addNewTabHandler}>
            <Image src={PlusImg} width={24} height={24} alt="add tab" />
          </button>
        )}
        <Link href={API_BASE_LINK} className={styles.tabs__api}>
          RickAndMortyQL
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Tabs);
