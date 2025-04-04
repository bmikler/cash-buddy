import { Frequency } from '../../types/Frequency';

type CategoryDetailsProps = {
    description: string;
    limit: number;
    type: Frequency;
};

export default function CategoryDetails({ description, limit, type }: CategoryDetailsProps) {
    return (
        <div className="details">
            {/* You could style the name differently, but here's a minimal approach */}
            <p className="details__value" style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                {description}
            </p>
            <p>
                <span className="details__label">Limit:</span>
                <span className="details__value">{limit}</span>
            </p>
            <p>
                <span className="details__label">Frequency:</span>
                <span className="details__value">{type}</span>
            </p>
        </div>
    );
}