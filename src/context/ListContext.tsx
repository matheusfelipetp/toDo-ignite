import { ReactNode, createContext, useState } from 'react';

interface IList {
  content: string;
  id: string;
  isChecked: boolean;
}

interface IListContext {
  list: IList[];
  setList: React.Dispatch<React.SetStateAction<IList[]>>;
}

interface IListProvider {
  children: ReactNode;
}

export const ListContext = createContext({} as IListContext);

function ListProvider({ children }: IListProvider) {
  const [list, setList] = useState<IList[]>([]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
}

export default ListProvider;
