interface PropsModalBox {
    image: string;
    name: string;
    faction: string;
    iconCompany: string;
    statusPosition: string;
    status: {
        m: string;
        t: string;
        sv: string;
        w: string;
        ld: string;
        oc: string;
    };
    tags: string[],
    AvailableActions: AvailableActionsProps[]
}

interface AvailableActionsProps {
    cp: string;
    type: string;
    icon: string;
    title: string;
}