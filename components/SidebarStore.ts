export const SidebarStore = {
    listeners: new Set<() => void>(),
    isCollapsed: false,
    subscribe(l: () => void) {
        SidebarStore.listeners.add(l);
        return () => SidebarStore.listeners.delete(l);
    },
    getSnapshot() {
        return SidebarStore.isCollapsed;
    },
    toggle() {
        SidebarStore.isCollapsed = !SidebarStore.isCollapsed;
        SidebarStore.listeners.forEach(l => l());
    }
};
