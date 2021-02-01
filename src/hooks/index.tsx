import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import useSWR from 'swr';

const BASE_URL = 'https://www.atg.se/services/racinginfo/v1/api';

export const useFetchGameScheduleId = (
  searchInput: string,
  shouldFetch: boolean
) => {
  const { data: result, error } = useSWR(
    !shouldFetch ? null : `${BASE_URL}/products/${searchInput.toUpperCase()}`
  );

  const [id, setId] = useState('');

  // if (products && products.upcoming.length > 0) {
  //   setId(products.upcoming[0].id);
  // } else if (products && products.results.length > 0) {
  //   setId(products.results[0].id);
  // }
  const { data: game } = useSWR(() => `${BASE_URL}/games/${id}`);
  return { game, error };
};

// export const useFetchGameData = (id: string) => {
//   return useSWR(() => `${BASE_URL}/games/${id}`, fetcher);
// };

export const useRequest = (
  path: string,
  shouldFetch: boolean,
  name: string
) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = BASE_URL + path + '/' + name;
  const { data: product, error } = useSWR(shouldFetch ? url : null);

  // const { data: game, error } = useSWR(() =>
  //   product.upcoming.length > 0
  //     ? `${BASE_URL}/games/${product.upcoming[0].id}`
  //     : `${BASE_URL}/games/${product.results[0].id}`
  // );
  return { product, error };
};

export const useGameSchedule = (
  path: string,
  shouldFetch: boolean,
  name: string,
  id: string
) => {
  const { product } = useRequest('/products', shouldFetch, name);
};
