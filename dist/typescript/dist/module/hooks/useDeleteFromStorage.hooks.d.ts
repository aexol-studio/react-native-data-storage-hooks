export function useDeleteFromStorage(): {
    deleteItem: (key: any) => Promise<void>;
    clearAll: () => Promise<void>;
};
