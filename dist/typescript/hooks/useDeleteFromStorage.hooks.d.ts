export declare const useDeleteFromStorage: () => {
    deleteItem: (key: string) => Promise<void>;
    clearAll: () => Promise<void>;
};
