interface FactionProps {
    title: string;
    products: PropsModalBox[];
}

interface PropsModalBox {
    image: string[];
    name: string;
    faction: string;
    iconCompany: JSX.Element;
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
    AvailableActions: AvailableActionsProps[];
    subtitle: string;
    description: string;
    author: string;
}

interface AvailableActionsProps {
    cp: string;
    type: string;
    icon: string;
    title: string;
}

interface DistProps {
    finalPosition?: number;
    startX: number;
    movement: number;
    movePosition?: number;
    sideNow: number;
}