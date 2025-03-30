

export default function ExpenseItem(props: {description: string, value: number}) {
    return (
        <div>
            <div className="expense-description">{props.description}</div>
            <div className="expense-value">{props.value} PLN</div>
        </div>
    );
}