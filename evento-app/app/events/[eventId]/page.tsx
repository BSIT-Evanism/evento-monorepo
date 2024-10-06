import { EventPage } from "@/components/event-page"


export default function EventPageNest({ params }: { params: { eventId: string } }) {
    return (
        <div>
            <h1>Event {params.eventId}</h1>
            <EventPage />
        </div>
    )
}