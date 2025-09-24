// use***Store

import { create } from 'zustand';
import {
  combine,
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// 커스텀 훅 -> use***

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByAmount: (value: number) => void;
};

// combine -> immer -> persit -> devtools -> subcribeWithSelector
export const useCounterStore = create<CounterStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        immer(
          combine({ count: 0 }, (setCount) => ({
            increment: () =>
              setCount((state) => {
                state.count += 1;
              }),
            decrement: () =>
              setCount((state) => {
                state.count -= 1;
              }),
            reset: () => setCount({ count: 0 }),
            incrementByAmount: (value) =>
              setCount((state) => {
                state.count += value;
              }),
          }))
        ),
        {
          name: 'counter-store',
          storage: createJSONStorage(() => sessionStorage),
        }
      ),
      {
        trace: true,
      }
    )
  )
);
