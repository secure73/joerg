import React from 'react';

export default function Timeline({ events = [], lang = 'en' }) {
    const labels = {
        en: { title: 'Timeline', noEvents: 'No events to display.' },
        de: { title: 'Zeitstrahl', noEvents: 'Keine Ereignisse vorhanden.' }
    };
    const t = labels[lang] || labels.en;

    return (
        <div className="timeline">
            <h2>{t.title}</h2>
            {events.length === 0 ? (
                <p>{t.noEvents}</p>
            ) : (
                <ul className="timeline-list">
                    {events.map((event, idx) => (
                        <li key={idx} className="timeline-event">
                            <div className="timeline-date">{event.date}</div>
                            <div className="timeline-content">{event.content}</div>
                        </li>
                    ))}
                </ul>
            )}
            <style>{`
                .timeline { padding: 1rem; border-left: 2px solid #e5e7eb; }
                .timeline-list { list-style: none; padding: 0; }
                .timeline-event { margin-bottom: 1.5rem; position: relative; }
                .timeline-date { font-weight: bold; color: #6b7280; margin-bottom: 0.25rem; }
                .timeline-content { background: #f9fafb; padding: 0.75rem; border-radius: 0.5rem; }
            `}</style>
        </div>
    );
} 