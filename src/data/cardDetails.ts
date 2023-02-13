import Boxp from "../Asset/Logos/Onboarding/Boxplus.png";
import Group from "../Asset/Logos/Onboarding/Group.png";
import Bus from "../Asset/Logos/Onboarding/Bus.png";
import Pend from "../Asset/Logos/Onboarding/pend.png";
import Cancel from "../Asset/Logos/Onboarding/cancel.png";

export const cardDetails: {
    title: string,
    count: number,
    url: string,
}[] = [
        { title: "Order", count: 1, url: Boxp },
        { title: "Pending", count: 1, url: Pend },
        { title: "In transit", count: 1, url: Bus },
        { title: "Delivered", count: 1, url: Group },
        { title: "Delayed", count: 1, url: Bus },
        { title: "Canceled", count: 1, url: Cancel },
    ];

// The Count for the details and table data will probably be done in the Dashboard context