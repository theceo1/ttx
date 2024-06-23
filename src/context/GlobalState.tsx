import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';

// Define the state structure
interface State {
  accountBalance: number;
  recentTransactions: Array<{
    id: number;
    type: string;
    coin: string;
    amount: number;
    value: number;
  }>;
  marketOverview: Array<{
    coin: string;
    price: number;
    change: number;
    marketCap: number;
  }>;
}

// Define action types and payloads
interface SetAccountBalanceAction {
  type: 'SET_ACCOUNT_BALANCE';
  payload: number;
}

interface SetRecentTransactionsAction {
  type: 'SET_RECENT_TRANSACTIONS';
  payload: Array<{
    id: number;
    type: string;
    coin: string;
    amount: number;
    value: number;
  }>;
}

interface SetMarketOverviewAction {
  type: 'SET_MARKET_OVERVIEW';
  payload: Array<{
    coin: string;
    price: number;
    change: number;
    marketCap: number;
  }>;
}

type Action =
  | SetAccountBalanceAction
  | SetRecentTransactionsAction
  | SetMarketOverviewAction;

// Initial state
const initialState: State = {
  accountBalance: 12345.67,
  recentTransactions: [
    { id: 1, type: 'Bought', coin: 'BTC', amount: 0.05, value: 1234.56 },
    { id: 2, type: 'Sold', coin: 'ETH', amount: 0.25, value: 789.0 },
    { id: 3, type: 'Deposited', coin: 'USDC', amount: 500, value: 500.0 },
  ],
  marketOverview: [
    { coin: 'Bitcoin', price: 56789.0, change: 2.5, marketCap: 1.2 },
    { coin: 'Ethereum', price: 1789.0, change: -1.2, marketCap: 210 },
    { coin: 'USDC', price: 1.0, change: 0.1, marketCap: 55 },
  ],
};

// Create contexts
const GlobalStateContext = createContext<State>(initialState);
const GlobalDispatchContext = createContext<Dispatch<Action>>(() => null);

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_ACCOUNT_BALANCE':
      return { ...state, accountBalance: action.payload };
    case 'SET_RECENT_TRANSACTIONS':
      return { ...state, recentTransactions: action.payload };
    case 'SET_MARKET_OVERVIEW':
      return { ...state, marketOverview: action.payload };
    default:
      return state;
  }
};

// Global provider
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

// Custom hooks
export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
