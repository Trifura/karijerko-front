import { useState } from 'react';

export const useProfileDialogs = () => {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const openEdit = () => setIsEditOpen(true);
    const closeEdit = () => setIsEditOpen(false);

    const openCreate = () => setIsCreateOpen(true);
    const closeCreate = () => setIsCreateOpen(false);

    return {
        isEditOpen,
        openEdit,
        closeEdit,
        isCreateOpen,
        openCreate,
        closeCreate,
    };
};