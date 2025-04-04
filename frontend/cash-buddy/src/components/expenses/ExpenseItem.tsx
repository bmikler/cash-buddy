
type ExpenseItemProps = {
    description: string;
    value: number;
};

export default function ExpenseItem({ description, value }: ExpenseItemProps) {
    return (
        <div>
            <span>{description} - </span>
            <span>{value} PLN</span>
        </div>
    );
}