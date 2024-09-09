export const getLocalStore = (name: string) => {
  if (typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name);

    return ls ? JSON.parse(ls) : null;
  }

  return null;
};

export const setLocalStore = (name: string, data: any) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(name, JSON.stringify(data));
  }

  return null;
};
